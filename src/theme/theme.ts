export type HexColor = `#${string}`;

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
  primary: HexColor;
  secondary: HexColor;

  background: HexColor;
  foreground: HexColor;

  //remove these and put into typography.
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };

  success: HexColor;
  warning: HexColor;
  error: HexColor;
};

export type Theme = {
  name: string;
  typography: Typography;
  colors: Colors;
};

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
    primary: "#D73535",
    secondary: "#F59E0B",

    background: "#FAF3E1",
    foreground: "#F5E7C6",

    text: {
      primary: "#222222",
      secondary: "#D73535",
      muted: "#6B7280",
    },

    success: "#10B981",
    warning: "#F59E0B",
    error: "#D73535",
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
    primary: "#cc4f0c",
    secondary: "#F59E0B",

    background: "#222222",
    foreground: "#5f5f5b",

    text: {
      primary: "#fcfcfc",
      secondary: "#F59E0B",
      muted: "#dadbdf",
    },

    success: "#10B981",
    warning: "#F59E0B",
    error: "#D73535",
  },
};
