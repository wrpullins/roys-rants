import styled from "@emotion/styled";
import { useTheme, type Theme } from "../../theme";

const Header = styled.header<{ theme: Theme }>`
  & {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary};
  }

  .portrait {
    width: 220px;
    max-width: 100%;
    aspect-ratio: 1;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.colors.text.muted};
    background: ${({ theme }) => theme.colors.foreground};
    font-size: 0.85rem;
    overflow: hidden;
  }

  .portrait img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .eyebrow {
    margin: 0 0 0.75rem;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.15;
  }

  .summary {
    max-width: 65ch;
    font-size: 1.1rem;
    margin: 1.25rem 0;
  }

  .details {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    color: ${({ theme }) => theme.colors.text.muted};
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CVHeader = () => {
  const { theme } = useTheme();

  return (
    <Header theme={theme}>
      <div>
        <p className="eyebrow">Curriculum vitae</p>
        <h1>Lead Developer</h1>
        <p className="summary">
          Lead Developer with over 10 years of hands-on software development
          experience, from standalone Java Swing applications to full stack
          web applications and comprehensive REST APIs. My core stack is
          React, Java, Spring and SQL, backed by experience across C#, VB and
          established enterprise technologies. A key focus of my work is
          modernising legacy systems by reimplementing them with modern
          development tools. I have progressed from junior to senior developer
          and now into a lead developer role.
        </p>
        <div className="details">
          <span>10+ years in development</span>
          <span>Legacy modernisation &amp; full stack development</span>
      </div>
      </div>
      <figure className="portrait">
        <img src="/roy_keyboard.svg" alt="Roy’s spiky-haired, bearded cartoon character bashing a keyboard" />
      </figure>
    </Header>
  );
};

export default CVHeader;
