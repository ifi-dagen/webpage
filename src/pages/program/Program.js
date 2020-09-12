import React, { Component } from 'react';
import './program.css';
import ProgramStatus from '../../components/ProgramStatus.js';
import program_info from '../../data/program_info.js'

class Program extends Component {
  //NB set dag til nåværende dag!
  state = { dag: "2020-09-05", filterDag:"2020-09-09" ,currentEvent: 0}

  dateString =(d) => {
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      let year = d.getFullYear();

      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;
      return [year, month, day].join('-');
  }

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
        <div>
          <div className="container">
              <h1> Akkurat nå: </h1>
              <p>{info.foredragstittel}</p>
              <p>{info.beskrivelse}</p>
              <a href={info.link}>delta her!</a>
              <p>{this.klokkeslett(info.start)} - {this.klokkeslett(info.slutt)}</p>
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
      <button className="btn btn-lg" onClick={() => {this.setState({filterDag: "2020-09-24"})}}>24.</button>
      <button className="btn btn-lg" onClick={() => {this.setState({filterDag: "2020-09-25"})}}>25.</button>
    </div>)
  }

  //lag liste av eventer
  hendelser = (dag) => {
    const filtered_events = program_info.filter((item) => { return this.dateString(item.start)===this.state.filterDag})

    return (
      <div className="Programinnhold">
        {filtered_events.map((hendinger, index) => {
          //differansier på foredrag og alt annet.
          //Ide: grå ut alt som har skjedd allerede
          const event_id="#"+hendinger.tittel;
          return (
            <div className="event-detail" key={index}>
              <a className="programLink" href={event_id}><strong className="starttid">{this.klokkeslett(hendinger.start)}</strong> - {hendinger.tittel}</a>
            </div>)})}
      </div>)
  }

  detaljertekort = (dag) => {
    return (<div>
      {program_info.map((hendinger, index) => {
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
    if (this.props.published === false){
      return(<div className="programside">
        <div className="statusbar">
          <div className="container">
                <h1> Program kommer </h1>
                <p>Stay tuned!</p>
          </div>
        </div>
      </div>)
    }
    return (
      <div className="programside">
        <ProgramStatus/>
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
