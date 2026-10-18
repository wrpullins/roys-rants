import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";
import { useTheme, type Colors } from "../theme";

type AnchorProps = { href: string } & PropsWithChildren;

const StyledAnchor = styled.a<{ colors: Colors }>`
  color: ${({ colors }) => colors.text.secondary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Anchor: FC<AnchorProps> = ({ href, children }) => {
  const { theme } = useTheme();

  return (
    <StyledAnchor colors={theme.colors} href={href}>
      {children}
    </StyledAnchor>
  );
};

export default Anchor;
