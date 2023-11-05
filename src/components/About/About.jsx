import Container from 'components/Container/Container';
import about from '../../images/about.png';

const About = ({ stats }) => {
  return (
    <section id="about">
      <Container>
        <h2>About Us</h2>
        <p>
          The model offers a framework for discussing problems related to the
          user's experience, as well as possible ways and means of solving them.
          Application development begins at the top level (strategy), where the
          future software product is described quite abstractly from the point
          of view of the expectations of both users and the customer.
        </p>
        <ul>
          {stats.map(({ id, count, tag }) => (
            <li key={id}>
              <span>{count}</span>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
        <img src={about} alt="about" width={540} />
      </Container>
    </section>
  );
};

export default About;
