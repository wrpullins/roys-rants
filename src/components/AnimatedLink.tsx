/** @jsxImportSource @emotion/react */
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Row from "./layout/Row";
import { css } from "@emotion/react";
import { useTheme } from "../theme/useTheme";
import { spacing, type Theme } from "../theme";
import { MediaSizes } from "../theme/mediaSizes";

type AnimatedLinkProps = {
  to: string;
  label: string;
  icon: IconDefinition;
  slidingLabel?: boolean;
};

const style = (theme: Theme, slidingLabel: boolean) => css`
  text-decoration: none;
  color: inherit;
  display: inline-block;

  color: ${theme.colors.text.primary};

  &:hover {
    color: ${theme.colors.text.secondary};
  }

  .label {
    display: inline-block;

    white-space: nowrap;
    ${slidingLabel
      ? `
        opacity: 0;
        transform: translateX(-8px);
        transition: transform 0.3s ease, opacity 0.3s ease;
      `
      : ""}
  }

  svg {
    transition: transform 0.4s ease;
    flex-shrink: 0;
  }

  &:hover svg {
    transform: rotate(360deg);
  }

  ${slidingLabel
    ? `
      &:hover .label {
        opacity: 1;
        transform: translateX(0);
      }
    `
    : ""}

  @media (width <= ${MediaSizes.small}) {
    .label {
      display: inline-block;

      white-space: nowrap;
      opacity: 1;
      transform: none;
      transition: none;
    }

    svg {
      transition: transform 0.4s ease;
      flex-shrink: 0;
    }

    &:hover svg {
      transform: none;
    }

    &:hover .label {
      opacity: 1;
      transform: none;
    }
  }
`;

const AnimatedLink: FC<AnimatedLinkProps> = ({
  to,
  label,
  icon,
  slidingLabel = true,
}) => {
  const { theme } = useTheme();

  return (
    <Link css={style(theme, slidingLabel)} to={to}>
      <Row spacing={spacing.hu} alignItems="center" alignContent="center">
        <FontAwesomeIcon icon={icon} />
        <span className="label">{label}</span>
      </Row>
    </Link>
  );
};

export default AnimatedLink;
