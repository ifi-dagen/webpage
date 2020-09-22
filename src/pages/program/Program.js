import React, { Component } from 'react';
import styled from 'styled-components'
import './program.css';
import ProgramStatus from '../../components/ProgramStatus.js';
import program_info from '../../data/program_info.js';
import {dateStrings} from '../../data/time.js'

class Program extends Component {
  state = { dag: "2020-08-20", filterDag:dateStrings.dag1 ,currentEvent: 0}

  dateString =(d) => {
      let month = '' + (d.getMonth()); //8 = September, 9=oktober
      let day = '' + d.getDate();
      let year = d.getFullYear();

      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;
      return [year, month, day].join('-');
  }

  klokkeslett = (date) => {
    return (date.getHours()< 10 ? ("0" + date.getHours()) : date.getHours())+":"+(date.getMinutes()< 10 ? ("0" + date.getMinutes()) : date.getMinutes())
  }

  programfilter = () => {
    return (<div className="programfilter">
      <FilterButton  onClick={() => {this.setState({filterDag: dateStrings.dag1})}}>24.</FilterButton>
      <FilterButton  onClick={() => {this.setState({filterDag: dateStrings.dag2})}}>25.</FilterButton>
    </div>)
  }

  //lag liste av eventer
  hendelser = (dag) => {
    const filtered_events = program_info.filter((item) => {return this.dateString(item.start)===this.state.filterDag})

    return (
      <div className="Programinnhold">
        {filtered_events.map((hendinger, index) => {
          //differansier på foredrag og alt annet.
          //Ide: grå ut alt som har skjedd allerede
          const event_id="#"+hendinger.id;
          return (
            <div className="event-detail" key={index}>
              <a className="programLink" href={event_id}><strong className="starttid">{this.klokkeslett(hendinger.start)}</strong> - {hendinger.tittel}</a>
            </div>)})}
      </div>)
  }

  formatedText = (text) => {
    return text.split("\n").map((item, index) => {return (<p key={index} >{item}</p>)})
  }

  detaljertekort = (dag) => {
    return (<div>
      {program_info.map((hendinger, index) => {
        return (<div className="hending-beholder" id={hendinger.id} key={index}>
          <div className="hendingBilde-beholder">
            {hendinger.bilde && <img className="hendingBilde" src={require("../../img/"+hendinger.bilde)} alt={hendinger.alt_tekst}/>}
          </div>
          <div className="hendingInfo-beholder">
            <h3>{hendinger.tittel}</h3>
            <h6>{this.klokkeslett(hendinger.start)}-{this.klokkeslett(hendinger.slutt)}</h6>
            {hendinger.link===""? <h4>Link kommer!</h4> :<h4><a href={hendinger.link}>delta her!</a></h4>}
            <div>{this.formatedText(hendinger.beskrivelse)}</div>
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
        <div className="detaljert-program">
          {this.detaljertekort(this.state.filterDag)}
        </div>
      </div>
    );
  }
}

const FilterButton = styled.button`
  text-align: center;
  background-color: deepskyblue;
  padding: .8rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 1rem;
  border:none;
  font-size: 1.2rem;
  min-width: 6rem;

  :hover {
    background-color: dodgerblue;
    transform: scale(1, 1.1);
    -webkit-transform: scale(1, 1.1);
    box-shadow: 0px 1px 0px 0px;
  }
`


export default Program;
