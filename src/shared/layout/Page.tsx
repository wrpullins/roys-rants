import styled from "@emotion/styled";
import { useTheme } from "../../theme/useTheme";
import { Children, isValidElement, type PropsWithChildren } from "react";
import ToolBar from "./ToolBar";
import type { Theme } from "../../theme";
import { MediaSizes } from "../../theme/mediaSizes";
import { usePageVisit } from "../../hooks/usePageVisit";

const PageContainer = styled.div<{ theme: Theme }>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.typography.heading.font};
    font-weight: ${({ theme }) => theme.typography.heading.weight};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
  }

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.body.font};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;

  @media (width <= ${MediaSizes.small} ) {
    h1 {
      font-size: 1.3rem;
    }
  }
`;

const PageContent = styled.div<{ centeredContent: boolean }>`
  display: flex;
  flex: 1;
  min-height: 0;
  padding: 1rem;
  overflow: auto;
  box-sizing: border-box;

  ${({ centeredContent }) =>
    centeredContent &&
    `
      align-items: safe center;
      justify-content: safe center;
    `}
`;

type PageProps = PropsWithChildren & {
  centeredContent?: boolean;
  /** Set to false to hide a composed ToolBar. */
  withToolbar?: boolean;
};

const Page: React.FC<PageProps> = ({
  centeredContent = false,
  withToolbar = true,
  children,
}) => {
  const { theme } = useTheme();
  usePageVisit();

  // ToolBar must be a direct child so it can sit outside the scrolling content.
  const pageChildren = Children.toArray(children);
  const isToolbar = (child: (typeof pageChildren)[number]) =>
    isValidElement(child) && child.type === ToolBar;

  return (
    <PageContainer theme={theme}>
      {withToolbar && pageChildren.filter(isToolbar)}
      <PageContent centeredContent={centeredContent}>
        {pageChildren.filter((child) => !isToolbar(child))}
      </PageContent>
    </PageContainer>
  );
};

export default Page;
