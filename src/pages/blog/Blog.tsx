import type { FC } from "react";
import styled from "@emotion/styled";
import {
  faAddressCard,
  faArrowRightToBracket,
  faBlog,
  faHouse,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import Page from "../../shared/layout/Page";
import { useAuthStore } from "../../hooks/useAuthStore";
import ToolBar from "../../shared/layout/ToolBar";
import { ThemeToggle } from "../home/ThemeToggle";
import { Navigation } from "../../shared/nav/Navigation";
import AnimatedLink from "../../shared/nav/AnimatedLink";

const Blog: FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <Page>
      <ToolBar>
        <Navigation aria-label="Site navigation">
          {!user && (
            <AnimatedLink
              to="/login"
              label="Login"
              icon={faArrowRightToBracket}
            />
          )}          
          <AnimatedLink to="/" label="Home" icon={faHouse} />
          <AnimatedLink to="/blog" label="Blog" icon={faBlog} active />
          <AnimatedLink to="/gallery" label="Gallery" icon={faImages} />
          <AnimatedLink to="/cv" label="CV" icon={faAddressCard} />
        </Navigation>
        <ThemeToggle />
      </ToolBar>
    </Page>
  );
};

export default Blog;
