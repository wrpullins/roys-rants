import type { FC } from "react";
import Page from "../../shared/layout/Page";
import ToolBar from "../../shared/layout/ToolBar";
import { ThemeToggle } from "../home/ThemeToggle";
import { Navigation } from "../../shared/nav/Navigation";

const Blog: FC = () => {
  return (
    <Page>
      <ToolBar>
        <Navigation active="blog" />
        <ThemeToggle />
      </ToolBar>
    </Page>
  );
};

export default Blog;
