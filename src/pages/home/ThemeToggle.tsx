import type { FC } from "react";
import { useTheme } from "../../theme/useTheme";
import { DarkTheme, LightTheme, type Colors } from "../../theme/colors";
import styled from "@emotion/styled";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleButton = styled.button<{ colors: Colors }>`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ colors }) => colors.Secondary};
`;

const AbsoluteBox = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 1rem;
`;

export const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  const isLight = theme.name === "light";

  const toggleTheme = () =>
    isLight ? setTheme(DarkTheme) : setTheme(LightTheme);

  const button = () =>
    isLight ? (
      <ToggleButton colors={theme.colors} onClick={toggleTheme}>
        <FontAwesomeIcon icon={faToggleOff} />
      </ToggleButton>
    ) : (
      <ToggleButton colors={theme.colors} onClick={toggleTheme}>
        <FontAwesomeIcon icon={faToggleOn} />
      </ToggleButton>
    );

  return <AbsoluteBox>{button()}</AbsoluteBox>;
};
