import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";
import type { Space } from "../../theme";

type RowProps = {
  spacing?: Space; // maps to gap
  padding?: Space;
  margin?: Space;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around";
} & PropsWithChildren;

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;

  ${({ spacing }) => spacing && `gap: ${spacing.px};`}
  ${({ padding }) => padding && `padding: ${padding.px};`}
  ${({ margin }) => margin && `margin: ${margin.px};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
`;

export default Row;
