/** @jsxImportSource @emotion/react */
import type { FC } from "react";
import Box from "./Box";
import { css } from "@emotion/react";
import AnimatedLink from "../pages/home/AnimatedLink";
import { faBackspace, faBackward } from "@fortawesome/free-solid-svg-icons";

type UnderConstructionProps = {
  page: string;
};

const style = () => css`
  img {
    width: 600px;
  }
`;

const UnderConstruction: FC<UnderConstructionProps> = ({ page }) => {
  return (
    <Box alignItems="center" css={style()}>
      <img src="/under_construction.svg" />
      <h1>{`${page} is a work in progress`}</h1>
      Only so many hours in a day. Check back later.
      <AnimatedLink route="/home" label="Return to Home" icon={faBackspace} />
    </Box>
  );
};

export default UnderConstruction;
