import { useEffect, type FC } from "react";
import type { Theme } from "../../theme";
import { useTheme } from "../../theme/useTheme";
import styled from "@emotion/styled";
import { MediaSizes } from "../../theme/mediaSizes";

const StyledFancyTitle = styled.div<{ theme: Theme }>`
  position: relative;

  img {
    z-index: -10;
  }

  .title {
    text-align: center;
    position: absolute;
    font-size: 3rem;
    bottom: 3rem;
    left: 20rem;
    font-family: ${({ theme }) => theme.typography.heading.font};
    font-weight: ${({ theme }) => theme.typography.heading.weight};
    color: ${({ theme }) => theme.colors.text.secondary};

    div {
      border-top: 1px solid ${({ theme }) => theme.colors.secondary300};
      font-size: 1rem;
    }
  }

  @media (width <= ${MediaSizes.small} ) {
    img {
      width: 300px;
    }

    .title {
      font-size: 1.8rem;
      bottom: 0.4rem;
      left: 9rem;

      div {
        font-size: 0.8rem;
      }

  }
`;

export const FancyTitle: FC = () => {
  const { theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  });
  return (
    <StyledFancyTitle theme={theme}>
      <img src="/roy_ranting.svg" />
      <div className="title">
        Roys Rants
        <div>Random musings of a madman</div>
      </div>
    </StyledFancyTitle>
  );
};
