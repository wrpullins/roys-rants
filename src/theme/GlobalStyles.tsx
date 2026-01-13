/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { useTheme } from "./useTheme";

//TODO: GET THIS WORKING
export const GlobalTypography = () => {
  const { theme } = useTheme();

  return (
    <Global
      styles={css`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.typography.heading.font};
          font-weight: ${theme.typography.heading.weight};
          color: ${theme.colors.text.secondary};
          margin: 0;
        }

        color: ${theme.colors.text.primary};
        font-family: ${theme.typography.body.font};
        line-height: 1.5rem;
      `}
    />
  );
};
