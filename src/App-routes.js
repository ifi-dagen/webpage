import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Kontakt from "./Kontakt";
import Program from "./pages/Program";
import Bedrift from "./Bedrift";
import Frivillig from "./pages/frivillig/Frivillig";
import Front from './Front';
import Error from './Error';
import Stander from './Stander';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={prop => <Front />}
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
          path="/for-bedrift"
          render={prop => <Bedrift {...prop} store={this.props.store} />}
        />
        <Route
          exact
          path="/frivillig"
          render={prop => <Frivillig {...prop} store={this.props.store} />}
        />
        <Route
          exact
          path="/stander"
          render={prop => <Stander {...prop} store={this.props.store} />}
        />
        <Route
          render={prop => <Error {...prop} store={this.props.store} />}
        />
      </Switch>
    );
  }
}
export default Routes;
