/** @jsxImportSource @emotion/react */
import type { FC } from "react";
import Box from "./Box";
import { css } from "@emotion/react";
import AnimatedLink from "../pages/home/AnimatedLink";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { MediaSizes } from "../theme/mediaSizes";

type UnderConstructionProps = {
  page: string;
};

const style = () => css`
  img {
    width: 600px;
  }

  @media (width <= ${MediaSizes.small}) {
    img {
      width: 300px;
    }
  }
`;

const UnderConstruction: FC<UnderConstructionProps> = ({ page }) => {
  return (
    <Box alignItems="center" css={style()}>
      <img src="/under_construction.svg" />
      <h1>{`${page} is a work in progress`}</h1>
      Only so many hours in a day. Check back later.
      <AnimatedLink
        slidingLabel={false}
        to="/home"
        label="Home"
        icon={faBackspace}
      />
    </Box>
  );
};

export default UnderConstruction;
