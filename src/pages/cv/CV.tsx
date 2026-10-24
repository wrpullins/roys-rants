import type { FC } from "react";
import Page from "../../shared/layout/Page";
import UnderConstruction from "../../shared/UnderConstruction";

const CV: FC = () => {
  return (
    <Page centeredContent>
      <UnderConstruction page="CV" />
    </Page>
  );
};

export default CV;
