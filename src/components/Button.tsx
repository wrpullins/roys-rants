import type { FC, PropsWithChildren } from "react";
import type { Colors } from "../theme/theme";
import styled from "@emotion/styled";
import { useTheme } from "../theme/useTheme";

type ButtonProps = {
  onClick: () => void;
  type?: "primary" | "secondary" | "cancel";
  disabled?: boolean;
} & PropsWithChildren;

//TODO style up 3 variations.
const StyledButton = styled.button<{ colors: Colors }>``;

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "primary",
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton colors={theme.colors} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
