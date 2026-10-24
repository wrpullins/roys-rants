import styled from "@emotion/styled";
import { InputText, type InputTextProps } from "primereact/inputtext";
import type { FC } from "react";
import { useTheme } from "../../theme/useTheme";
import type { Theme } from "../../theme";

export type TextInputProps = InputTextProps;

const StyledInputText = styled(InputText) <{ theme: Theme }>`
  box-sizing: border-box;
  width: 100%;
  max-width: 18rem;
  min-height: 2rem;
  margin: 0;
  padding: 0.3rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.shade400};
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.body.font};
  font-size: 0.875rem;
  line-height: 1.25;
  transition: border-color 120ms ease, box-shadow 120ms ease, background-color 120ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
    opacity: 0.8;
  }

  &:hover:not(:disabled):not(:focus) {
    border-color: ${({ theme }) => theme.colors.primary200};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary300};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary300}33`};
  }

  &:active:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary300};
  }

  &:read-only {
    background: ${({ theme }) => theme.colors.background};
    cursor: default;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.p-invalid,
  &[aria-invalid="true"] {
    border-color: ${({ theme }) => theme.colors.error200};
  }

  &.p-invalid:focus,
  &[aria-invalid="true"]:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.error200}33`};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const TextInput: FC<TextInputProps> = (props) => {
  const { theme } = useTheme();
  return <StyledInputText {...props} theme={theme} />;
};
