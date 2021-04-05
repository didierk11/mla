const React = require("react");

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
  }

  handleSearchTerm(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="navi">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 ">
              <div className="navi-logo"></div>
              <div className="navi-bar">
                <div className="navi-search">
                  <form action="/items" method="get">
                    <input
                      onChange={this.handleSearchTerm.bind(this)}
                      className="search-input"
                      placeholder="Nunca dejes de buscar"
                    />
                    <input
                      type="hidden"
                      value={this.state.searchTerm}
                      name="search"
                    />
                    <button className="search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
