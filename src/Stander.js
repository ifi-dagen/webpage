import React, { Component } from 'react';
import './App.css';
import './stander.css';
import stand_info from './data/stand_info.js'
import Etter from '../src/pages/standomraade/etter'
import stand_time from './data/time.js'

export default class Stander extends Component {
  state = { show: false, active_stand: false, dag: "før" };

  stander = (dag) => {
    return Object.values(stand_info[dag]).map((bedrift, index) => {
      const link = "/stander/" + dag + "/" + bedrift.bedriftnavn.replace(/\s/g, '_');
      return (
        <div className="button-card-container"
          id={index} key={index}>
          <a className="button-card"
            id={index} key={index}
            href={link}>
            <img id={index}
              className="button-img"
              src={require("./img/logoer/" + bedrift.logonavn)}
              alt={bedrift.bedriftnavn} />
          </a>
        </div>)
    })
  }

  delayUpdate = (newState, timeout) => {
    const context = this;
    setTimeout(function () { context.setState({ dag: newState }); }, timeout);
  }

  finnDag = (tidspunkt) => {
    //henter tidspunkt fra /data/time.js
    if (tidspunkt < stand_time.start1) {
      this.delayUpdate("dag1", (stand_time.start1.getTime() - tidspunkt.getTime()));
    } else if (tidspunkt < stand_time.start2) {
      if (this.state.dag !== "dag1") { this.setState({ dag: "dag1" }) }
      this.delayUpdate("dag2", stand_time.start2.getTime() - tidspunkt.getTime());
    } else if (tidspunkt < stand_time.stop) {
      if (this.state.dag !== "dag2") { this.setState({ dag: "dag2" }) }
      this.delayUpdate("etter", (stand_time.stop.getTime() - tidspunkt.getTime()));
    } else {
      if (this.state.dag !== "etter") { this.setState({ dag: "etter" }) }
    }
  }

  toggle = (e, value) => {
    e.preventDefault();
    this.setState({ dag: value })
  }

  demobuttons = (show) => {
    if (show) {
      return (<div className="testbuttons">
        <button onClick={(e) => this.toggle(e, "før")}>(DEMO) før</button>
        <button onClick={(e) => this.toggle(e, "dag1")}>Torsdag</button>
        <button onClick={(e) => this.toggle(e, "dag2")}>Fredag</button>
        <button onClick={(e) => this.toggle(e, "etter")}>(DEMO) etter</button>
      </div>
      );
    }
    return <div></div>
  }

  render() {
    const testmode = this.props.testmode;
    //finn ut tidspunkt
    this.finnDag(new Date()); //NB denne linja styrer tiden
    switch (this.state.dag) {
      case "før":
        if (this.props.forside){
          return (<div></div>) ;
        }
        return (<div className="standbase">
          {this.demobuttons(testmode)}
          <p>Her kommer stander Snart!</p>
        </div>)
      case "dag1":
        return (<div className="standbase">
          {this.demobuttons(testmode)}
          <p>(Disse standene har foreløpig bare eksempel-innhold, med noen lånte logoer)</p>
          {this.stander("dag1", true)}
        </div>)
      case "dag2":
        return (<div className="standbase">
          {this.demobuttons(testmode)}
          <p>(Disse standene har foreløpig bare eksempel-innhold, med noen lånte logoer)</p>
          {this.stander("dag2", true)}
        </div>)
      case "etter":
        return (
          <Etter />
        )
      default:
        return <h1>Her er det ingen stander akkuratt nå, desverre</h1>
    }
  }
}
