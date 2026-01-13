import type { FC, PropsWithChildren } from "react";
import type { Theme } from "../theme/theme";
import styled from "@emotion/styled";
import { useTheme } from "../theme/useTheme";

type ButtonProps = {
  onClick: () => void;
  variant?: "primary" | "secondary" | "cancel";
  disabled?: boolean;
} & PropsWithChildren;

//TODO style up 3 variations.
const StyledButton = styled.button<{ variant: string; theme: Theme }>``;

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton variant={variant} theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
