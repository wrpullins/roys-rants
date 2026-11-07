import { useId, type PropsWithChildren } from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  & + & {
    margin-top: 2rem;
  }

  h2 {
    font-size: 1.3rem;
  }
`;

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  const headingId = useId();

  return (
    <Container aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      {children}
    </Container>
  );
};

export default Section;
