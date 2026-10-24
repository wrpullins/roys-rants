import type { FC } from "react";
import styled from "@emotion/styled";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkTheme, LightTheme, useTheme, type Colors } from "../../theme";

const ToggleButton = styled.button<{ colors: Colors }>`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ colors }) => colors.secondary300};
`;

export const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  const isLight = theme.name === "light";

  const toggleTheme = () =>
    isLight ? setTheme(DarkTheme) : setTheme(LightTheme);

  return (
    <ToggleButton
      type="button"
      colors={theme.colors}
      onClick={toggleTheme}
      aria-label="Dark mode"
      aria-pressed={!isLight}
    >
      <FontAwesomeIcon icon={isLight ? faToggleOff : faToggleOn} />
    </ToggleButton>
  );
};
