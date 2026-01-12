import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

type RowProps = {
  spacing?: string; // maps to gap
  padding?: string;
  margin?: string;
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

  ${({ spacing }) => spacing && `gap: ${spacing};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
`;

export default Row;
