import { Component } from 'react';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <label>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Enter city for search"
          />
        </label>
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default SearchForm;
