import type { FC } from "react"
import styled from "@emotion/styled";
import { spacing, useTheme, type Theme } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

type ErrorProps = {
    message: string
}


const StyledError = styled.div<{ theme: Theme; }>`
  appearance: none;
  border: 1px solid;
  border-radius: 0.4rem;
  padding: ${spacing.qu.px} ${spacing.u.px};
  font-family: ${({ theme }) => theme.typography.body.font};
  cursor: pointer;

  ${({ theme }) => `
      color: ${theme.colors.error200};
      background-color: ${theme.colors.error50};
      border-color: ${theme.colors.shade200};
    `
    }}

`;

export const Error: FC<ErrorProps> = ({ message }) => {
    const { theme } = useTheme();
    return <StyledError theme={theme}><FontAwesomeIcon icon={faExclamationTriangle} />{message}</StyledError>
} 