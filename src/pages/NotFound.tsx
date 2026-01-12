import { useEffect, useState, type FC } from "react";
import Page from "../components/Page";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import type { Colors } from "../theme/colors";
import { useTheme } from "../theme/useTheme";

const StyledNotFound = styled.div<{ colors: Colors }>`
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: ${({ colors }) => colors.Error};
    font-size: 3rem;
    padding: 2rem;
    animation: flip 0.6s ease-in-out;
  }

  .text {
    display: flex;
    flex-direction: column;

    .title {
      font-weight: bold;
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
      <StyledNotFound colors={theme.colors}>
        <FontAwesomeIcon
          key={broken ? "broken" : "linked"} // 👈 forces animation replay
          icon={broken ? faLinkSlash : faLink}
          className="icon"
        />
        <div className="text">
          <div className="title">404 - This URL does not exist</div>
          <div className="message">
            Not sure how you arrived here, so fuck off.
          </div>
        </div>
      </StyledNotFound>
    </Page>
  );
};

export default NotFound;
