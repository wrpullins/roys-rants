import type { FC } from "react";
import Page from "../../components/Page";
import UnderConstruction from "../../components/UnderConstruction";

const Gallery: FC = () => {
  return (
    <Page centeredContent>
      <UnderConstruction page="Gallery" />
    </Page>
  );
};

export default Gallery;
