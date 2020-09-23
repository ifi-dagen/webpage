import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Kontakt from "./pages/kontakt/Kontakt";
import Program from "./pages/program/Program";
import Bedrift from "./pages/bedrift/Bedrift";
import Frivillig from "./pages/frivillig/Frivillig";
import Front from './pages/front/Front';
import Error from './pages/error/Error';
import Stander from './pages/standomraade/Stander';
import BedriftStand from './pages/bedriftstand/BedriftStand';
import Studenter from "./pages/studenter/studenter";


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
          render={prop => <Program {...prop} store={this.props.store} published={true} />}
        />
        <Route
          exact
          path="/for-bedrift"
          render={prop => <Bedrift {...prop} store={this.props.store} />}
        />
        <Route
          exact
          path="/studenter"
          render={prop => <Studenter />} />
        <Route
          exact
          path="/frivillig"
          render={prop => <Frivillig {...prop} store={this.props.store} />}
        />
        <Route
          exact
          path="/stander"
          render={prop => <Stander {...prop} store={this.props.store} testmode={true} />}
        />
        <Route
          exact
          path="/stander/:dag/:bedrift"
          render={prop => <BedriftStand {...prop} store={this.props.store} testmode={false} />}
        />
        <Route
          render={prop => <Error {...prop} store={this.props.store} />}
        />
      </Switch>
    );
  }
}
export default Routes;
