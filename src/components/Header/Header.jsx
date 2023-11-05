import s from './Header.module.css';
import Container from 'components/Container/Container';

const Header = props => {
  return (
    <header>
      <Container clas={s.flex}>
        <a href="/">Britlex</a>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            alignItems: 'center',
          }}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <button type="button">Let’s Talk</button>
      </Container>
    </header>
  );
};

export default Header;
