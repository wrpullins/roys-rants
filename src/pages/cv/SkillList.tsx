import styled from "@emotion/styled";
import Token from "../../shared/Token";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const SkillList = ({ skills }: { skills: readonly string[] }) => (
  <List>
    {skills.map((skill) => (
      <li key={skill}>
        <Token>{skill}</Token>
      </li>
    ))}
  </List>
);

export default SkillList;
