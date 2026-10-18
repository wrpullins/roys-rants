/**
 * Spacing
 * usage:
 *   spacing.u.px
 *   spacing.u2.rawPxValue
 */
const baseUnit = 8;

const asUnits: { [key: string]: number } = {
  none: 0,
  qu: 0.25, // quarter unit
  qqqu: 0.75, // three-quarter unit
  hu: 0.5, // half unit
  u: 1, // 1 unit
  uq: 1.25, // 1 1/4 unit
  uh: 1.5, // 1 1/2 units
  uqqqq: 1.75, // 1 3/4 units
  u2: 2,
  u3: 3,
  u4: 4,
  u5: 5,
  u6: 6,
  u7: 7,
  u8: 8,
  u9: 9,
  u10: 10,
  u12: 12,
};

export type Space = {
  px: "${number}px";
  rem: "${number}rem";
  rawPxValue: number;
  baseUnitMultiplier: number;
};

const Unit = {
  Px: "px",
  Rem: "rem",
} as const;

type Unit = (typeof Unit)[keyof typeof Unit];

type Spacing = {
  qu: Space;
  qqqu: Space;
  hu: Space;
  u: Space;
  uq: Space;
  uh: Space;
  uqqq: Space;
  u2: Space;
  u3: Space;
  u4: Space;
  u5: Space;
  u6: Space;
  u7: Space;
  u8: Space;
  u9: Space;
  u10: Space;
  u12: Space;
  auto: "auto";
  none: Space;
};

export const unitValues: (
  unit: Unit
) => (...args: [number, number?, number?, number?]) => string =
  (unit) =>
  (...args) => {
    return args.map((v) => v && `${v * baseUnit}${unit}`).join(" ");
  };

export const px = unitValues(Unit.Px);
export const rem = unitValues(Unit.Rem);

const spacing: Spacing = Object.entries(asUnits).reduce(
  (acc, [key, baseUnitMultiplier]) => {
    const value = baseUnitMultiplier * baseUnit;
    return {
      ...acc,
      [key]: {
        px: `${value}px`,
        rawPxValue: value,
        rem: `${baseUnitMultiplier / (16 / baseUnit)}rem`,
        baseUnitMultiplier,
      },
    };
  },
  { auto: "auto" } as Spacing
);

export { spacing };
