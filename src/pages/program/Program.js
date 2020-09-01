import React, { Component } from 'react';
import '../../App.css';
import './program.css';
import '../../index.css';
//import '../../front.css';

import program_info from '../../data/program_info.js'
//import Layout from './Layout'
//import Routes from "./App-routes";

class Program extends Component {
  //NB set dag til nåværende dag!
  state = { dag: "dag1", filterDag:"dag1" ,currentEvent: 0}

  klokkeslett = (date) => {
    return date.getHours()+":"+(date.getMinutes()<10 ? ("0" + date.getMinutes()) : date.getMinutes())
  }

  setNext = () => {
    const event = this.state.currentEvent+1
    this.setState({nextEvent: event})
  }

  setCurrent = (now) => {
    //loop gjennom program til tidspunkt er funnet.
    //når event er funnet, hvis det finnes neste, sett det og.
    //hvis ingen nåværened er funnet, men finnes neste, set kun neste.

    //let i =

    console.log(new Date())
    //console.log(program_info[this.state.dag][this.state.currentEvent].slutt);
    if(program_info[this.state.dag].length === this.state.currentEvent && now>program_info[this.state.dag][this.state.currentEvent].slutt){
      console.log("her!")
      if(program_info[this.state.dag].length-1 > this.state.currentEvent){
        console.log("her også!")
        const event = this.state.currentEvent+1;
        this.setState({currentEvent: event})
        const context = this;
        //instead of setState, updateCurrent() and use that to set right event
        setTimeout(function() {context.setState({currentEvent: event+1}); context.setNext(); }, 2000);
      }
    }
  }

  //ikke perfekt på plass
  statusbar = (now) => {
    this.setCurrent(now)
    //setTimeout for the duration of the event, then moving on to the next event.
    //setState to keep control on current event.
    if(this.state.currentEvent !== null){
      const info = program_info[this.state.dag][this.state.currentEvent]
      return (
        <div id="banner">
          <div className="container">
            <div className=" text-center caption">
              <h1> Akkurat nå: </h1>
              <p>{info.foredragstittel}</p>
              <p>{info.beskrivelse}</p>
              <a href={info.link}>delta her!</a>
              <p>{this.klokkeslett(info.start)} - {this.klokkeslett(info.slutt)}</p>
            </div>
          </div>
        </div>
      )
    }
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
  }

  programfilter = () => {
    return (<div className="programfilter">
      <button className="btn btn-lg" onClick={() => {this.setState({filterDag: "dag1"})}}>24.</button>
      <button className="btn btn-lg" onClick={() => {this.setState({filterDag: "dag2"})}}>25.</button>
    </div>)
  }

  //lag liste av eventer
  hendelser = (dag) => {
    return (
      <div className="Programinnhold">
        {program_info[dag].map((hendinger, index) => {
        //differansier på foredrag og alt annet.
        //Ide: grå ut alt som har skjedd allerede
        const event_id="#"+hendinger.tittel;
        return (
          <div className="event-detail" key={index}>
            <a className="programLink" href={event_id}><strong className="starttid">{this.klokkeslett(hendinger.start)}</strong> - {hendinger.tittel}</a>
          </div>)
        })}
      </div>)
  }

  detaljertekort = (dag) => {
    return (<div>
      {program_info[dag].map((hendinger, index) => {
        return (<div className="hending-beholder" id={hendinger.tittel} key={index}>
          <div className="hendingBilde-beholder">
            <img className="hendingBilde" src={require("../../img/logoer/"+hendinger.bilde)} alt="Bilde av personen"/>
          </div>
          <div className="hendingInfo-beholder">
            <h3>{hendinger.tittel}</h3>
            <h6>{this.klokkeslett(hendinger.start)}-{this.klokkeslett(hendinger.slutt)}</h6>
            <h4><a href={hendinger.link}>delta her!</a></h4>
            <p>{hendinger.beskrivelse}</p>
          </div>
        </div>)
      })}
    </div>)
  }

  render(){
    return (
      <div className="programside">
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
