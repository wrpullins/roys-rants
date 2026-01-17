import type { FC, PropsWithChildren } from "react";
import type { Theme } from "../theme/themes";
import styled from "@emotion/styled";
import { useTheme } from "../theme/useTheme";
import { spacing } from "../theme";

type ButtonProps = {
  onClick: () => void;
  variant?: "primary" | "secondary" | "cancel";
  disabled?: boolean;
} & PropsWithChildren;

//TODO style up 3 variations.
const PrimaryButton = styled.button<{ theme: Theme }>`
  border-radius: 3px;

  ${({ theme }) =>
    `
    padding: ${spacing.hu.px};
    border:1px solid ${theme.colors.primary300};
    font-fmaily: ${theme.typography.body.font};
    font-weight: ${theme.typography.body.weight};
    background-color:${theme.colors.primary300};
    color: ${theme.colors.white};

    &:hover{
      background-color: ${theme.colors.primary200};
    }
  `}
`;

const SecondaryButton = styled.button<{ theme: Theme }>`

  font-fmaily: ${({ theme }) => theme.typography.body.font}
  font-weight: ${({ theme }) => theme.typography.body.weight}
  border-radius:3px;

`;

const CancelButton = styled.button<{ theme: Theme }>`

  font-fmaily: ${({ theme }) => theme.typography.body.font}
  font-weight: ${({ theme }) => theme.typography.body.weight}
  border-radius:3px;

`;

export const Button: FC<ButtonProps> = ({ children, onClick, variant }) => {
  const { theme } = useTheme();

  if (variant === "secondary")
    return (
      <SecondaryButton theme={theme} onClick={onClick}>
        {children}
      </SecondaryButton>
    );

  if (variant === "cancel")
    return (
      <CancelButton theme={theme} onClick={onClick}>
        {children}
      </CancelButton>
    );

  return (
    <PrimaryButton theme={theme} onClick={onClick}>
      {children}
    </PrimaryButton>
  );
};
