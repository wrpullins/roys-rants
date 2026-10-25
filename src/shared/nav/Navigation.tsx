import type { FC } from "react";
import Row from "../layout/Row";
import { spacing } from "../../theme";
import AnimatedLink from "./AnimatedLink";
import { useAuthStore } from "../../hooks/useAuthStore";
import {
  faAddressCard,
  faArrowRightToBracket,
  faBlog,
  faHouse,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

type NavProps = {
  active: "blog" | "gallery" | "cv" | "home";
};

export const Navigation: FC<NavProps> = ({ active }) => {
  const { authenticated } = useAuthStore();

  return (
    <Row
      spacing={spacing.u}
      alignItems="center"
      alignContent="center"
      justifyContent="space-evenly"
    >
      {!authenticated && (
        <AnimatedLink to="/login" label="login" icon={faArrowRightToBracket} />
      )}
      {active != "home" && <AnimatedLink to="/" label="Home" icon={faHouse} />}
      <AnimatedLink
        to="/blog"
        label="Blog"
        icon={faBlog}
        active={active == "blog"}
      />
      <AnimatedLink
        to="/gallery"
        label="Gallery"
        icon={faImages}
        active={active == "gallery"}
      />
      <AnimatedLink
        to="/cv"
        label="CV"
        icon={faAddressCard}
        active={active == "cv"}
      />
    </Row>
  );
};
