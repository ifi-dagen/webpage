import React, { Component } from 'react';
import './index.css';
import Layout from './Layout';
import Routes from "./App-routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (window.location.hostname === "localehost") {
      this.setState({}); //mockdata
    } else {
      //hent data
    }
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    );
  }
}

export default App;
