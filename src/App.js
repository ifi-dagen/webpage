import React, { Component } from 'react';
import './index.css';
import Layout from './Layout';
import Routes from "./App-routes";
//import Front from './Front';
//import Sponsor from './Sponsor';

//import logo from '../img/normal_logo.png'; // with import

//for implementasjon av datafetching, sjekk ut dagen-today
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    if (window.location.hostname === "localehost") {
      this.setState({ }); //mockdata
    } else {
      //hent data
    }
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Routes/>
        </Layout>
      </div>
    );
  }
}
//<Front/>
//<Sponsor/>

export default App;
