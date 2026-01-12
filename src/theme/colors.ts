export type HexColor = `#${string}`;

export type Colors = {
  Primary: HexColor;
  Secondary: HexColor;

  Background: HexColor;
  Foreground: HexColor;

  TextPrimary: HexColor;
  TextSecondary: HexColor;
  TextMuted: HexColor;

  Success: HexColor;
  Warning: HexColor;
  Error: HexColor;
};

export type Theme = {
  name: string;
  colors: Colors;
};

export const LightTheme: Theme = {
  name: "light",
  colors: {
    Primary: "#D73535",
    Secondary: "#F59E0B",

    Background: "#FAF3E1",
    Foreground: "#F5E7C6",

    TextPrimary: "#222222",
    TextSecondary: "#D73535",
    TextMuted: "#6B7280",

    Success: "#10B981",
    Warning: "#F59E0B",
    Error: "#D73535",
  },
};

export const DarkTheme: Theme = {
  name: "dark",
  colors: {
    Primary: "#cc4f0c",
    Secondary: "#F59E0B",

    Background: "#222222",
    Foreground: "#5f5f5b",

    TextPrimary: "#fcfcfc",
    TextSecondary: "#F59E0B",
    TextMuted: "#dadbdf",

    Success: "#10B981",
    Warning: "#F59E0B",
    Error: "#D73535",
  },
};
