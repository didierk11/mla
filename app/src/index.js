import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";
import DetailsPage from "./components/DetailsPage";
import PageNotFound from "./components/NotFoundPage";

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
