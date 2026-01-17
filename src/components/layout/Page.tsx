import styled from "@emotion/styled";
import { useTheme } from "../../theme/useTheme";
import { useEffect, type PropsWithChildren } from "react";
import type { Theme } from "../../theme";
import { MediaSizes } from "../../theme/mediaSizes";

const PageContainer = styled.div<{ theme: Theme; centeredContent: boolean }>`
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

  height: 100%;
  padding: 1rem;

  ${({ centeredContent }) =>
    centeredContent &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
      
    `}

  @media (width <= ${MediaSizes.small} ) {
    h1 {
      font-size: 1.3rem;
    }
  }
`;

type PageProps = PropsWithChildren & {
  centeredContent?: boolean;
};

const Page: React.FC<PageProps> = ({ centeredContent = false, children }) => {
  const { theme } = useTheme();

  return (
    <PageContainer theme={theme} centeredContent={centeredContent}>
      {children}
    </PageContainer>
  );
};

export default Page;
