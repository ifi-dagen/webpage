import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Kontakt from "./Kontakt";
import Program from "./Program";
import Bedrift from "./Bedrift";
import Frivillig from "./Frivillig";
//import App from "./App.js";
import Front from './Front';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={prop => <Front/>}
        />
        <Route
          path="/kontakt"
          render={prop => <Kontakt {...prop} store={this.props.store} />}
        />
        <Route
          exact
          path="/program"
          render={prop => <Program {...prop} store={this.props.store} />}
        />
        <Route
          exact
          path="/bedrift"
          render={prop => <Bedrift {...prop} store={this.props.store} />}
        />
        <Route
          exact
          path="/frivillig"
          render={prop => <Frivillig {...prop} store={this.props.store} />}
        />
        <Route
          render={prop => <Front {...prop} store={this.props.store} />}
        />
      </Switch>
    );
  }
}
export default Routes;
