import { Component } from 'react';

class Form extends Component {
  state = {
    email: '',
  };

  handleChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handleSubmit = e => {
    const { email } = this.state;
    e.preventDefault();
    console.log(email);
    this.setState({ email: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            placeholder="Enter Your E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    );
  }
}

export default Form;
