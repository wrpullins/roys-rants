import { useEffect, useState, type FC } from "react";
import Page from "../components/Page";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackspace,
  faLink,
  faLinkSlash,
} from "@fortawesome/free-solid-svg-icons";
import type { Theme } from "../theme/theme";
import { useTheme } from "../theme/useTheme";
import AnimatedLink from "./home/AnimatedLink";

const StyledNotFound = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: ${({ theme }) => theme.colors.error};
    font-size: 3rem;
    padding: 2rem;
    animation: flip 0.6s ease-in-out;
  }

  .text {
    display: flex;
    flex-direction: column;

    .title {
      font-family: ${({ theme }) => theme.typography.heading.font};
      font-weight: ${({ theme }) => theme.typography.heading.weight};
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 2rem;
    }
  }

  @keyframes flip {
    0% {
      transform: rotateY(0deg) scale(1);
      opacity: 1;
    }
    50% {
      transform: rotateY(90deg) scale(0.9);
      opacity: 0.3;
    }
    100% {
      transform: rotateY(180deg) scale(1);
      opacity: 1;
    }
  }
`;

const NotFound: FC = () => {
  const { theme } = useTheme();
  const [broken, setBroken] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBroken((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Page centeredContent>
      <StyledNotFound theme={theme}>
        <FontAwesomeIcon
          key={broken ? "broken" : "linked"}
          icon={broken ? faLinkSlash : faLink}
          className="icon"
        />
        <div className="text">
          <div className="title">404: This URL does not exist</div>
          <div className="message">
            Not sure how you arrived here, so fuck off.
          </div>
          <AnimatedLink
            route="/home"
            label="Return to Home"
            icon={faBackspace}
          />
        </div>
      </StyledNotFound>
    </Page>
  );
};

export default NotFound;
