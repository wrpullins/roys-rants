import type { FC } from "react";
import Page from "../../components/layout/Page";
import UnderConstruction from "../../components/UnderConstruction";

const CV: FC = () => {
  return (
    <Page centeredContent>
      <UnderConstruction page="CV" />
    </Page>
  );
};

export default CV;
