import type { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { useTheme } from "../theme/useTheme";
import { spacing, type Theme } from "../theme";
import Loader from "./Loader";

type ButtonProps = {
  onClick: () => void;
  variant?: "primary" | "secondary" | "cancel";
  disabled?: boolean;
  loading?: boolean;
} & PropsWithChildren;

const StyledButton = styled.button<{ theme: Theme; variant: NonNullable<ButtonProps["variant"]> }>`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.hu.px};
  border: 1px solid;
  border-radius: 0.4rem;
  padding: ${spacing.u.px} ${spacing.u.px};
  font-family: ${({ theme }) => theme.typography.body.font};
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease,
    color 120ms ease, filter 80ms ease;

  ${({ theme, variant }) => {
    if (variant === "secondary") return `
      color: ${theme.colors.text.primary};
      background: ${theme.colors.foreground};
      border-color: ${theme.colors.shade400};
      &:hover:not(:disabled) { background: ${theme.colors.shade300}; border-color: ${theme.colors.primary300}; }
    `;
    if (variant === "cancel") return `
      color: ${theme.colors.error300};
      background: ${theme.colors.error50};
      border-color: ${theme.colors.error100};
      &:hover:not(:disabled) { background: ${theme.colors.error100}; border-color: ${theme.colors.error200}; color: ${theme.colors.error300}; }
    `;
    return `
      color: ${theme.colors.white};
      background: ${theme.colors.primary300};
      border-color: ${theme.colors.primary300};
      &:hover:not(:disabled) { background: ${theme.colors.primary200}; border-color: ${theme.colors.primary200}; }
    `;
  }}

  &:active:not(:disabled) {
    filter: brightness(0.92);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
    ${({ theme }) => theme.name === "dark" && `box-shadow: 0 0 0 3px ${theme.colors.background};`}
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    filter: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Button: FC<ButtonProps> = ({ children, onClick, variant = "primary", disabled = false, loading = false }) => {
  const { theme } = useTheme();
  return (
    <StyledButton
      type="button"
      theme={theme}
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? <Loader variant="button" /> : children}
    </StyledButton>
  );
};
