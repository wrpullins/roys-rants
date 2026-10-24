import type { FC } from "react";
import Page from "../../shared/layout/Page";
import UnderConstruction from "../../shared/UnderConstruction";

const Gallery: FC = () => {
  return (
    <Page centeredContent>
      <UnderConstruction page="Gallery" />
    </Page>
  );
};

export default Gallery;
