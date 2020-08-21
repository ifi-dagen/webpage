import React, { Component } from 'react';
import './App.css';
import './stander.css';
import Modal from './components/modal.js';
import stand_info from './data/stand_info.js'

export default class Stander extends Component {
  state = { show: false, active_stand: false , dag: "før"};

  stander = (dag) => {
    return Object.values(stand_info[dag]).map((bedrift, index) => {
      const link="/stander/"+bedrift.bedriftnavn;
      return (
        <div className="button-card-container"
             id={index} key={index}>
          <a className="button-card"
                  id={index} key={index}
                  href={link}>
            <img id={index}
                 className="button-img"
                 src={ require("./img/logoer/"+bedrift.logonavn) }
                 alt={bedrift.bedriftnavn}/>
             </a>
        </div>)
    })
  }

  delayUpdate = (newState, timeout) => {
    const context = this;
    setTimeout(function() {context.setState({dag: newState}); }, timeout);
  }

  finnDag = (tidspunkt) => {
    console.log(tidspunkt);
    //for testing: edit the following variables as you please!
    const stand_start = new Date(2020, 7, 21, 14, 30, 30, 0);
    const stand_start2 = new Date(2020, 7, 21, 14, 30, 35, 0);
    const stand_stop = new Date(2020, 7, 21, 14, 30, 40, 0);

    if (tidspunkt < stand_start) {
      this.delayUpdate("dag1",(stand_start.getTime() - tidspunkt.getTime()));
    } else if (tidspunkt < stand_start2) {
      if(this.state.dag !== "dag1"){this.setState({dag: "dag1"})}
      this.delayUpdate("dag2",stand_start2.getTime() - tidspunkt.getTime());
    } else if (tidspunkt < stand_stop) {
      if(this.state.dag !== "dag2"){ this.setState({dag: "dag2"}) }
      this.delayUpdate("etter",(stand_stop.getTime() - tidspunkt.getTime()));
    } else {
      if(this.state.dag !== "etter"){this.setState({dag: "etter"})}
    }
  }

  toggle = (e, value) => {
    e.preventDefault();
    this.setState({dag: value})
  }

  demobuttons = () =>{
    return (<div className="testbuttons">
      <button onClick={(e) => this.toggle(e,"før")}>(for demo)tidsrom blir før</button>
      <button onClick={(e) => this.toggle(e,"dag1")}>(for demo)tidsrom blir dag1</button>
      <button onClick={(e) => this.toggle(e,"dag2")}>(for demo)tidsrom blir dag2</button>
      <button onClick={(e) => this.toggle(e,"etter")}>(for demo)tidsrom blir etter</button>
    </div>
    );
  }

  render(){
    //finn ut tidspunkt
    //this.finnDag(new Date); //NB denne linja styrer tiden
    switch (this.state.dag) {
      case "før":
        return (<div className="standbase">
          {this.demobuttons()}
          <p>Her kommer stander Snart!</p>
        </div>)
        break;
      case "dag1":
        return (<div className="standbase">
        {this.demobuttons()}
        <p>(Disse standene har foreløpig bare eksempel-innhold, med noen lånte logoer)</p>
          {this.stander("dag1",true)}
        </div>)
        break;
      case "dag2":
        return (<div className="standbase">
        {this.demobuttons()}
        <p>(Disse standene har foreløpig bare eksempel-innhold, med noen lånte logoer)</p>
          {this.stander("dag2",true)}
        </div>)
        break;
      case "etter":
        return (<div className="standbase">
        {this.demobuttons()}
        <p>Dagen@ifi 2020 er over for i år, vi sees igjen!</p>
        </div>)
        break;
      default:
        return <h1>Her er det ingen stander akkuratt nå, desverre</h1>
    }
  }
}
