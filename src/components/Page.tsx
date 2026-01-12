import styled from "@emotion/styled";
import { useTheme } from "../theme/useTheme";
import { useEffect, type PropsWithChildren } from "react";
import type { Colors } from "../theme/colors";

const PageContainer = styled.div<{ colors: Colors; centeredContent: boolean }>`
  color: ${({ colors }) => colors.TextPrimary};
  background-color: ${({ colors }) => colors.Background};
  height: 100%;
  padding: 1rem;

  ${({ centeredContent }) =>
    centeredContent &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

type PageProps = PropsWithChildren & {
  centeredContent?: boolean;
};

const Page: React.FC<PageProps> = ({ centeredContent = false, children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <PageContainer colors={theme.colors} centeredContent={centeredContent}>
      {children}
    </PageContainer>
  );
};

export default Page;
