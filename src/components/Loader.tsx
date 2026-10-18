import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useTheme } from "../theme/useTheme";

type LoaderProps = {
  size?: number;
  label?: string;
  variant?: "default" | "button";
};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  display: inline-block;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
  border: 3px solid;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 750ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Loader = ({ size, label = "Loading", variant = "default" }: LoaderProps) => {
  const { theme } = useTheme();
  const button = variant === "button";
  const diameter = size ?? (button ? 16 : 24);

  return (
    <Spinner
      role="status"
      aria-label={label}
      style={{
        width: diameter,
        height: diameter,
        borderWidth: button ? 2 : 3,
        color: button ? "inherit" : theme.colors.primary300,
      }}
    />
  );
};

export default Loader;
