import { useState, useCallback, useMemo } from "react";

type ValidationFn<V> = (value: V) => string | undefined;

type FieldRules<V> = {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  validate?: ValidationFn<V>;
  isVisible?: boolean;
  isEditable?: boolean;
};

type DynamicFieldRules<V, T, C> =
  | FieldRules<V>
  | ((context: C, formContent: T) => FieldRules<V>);

export type FormRules<T, C> = {
  [K in keyof T]?: DynamicFieldRules<T[K], T, C>;
};

type FieldState<V> = {
  value: V | null;
  isValid: boolean;
  error?: string;
  isVisible: boolean;
  isEditable: boolean;
  isPristine: boolean;
  maxLength?: number;
  minLength?: number;
};

type DecoratedFieldState<V> = FieldState<V> & {
  update: (value: V | null) => void;
};

type FormState<T> = {
  fields: { [K in keyof T]: DecoratedFieldState<T[K]> };
  isPristine: boolean;
  isValid: boolean;
  formContent: T;
  resetForm: (nextInitial?: AllOptional<T>) => void;
  validateForm: () => boolean; // returns allValid
};

type AllOptional<T> = { [K in keyof T]-?: T[K] | undefined | null };

export const useForm = <T, C = unknown>(
  initialValues: AllOptional<T>,
  rules?: FormRules<T, C>,
  context?: C
): FormState<T> => {
  const isEmpty = (val: unknown): boolean => {
    if (val === null || val === undefined) return true;
    if (typeof val === "string") return val.trim() === "";
    if (Array.isArray(val)) return val.length === 0;
    if (typeof val === "object") return Object.keys(val).length === 0;
    return false;
  };

  const computeRules = useCallback(
    <K extends keyof T>(
      key: K,
      currentForm: T
    ): FieldRules<T[K]> | undefined => {
      const rule = rules?.[key];
      if (!rule) return undefined;
      return typeof rule === "function"
        ? rule(context as C, currentForm)
        : rule;
    },
    [rules, context]
  );

  const validateField = useCallback(
    <K extends keyof T>(
      key: K,
      value: T[K] | null,
      currentForm: T
    ): [boolean, string?] => {
      const rule = computeRules(key, currentForm);
      if (!rule) return [true];

      if (rule.required && isEmpty(value)) {
        return [false, "Required"];
      }

      if (value !== null) {
        if (
          rule.maxLength &&
          typeof value === "string" &&
          value.trim().length > rule.maxLength
        ) {
          return [false, `Max length ${rule.maxLength}`];
        }
        if (rule.minLength && String(value).length < rule.minLength) {
          return [false, `Min length ${rule.minLength}`];
        }
        if (rule.validate) {
          const result = rule.validate(value);
          if (typeof result !== "undefined")
            return [false, result ?? "Invalid"];
        }
      }

      return [true];
    },
    [computeRules]
  );

  const [managedInitialValues, setManagedInitialValues] =
    useState<AllOptional<T>>(initialValues);

  const buildInitialFields = useCallback(
    (seed?: AllOptional<T>) => {
      const effectiveInitial = seed
        ? { ...managedInitialValues, ...seed }
        : managedInitialValues;

      const obj = {} as { [K in keyof T]: FieldState<T[K]> };

      const allKeys = new Set<keyof T>([
        ...(Object.keys(effectiveInitial || {}) as (keyof T)[]),
        ...(Object.keys(rules || {}) as (keyof T)[]),
      ]);

      const currentForm = {} as T;
      allKeys.forEach((key) => {
        currentForm[key] = (effectiveInitial?.[key] ?? null) as T[keyof T];
      });

      allKeys.forEach((key) => {
        const rule = computeRules(key, currentForm);
        const value = effectiveInitial?.[key] ?? null;

        obj[key] = {
          value,
          isValid: true,
          error: undefined,
          isVisible: rule?.isVisible ?? true,
          isEditable: rule?.isEditable ?? true,
          isPristine: true,
          maxLength: rule?.maxLength,
          minLength: rule?.minLength,
        };
      });

      return obj;
    },
    [managedInitialValues, computeRules, rules]
  );

  const [fields, setFields] = useState(buildInitialFields);

  const [hasValidated, setHasValidated] = useState(false);

  const updateField = useCallback(
    <K extends keyof T>(key: K, value: T[K] | null) => {
      setFields((prev) => {
        const currentForm = Object.fromEntries(
          Object.entries(prev).map(([k, v]) => [
            k,
            (v as FieldState<any>).value,
          ])
        ) as T;
        currentForm[key] = value as T[K];

        const updatedFields = {} as typeof prev;

        (Object.keys(prev) as (keyof T)[]).forEach((fieldKey) => {
          const fieldValue = fieldKey === key ? value : prev[fieldKey].value;
          const rule = computeRules(fieldKey, currentForm);

          if (hasValidated) {
            // After first validate, re-validate on every change
            const [isValid, error] = validateField(
              fieldKey,
              fieldValue,
              currentForm
            );
            updatedFields[fieldKey] = {
              ...prev[fieldKey],
              value: fieldValue,
              isValid,
              error,
              isPristine: fieldKey === key ? false : prev[fieldKey].isPristine,
              isVisible: rule?.isVisible ?? true,
              isEditable: rule?.isEditable ?? true,
              maxLength: rule?.maxLength,
              minLength: rule?.minLength,
            };
          } else {
            // Before first validate, suppress validation
            updatedFields[fieldKey] = {
              ...prev[fieldKey],
              value: fieldValue,
              isValid: true,
              error: undefined,
              isPristine: fieldKey === key ? false : prev[fieldKey].isPristine,
              isVisible: rule?.isVisible ?? true,
              isEditable: rule?.isEditable ?? true,
              maxLength: rule?.maxLength,
              minLength: rule?.minLength,
            };
          }
        });

        return updatedFields;
      });
    },
    [validateField, computeRules, hasValidated]
  );

  const resetForm = useCallback(
    (nextInitial?: AllOptional<T>) => {
      if (nextInitial) {
        setManagedInitialValues((prev) => ({ ...prev, ...nextInitial }));
        setFields(buildInitialFields(nextInitial));
      } else {
        setFields(buildInitialFields());
      }
      setHasValidated(false);
    },
    [buildInitialFields]
  );

  const validateForm = useCallback(() => {
    let allValid = true;

    setFields((prev) => {
      const currentForm = Object.fromEntries(
        Object.entries(prev).map(([k, v]) => [k, (v as FieldState<any>).value])
      ) as T;

      const updated = { ...prev };
      (Object.keys(prev) as (keyof T)[]).forEach((key) => {
        const [isValid, error] = validateField(
          key,
          prev[key].value,
          currentForm
        );
        updated[key] = { ...prev[key], isValid, error };
        if (!isValid) allValid = false;
      });
      return updated;
    });

    setHasValidated(true);
    return allValid;
  }, [validateField]);

  const formContent = {} as T;
  (Object.keys(fields) as (keyof T)[]).forEach((key) => {
    formContent[key] = fields[key].value as T[keyof T];
  });

  const isValid = (Object.keys(fields) as (keyof T)[]).every(
    (key) => fields[key].isValid
  );
  const isPristine = (Object.keys(fields) as (keyof T)[]).every(
    (key) => fields[key].isPristine
  );

  const decoratedFields = useMemo(() => {
    const obj = {} as { [K in keyof T]: DecoratedFieldState<T[K]> };
    (Object.keys(fields) as (keyof T)[]).forEach((key) => {
      obj[key] = {
        ...fields[key],
        update: (value) => updateField(key, value),
      };
    });
    return obj;
  }, [fields, updateField]);

  return {
    fields: decoratedFields,
    isPristine,
    isValid,
    formContent,
    resetForm,
    validateForm,
  };
};
