import type { FC } from "react";
import Page from "../../components/Page";
import { FancyTitle } from "./FancyTitle";
import TextBox from "./TextBox";
import Box from "../../components/Box";
import Anchor from "../../components/Anchor";
import { ThemeToggle } from "./ThemeToggle";
import Row from "../../components/Row";
import AnimatedLink from "./AnimatedLink";
import {
  faAddressCard,
  faArrowRightToBracket,
  faBlog,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

const Home: FC = () => {
  return (
    <Page centeredContent>
      <ThemeToggle />
      <Box>
        <FancyTitle />

        <Row
          spacing="1rem"
          alignItems="center"
          alignContent="center"
          justifyContent="space-evenly"
        >
          <AnimatedLink
            route="/login"
            label="login"
            icon={faArrowRightToBracket}
          />
          <AnimatedLink route="/blog" label="Blog" icon={faBlog} />
          <AnimatedLink route="/gallery" label="Gallery" icon={faImages} />
          <AnimatedLink
            route="/cv"
            label="Curriculum Vitae"
            icon={faAddressCard}
          />
        </Row>

        <TextBox>
          <p>
            If you are happy and you know it, clap your hands, but I would
            rather shit in my hands and clap. Not sure what to say here. Content
            isn't my thing in general.
          </p>

          <p>
            This is a just a place for me to work on random coding projects.
            Spare time is a luxury, I will add to this whenever I can find a
            minute or two to bash things out.
          </p>

          <p>
            Hopefully it will demonstrate some of those fullstack (React /
            Springboot) skills I claim to have.
          </p>

          <p>
            If you have any questions or queries there is absolutely no point in
            contacting me. I don't reply to simple text messages. Nevermind
            people on the internet. Here is a{" "}
            <Anchor href="mailto: w.r.pullins@gmail.com">mailto</Anchor> anyway
            because why not.
          </p>
        </TextBox>
      </Box>
    </Page>
  );
};

export default Home;
