import s from './Hero.module.css';
import Container from 'components/Container/Container';
import hero from '../../images/hero.png';

const Hero = props => {
  return (
    <section>
      <Container clas={s.flex}>
        <div style={{ width: 540 }}>
          <h1>Learn Any Foreign Language</h1>
          <p>
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <button>Get started</button>
        </div>
        <img src={hero} alt="hero" width={654} />
      </Container>
    </section>
  );
};

export default Hero;
