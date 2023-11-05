import Container from 'components/Container/Container';

const Footer = props => {
  return (
    <footer>
      <Container>
        <a href="/">Britlex</a>
        <ul>
          <li>
            <a href="/">Terms and Conditions</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Cookie Policy</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
