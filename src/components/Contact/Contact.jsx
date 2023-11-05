import Container from 'components/Container/Container';
import Form from 'components/Form/Form';
import contact from '../../images/contact.png';

const Contact = props => {
  return (
    <section id="contacts">
      <Container>
        <img src={contact} alt="contact us" />
        <h2>Contact Us</h2>
        <p>
          Discover your current English level by taking our free online English
          test. Sign up to our newsletter for learning tips and free resources
        </p>
        <Form />
      </Container>
    </section>
  );
};

export default Contact;
