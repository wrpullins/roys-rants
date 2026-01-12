import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";
import { useTheme } from "../../theme/useTheme";
import type { Colors } from "../../theme/colors";

const StyledTextBox = styled.pre<{ colors: Colors }>`
  border: 1px solid ${({ colors }) => colors.Secondary};
  border-radius: 10px;
  background-color: ${({ colors }) => colors.Foreground};
  padding: 1rem;
  max-width: 600px;

  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow-x: auto;
`;

const TextBox: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return <StyledTextBox colors={theme.colors}>{children}</StyledTextBox>;
};

export default TextBox;
