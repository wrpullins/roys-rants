import styled from "@emotion/styled";
import type { ComponentPropsWithoutRef } from "react";
import { spacing, type Theme } from "../../theme";
import { useTheme } from "../../theme/useTheme";

const ToolBarContainer = styled.header<{ theme: Theme }>`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  padding: ${spacing.hu.px};
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid
    ${({ theme }) =>
      `color-mix(in srgb, ${theme.colors.text.primary} 20%, ${theme.colors.foreground})`};
  box-shadow: 0 3px 8px
    ${({ theme }) =>
      theme.name === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.15)"};
`;

const Image = styled.img`
  height: ${spacing.u3.px};
  width: auto;
  flex-shrink: 0;
`;

const ToolBar = (props: ComponentPropsWithoutRef<"header">) => {
  const { theme } = useTheme();

  return (
    <ToolBarContainer {...props} theme={theme}>
      <Image src="/face.svg" alt="" />
      {props.children}
    </ToolBarContainer>
  );
};

export default ToolBar;
