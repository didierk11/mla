import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResultsPage from "./components/pages/ResultsPage";
import DetailsPage from "./components/pages/DetailsPage";
import PageNotFound from "./components/pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/items" component={ResultsPage} />
          <Route exact path="/items/:id" component={DetailsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
render(<App />, document.getElementById("root"));
