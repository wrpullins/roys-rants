/** @jsxImportSource @emotion/react */
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row";
import { css } from "@emotion/react";
import { useTheme } from "../../theme/useTheme";
import type { Colors } from "../../theme/colors";

type AnimatedLinkProps = {
  route: string;
  label: string;
  icon: IconDefinition;
};

const style = (colors: Colors) => css`
  text-decoration: none;
  color: inherit;
  display: inline-block;

  color: ${colors.TextPrimary};

  &:hover {
    color: ${colors.TextSecondary};
  }

  .label {
    display: inline-block;
    width: 0;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-8px);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  svg {
    transition: transform 0.4s ease;
    flex-shrink: 0;
  }

  &:hover svg {
    transform: rotate(360deg);
  }

  &:hover .label {
    width: max-content;
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedLink: FC<AnimatedLinkProps> = ({ route, label, icon }) => {
  const { theme } = useTheme();

  return (
    <Link css={style(theme.colors)} to={route}>
      <Row spacing="0.4rem" alignItems="center">
        <FontAwesomeIcon icon={icon} />
        <span className="label">{label}</span>
      </Row>
    </Link>
  );
};

export default AnimatedLink;
