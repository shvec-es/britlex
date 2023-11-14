import { Component } from 'react';

export class ModalForm extends Component {
  state = {
    name: '',
    phone: '',
    comment: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendForm(
      this.props.price ? { ...this.state, price: this.props.price } : this.state
    );
    this.props.closeModal();
  };

  render() {
    const { name, phone, comment } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.price && (
          <p>You are choosing group with price £{this.props.price}</p>
        )}
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="phone">Enter your phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="comment">
          Do you want to leave some comment for us?
        </label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          value={comment}
          onChange={this.handleChange}
          required
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ModalForm;
