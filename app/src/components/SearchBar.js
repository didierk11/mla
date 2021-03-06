const React = require("react");
require('./pages/search-bar.scss');

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
          <div className="row justify-content-sm-center">
            <div className="col-sm-10 ">
              <div className="navi-logo"></div>
              <form action="/items" method="get">
                <div className="navi-bar">
                  <div className="navi-search">
                    <input
                      type="text"
                      onChange={this.handleSearchTerm.bind(this)}
                      placeholder="Nunca dejes de buscar"
                    />
                    <input
                      type="hidden"
                      value={this.state.searchTerm}
                      name="search"
                    />
                  </div>
                  <div className="search-submit">
                    <button type="submit"></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
