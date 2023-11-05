import Container from 'components/Container/Container';

const Price = ({ prices }) => {
  return (
    <section id="pricing">
      <Container>
        <h2>Pricing</h2>
        <ul>
          {prices.map(({ id, title, descr, img, price }) => (
            <li key={id}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{descr}</p>
              <button>£{price} per month</button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Price;
