import { DarkTheme, LightTheme } from "./themes";
import type { Theme } from "./themeTypes";

const STORAGE_KEY = "roys-rants.theme";
let currentTheme: string | undefined;

export const getStoredTheme = (): Theme => {
    if (currentTheme) return getTheme(currentTheme);

    try {
        const storedTheme = localStorage.getItem(STORAGE_KEY);
        if (storedTheme) {
            currentTheme = storedTheme;
            return getTheme(storedTheme);
        }
    } catch {
        // Storage may be blocked; keep the key in memory for this page session.
    }

    return getTheme('light')
}

export const setStoredTheme = (theme: Theme) => {
    localStorage.setItem(STORAGE_KEY, theme.name);
}

const getTheme = (name: string): Theme => {
    const newTheme = name === "light" ? LightTheme : DarkTheme

    return newTheme;
} 