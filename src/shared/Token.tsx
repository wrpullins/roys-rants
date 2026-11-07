import styled from "@emotion/styled";
import type { ComponentPropsWithoutRef } from "react";
import { useTheme, type Theme } from "../theme";

const StyledToken = styled.span<{ theme: Theme }>`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.text.muted};
  border-radius: 0.35rem;
  padding: 0.2rem 0.65rem;
  font-size: 0.9rem;
`;

const Token = (props: ComponentPropsWithoutRef<"span">) => {
  const { theme } = useTheme();

  return <StyledToken {...props} theme={theme} />;
};

export default Token;
