import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";
import { useTheme } from "../../theme/useTheme";
import type { Theme } from "../../theme/theme";

const StyledTextBox = styled.pre<{ theme: Theme }>`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 1rem;
  max-width: 600px;

  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow-x: auto;
`;

const TextBox: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return <StyledTextBox theme={theme}>{children}</StyledTextBox>;
};

export default TextBox;
