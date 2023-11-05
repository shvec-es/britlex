import Container from 'components/Container/Container';
import SkillsItem from 'components/SkillsItem/SkillsItem';

const Skills = ({ title, data }) => {
  return (
    <section id="skills">
      <Container>
        {title && <h2>{title}</h2>}
        <ul>
          {data.map(({ id, heading, text, img }) => (
            <SkillsItem key={id} heading={heading} text={text} img={img} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Skills;
