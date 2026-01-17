import type { FC } from "react";
import Page from "../../components/layout/Page";
import UnderConstruction from "../../components/UnderConstruction";

const Blog: FC = () => {
  return (
    <Page centeredContent>
      <UnderConstruction page="Blog" />
    </Page>
  );
};

export default Blog;
