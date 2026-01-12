import type { FC } from "react";
import Box from "./Box";
import Page from "./Page";

type UnderConstructionProps = {
  page: string;
};

const UnderConstruction: FC<UnderConstructionProps> = ({ page }) => {
  return (
    <Box>
      <img src="/under_construction.png" />
    </Box>
  );
};

export default UnderConstruction;
