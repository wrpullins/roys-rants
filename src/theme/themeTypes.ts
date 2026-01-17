export type HexValue = `#${string}`;
export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBWithAlpha = `rgba(${number}, ${number}, ${number}, ${number})`;

export type ColorValue =
  | HexValue
  | RGB
  | RGBWithAlpha
  | "none"
  | "transparent"
  | "inherit";

export type Weight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type Typography = {
  heading: {
    font: string;
    weight: string;
  };
  body: {
    font: string;
    weight: string;
  };
  link: {
    font: string;
    weight: string;
  };
};

export type Colors = {
  white: ColorValue;
  whiteOverlay: ColorValue;
  black: ColorValue;
  blackOverlay: ColorValue;

  primary50: ColorValue;
  primary100: ColorValue;
  primary200: ColorValue;
  primary300: ColorValue;

  secondary50: ColorValue;
  secondary100: ColorValue;
  secondary200: ColorValue;
  secondary300: ColorValue;

  shade100: ColorValue;
  shade200: ColorValue;
  shade300: ColorValue;
  shade400: ColorValue;
  shade500: ColorValue;
  shade600: ColorValue;
  shade700: ColorValue;
  shade800: ColorValue;

  error50: ColorValue;
  error100: ColorValue;
  error200: ColorValue;
  error300: ColorValue;

  warning50: ColorValue;
  warning100: ColorValue;
  warning200: ColorValue;
  warning300: ColorValue;

  information50: ColorValue;
  information100: ColorValue;
  information200: ColorValue;
  information300: ColorValue;

  success50: ColorValue;
  success100: ColorValue;
  success200: ColorValue;
  success300: ColorValue;

  background: ColorValue;
  foreground: ColorValue;

  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
};

export type Theme = {
  name: string;
  typography: Typography;
  colors: Colors;
};
