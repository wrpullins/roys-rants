import type { FC } from "react";
import type { Colors } from "../../theme/colors";
import { useTheme } from "../../theme/useTheme";
import styled from "@emotion/styled";

const StyledFancyTitle = styled.div<{ colors: Colors }>`
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
    font-family: courier;
    font-weight: bold;
    color: ${({ colors }) => colors.TextSecondary};

    div {
      border-top: 1px solid ${({ colors }) => colors.Secondary};
      font-size: 1rem;
    }
  }
`;

export const FancyTitle: FC = () => {
  const { theme } = useTheme();

  return (
    <StyledFancyTitle colors={theme.colors}>
      <img src="/roy_ranting.svg" />
      <div className="title">
        Roys Rants
        <div>Random musings of a madman</div>
      </div>
    </StyledFancyTitle>
  );
};
