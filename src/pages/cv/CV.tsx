import type { FC } from "react";
import styled from "@emotion/styled";
import CVHeader from "./CVHeader";
import SkillList from "./SkillList";
import Section from "../../shared/Section";
import Page from "../../shared/layout/Page";
import ToolBar from "../../shared/layout/ToolBar";
import Anchor from "../../shared/Anchor";
import { ThemeToggle } from "../home/ThemeToggle";
import { useTheme, type Theme } from "../../theme";
import { Navigation } from "../../shared/nav/Navigation";

const Resume = styled.main<{ theme: Theme }>`
  width: 100%;
  max-width: 960px;
  margin: auto;
  padding: clamp(0.5rem, 3vw, 2rem);
  box-sizing: border-box;
  line-height: 1.7;

  .columns {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    gap: 3rem;
    padding-top: 2rem;
  }

  h3 {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
  p {
    margin: 0.75rem 0;
  }

  .meta {
    color: ${({ theme }) => theme.colors.text.muted};
    margin-top: 0.25rem;
    font-size: 0.95rem;
  }

  @media (max-width: 650px) {
    .columns {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;

const CV: FC = () => {
  const { theme } = useTheme();

  return (
    <Page>
      <ToolBar>
        <Navigation active="cv" />
        <ThemeToggle />
      </ToolBar>
      <Resume theme={theme}>
        <CVHeader />

        <div className="columns">
          <div>
            <Section title="Experience">
              <h3>Lead Developer</h3>
              <p className="meta">Current role · Full stack development</p>
              <p>
                I have progressed from junior developer through senior roles to
                my current position as Lead Developer, building on hands-on
                experience across several generations of software development.
              </p>
              <p>
                My experience spans more than a decade of building software
                across desktop, web and enterprise environments. I have worked
                with early Java Swing libraries to create standalone
                applications and now implement comprehensive REST APIs and full
                stack web applications using React, Java, Spring and SQL.
              </p>
              <h3>Legacy system modernisation</h3>
              <p>
                A key part of my development experience has been reimplementing
                legacy systems using modern tools and frameworks. This means
                understanding the behaviour and business rules embedded in
                existing software and translating them into modern applications
                and services.
              </p>
              <p>
                My background across legacy IBM systems, Smalltalk and DB2,
                alongside current web technologies, helps me bridge existing
                systems and their replacements. That work draws on experience
                across user interfaces, application logic and data access.
              </p>
              <h3>Web applications, APIs &amp; persistence</h3>
              <p>
                My web development experience includes React interfaces, Java
                and Spring services, comprehensive REST APIs and SQL databases,
                with Hibernate, JPA and Spring Data for persistence and data
                access. I have also worked with Servlets, JSP, jQuery and Apache
                Wicket, giving me experience across several generations of web
                application development.
              </p>
              <h3>Desktop &amp; legacy systems</h3>
              <p>
                Alongside my usual stack, I have worked with C#, Visual Basic
                (VB), Smalltalk and DB2, including a range of legacy IBM
                systems. Working across these technologies has involved
                understanding existing applications as well as building new
                software.
              </p>
              <p>
                That breadth of experience shapes how I approach development:
                understanding the system already in place, choosing tools that
                suit the problem, and drawing on lessons from both older and
                newer technologies.
              </p>
            </Section>

            <Section title="Exploring AI in development">
              <h3>Roys Rants</h3>
              <p className="meta">Personal project · React &amp; Spring Boot</p>
              <p>
                This website is a practical experiment in building software with
                AI, using my existing development skills as the foundation for
                exploring what it can do and assessing the results.
              </p>
              <p>
                The aim is to explore how AI could be adopted within established
                development teams and workflows. It is a place to try ideas,
                learn through building, and consider how those lessons could
                translate into day-to-day development.
              </p>
            </Section>
          </div>

          <aside aria-label="Skills and contact">
            <Section title="Core stack">
              <SkillList
                skills={[
                  "React",
                  "Java",
                  "Spring / Spring Boot",
                  "SQL",
                  "Hibernate",
                  "JPA",
                  "Spring Data",
                  "REST APIs",
                ]}
              />
            </Section>
            <Section title="Also worked with">
              <SkillList
                skills={[
                  "C#",
                  "Visual Basic (VB)",
                  "Java Swing",
                  "Servlets",
                  "JSP",
                  "jQuery",
                  "Smalltalk",
                  "DB2",
                  "Apache Wicket",
                  "Legacy IBM systems",
                ]}
              />
            </Section>
            <Section title="Current interests">
              <p>
                AI-assisted software development and its practical adoption
                within established development teams.
              </p>
            </Section>
            <Section title="Contact">
              <Anchor href="mailto:w.r.pullins@gmail.com">
                w.r.pullins@gmail.com
              </Anchor>
            </Section>
          </aside>
        </div>
      </Resume>
    </Page>
  );
};

export default CV;
