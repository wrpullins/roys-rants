import type { Theme } from "./themeTypes";

export const LightTheme: Theme = {
  name: "light",
  typography: {
    heading: {
      font: "courier",
      weight: "600",
    },
    body: {
      font: "system-ui, Avenir, Helvetica, Arial, sans-serif",
      weight: "400",
    },
    link: {
      font: "system-ui, Avenir, Helvetica, Arial, sans-serif",
      weight: "600",
    },
  },
  colors: {
    white: "#ffffff",
    whiteOverlay: "rgba(255, 255, 255, 0.7)",
    black: "#000000",
    blackOverlay: "rgba(0, 0, 0, 0.3)",

    primary50: "#F9B590",
    primary100: "#F69865",
    primary200: "#F37B39",
    primary300: "#F15D0E",

    secondary50: "#FAD38E ",
    secondary100: "#F8C162",
    secondary200: "#F7B036",
    secondary300: "#F59E0B",

    background: "#FAF3E1",
    foreground: "#F5E7C6",

    shade100: "#f8f8f8",
    shade200: "#f4f4f4",
    shade300: "#e0e0e0",
    shade400: "#c6c6c6",
    shade500: "#a8a8a8",
    shade600: "#6f6f6f",
    shade700: "#252525",
    shade800: "#1a1a1a",

    error50: "#f5e3e3",
    error100: "#efc2c2",
    error200: "#c83532",
    error300: "#641a19",

    warning50: "#fdf8b6ff",
    warning100: "#FFF100",
    warning200: "#ffd000ff",
    warning300: "#c09600ff",

    information50: "#e8dffc",
    information100: "#4a387a",
    information200: "#1d0659",
    information300: "none",

    success50: "#D3F3D9",
    success100: "#81D490",
    success200: "#35A849",
    success300: "#034A0F",

    text: {
      primary: "#222222",
      secondary: "#D73535",
      muted: "#6B7280",
    },
  },
};

export const DarkTheme: Theme = {
  name: "dark",
  typography: {
    heading: {
      font: "courier",
      weight: "600",
    },
    body: {
      font: "system-ui, Avenir, Helvetica, Arial, sans-serif",
      weight: "400",
    },
    link: {
      font: "system-ui, Avenir, Helvetica, Arial, sans-serif",
      weight: "600",
    },
  },
  colors: {
    white: "#ffffff",
    whiteOverlay: "rgba(255, 255, 255, 0.7)",
    black: "#000000",
    blackOverlay: "rgba(0, 0, 0, 0.3)",

    primary50: "#F9B590",
    primary100: "#F69865",
    primary200: "#F37B39",
    primary300: "#F15D0E",

    secondary50: "#FAD38E ",
    secondary100: "#F8C162",
    secondary200: "#F7B036",
    secondary300: "#F59E0B",

    background: "#222222",
    foreground: "#5f5f5b",
    shade100: "#f8f8f8",
    shade200: "#f4f4f4",
    shade300: "#e0e0e0",
    shade400: "#c6c6c6",
    shade500: "#a8a8a8",
    shade600: "#6f6f6f",
    shade700: "#252525",
    shade800: "#1a1a1a",

    error50: "#f5e3e3",
    error100: "#efc2c2",
    error200: "#c83532",
    error300: "#641a19",

    warning50: "#fdf8b6ff",
    warning100: "#FFF100",
    warning200: "#ffd000ff",
    warning300: "#c09600ff",

    information50: "#e8dffc",
    information100: "#4a387a",
    information200: "#1d0659",
    information300: "none",

    success50: "#D3F3D9",
    success100: "#81D490",
    success200: "#35A849",
    success300: "#034A0F",

    text: {
      primary: "#fcfcfc",
      secondary: "#F59E0B",
      muted: "#dadbdf",
    },
  },
};
