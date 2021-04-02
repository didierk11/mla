const React = require("react");

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = { searchTerm: "" };
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <form action="/items" method="get">
        <input
          onChange={this.handleSearchTermChange.bind(this)}
          maxLength="150"
        />
        <input type="hidden" value={this.state.searchTerm} name="search" />
        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default SearchBar;
