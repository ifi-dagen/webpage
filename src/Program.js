import React, { Component } from 'react';
import './App.css';
import './program.css';
import './index.css';
import './front.css';

import program_info from './data/program_info.js'
//import Layout from './Layout'
//import Routes from "./App-routes";

class Program extends Component {
  //NB set dag til nåværende dag!
  state  = { dag: "dag1", filterDag:"dag1" }

  klokkeslett = (date) => {
    return date.getHours()+":"+(date.getMinutes()<10 ? "0"+date.getMinutes():date.getMinutes())
  }

  statusbar = (now) => {
    //setTimeout for the duration of the event, then moving on to the next event.

    //setState to keep control on current event.
    let i = 0;
    while ( i < program_info[this.state.dag].length){
      if(now< program_info[this.state.dag][i]["start"]){
        const info = program_info[this.state.dag][i]
        this.setState({currentEvent: i});
        console.log(info);
        return(
          <div id="banner" className="parallax">
            <h1> Akkurat nå: </h1>
            <div className="container">
              <div className=" text-center caption">
                <p>{info.foredragstittel}</p>
                <p>{info.beskrivelse}</p>
                <p>{this.klokkeslett(info.start)}</p>
                <p>{this.klokkeslett(info.slutt)}</p>
              </div>
            </div>
          </div>
        )
      }
      i++;
    }
    return(
      <div>(demo)statusbaren er her</div>
    )
  }

  programfilter = () => {
    return (<div className="programfilter">
      <button className="btn btn-lg" onClick={() => {this.setState({filterDag: "dag1"})}}>24.</button>
      <button className="btn btn-lg" onClick={() => {this.setState({filterDag: "dag2"})}}>25.</button>
    </div>)
    //<h1>(demo) Program for idag</h1>
  }

  //lag liste av eventer
  hendelser = (dag) => {
    return (
      <div>
        {program_info[dag].map((hendinger, index) => {
        //differansier på foredrag og alt annet.
        //Ide: grå ut alt som har skjedd allerede
        const event_id="#"+hendinger.tittel;
        return (
          <div className="event-detail" key={index}>
            <a className="programLink" href={event_id}><mark className="starttid">{this.klokkeslett(hendinger.start)}</mark> - {hendinger.tittel}</a>
          </div>)
        })}
      </div>)
  }

  detaljertekort = (dag) => {
    return (<div>
      {program_info[dag].map((hendinger, index) => {
        return (<div className="hending-beholder" id={hendinger.tittel} key={index}>
          <div className="hendingBilde-beholder">
            <img className="hendingBilde" src={require("./img/logoer/"+hendinger.bilde)} alt="Bilde av personen"/>
          </div>
          <div className="hendingInfo-beholder">
            <h4>{hendinger.tittel}</h4>
            <h6>{this.klokkeslett(hendinger.start)}-{this.klokkeslett(hendinger.slutt)}</h6>
            <p>{hendinger.beskrivelse}</p>
          </div>
        </div>)
      })}
    </div>)
  }

  render(){
    return (
      <div>
        <div className="statusbar">
          {this.statusbar(new Date())}
        </div>
        <div className="program">
          {this.programfilter()}
          {this.hendelser(this.state.filterDag)}
        </div>
        <div className="detaltert-program">
          {this.detaljertekort(this.state.filterDag)}
        </div>
      </div>
    );
  }
}

export default Program;
