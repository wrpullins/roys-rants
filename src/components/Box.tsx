import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

type BoxProps = {
  padding?: string;
  margin?: string;
  spacing?: string;
} & PropsWithChildren;

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  ${({ spacing }) => spacing && `gap: ${spacing};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
`;

export default Box;
