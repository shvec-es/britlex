import { Component } from 'react';
import Container from 'components/Container/Container';
import Modal from 'components/Modal/Modal';
import ModalForm from 'components/ModalForm/ModalForm';

class Price extends Component {
  state = {
    price: null,
    isShowModal: false,
  };
  handleClick = price => {
    this.setState({ isShowModal: true, price: price });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  sendForm = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <section id="pricing">
          <Container>
            <h2>Pricing</h2>
            <ul>
              {this.props.prices.map(({ id, title, descr, img, price }) => (
                <li key={id}>
                  <img src={img} alt={title} />
                  <h3>{title}</h3>
                  <p>{descr}</p>
                  <button type="button" onClick={() => this.handleClick(price)}>
                    £{price} per month
                  </button>
                </li>
              ))}
            </ul>
          </Container>
        </section>
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <ModalForm
              price={this.state.price}
              closeModal={this.closeModal}
              sendForm={this.sendForm}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default Price;
