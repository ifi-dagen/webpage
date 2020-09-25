import React, { Component } from 'react';
import styled from 'styled-components'
import './program.css';
import ProgramStatus from '../../components/ProgramStatus.js';
import program_info from '../../data/program_info.js';
import { dateStrings } from '../../data/time.js'

const dateString = (d) => {
  let month = '' + (d.getMonth()); //8 = September, 9=oktober
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [year, month, day].join('-');
}

const klokkeslett = (date) => {
  return (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours()) + ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes())
}

const formatedText = (text) => {
  return text.split("\n").map((item, index) => { return (<p key={index} >{item}</p>) })
}

class Program extends Component {
  state = { dag: "2020-08-25", filterDag: dateStrings.dag2, currentEvent: 0 }

  programfilter = () => {
    return (<div className="programfilter">
      <FilterButton onClick={() => { this.setState({ filterDag: dateStrings.dag1 }) }}>Torsdag 24.</FilterButton>
      <FilterButton onClick={() => { this.setState({ filterDag: dateStrings.dag2 }) }}>Fredag 25.</FilterButton>
    </div>)
  }

  //lag liste av eventer
  hendelser = (dag) => {
    const filtered_events = program_info.filter((item) => { return dateString(item.start) === this.state.filterDag })
    filtered_events.sort(function(a, b){return a.start - b.start});

    return (
      <div className="Programinnhold">
        <h2>{this.state.filterDag === dateStrings.dag1 ? "Torsdag 24." : "Fredag 25."}</h2>
        {filtered_events.map((hendinger, index) => {
          //differansier på foredrag og alt annet.
          //Ide: grå ut alt som har skjedd allerede
          const event_id = "#" + hendinger.id;
          return (
            <div className="event-detail" key={index}>
              <a className="programLink" href={event_id}><strong className="starttid">{klokkeslett(hendinger.start)} </strong><div>{hendinger.foredragsholder ? hendinger.foredragsholder + ": " : ""}{hendinger.tittel}</div></a>
            </div>)
        })}
      </div>)
  }

  detaljertekort = (dag) => {
    const filtered_events = program_info.filter((item) => { return dateString(item.start) === this.state.filterDag })
    return (<div>
      {filtered_events.map((hendinger, index) => {
        return (<HendingBeholder id={hendinger.id} key={index}>
          <HendingsBilde>
            {hendinger.bilde && <img src={require("../../img/" + hendinger.bilde)} alt={hendinger.alt_tekst} />}
          </HendingsBilde>
          <HendingInfo>
            <h3>{hendinger.tittel}</h3>
            <h6>{klokkeslett(hendinger.start)}-{klokkeslett(hendinger.slutt)}{hendinger.foredragsholder ? ", " + hendinger.foredragsholder : ""}</h6>
            {hendinger.link === "" ? <h4>Link kommer!</h4> : <h4><a href={hendinger.link} target="_blank" rel="noopener noreferrer">{hendinger.alt_link ? hendinger.alt_link : "delta her!"}</a></h4>}
            <div>{formatedText(hendinger.beskrivelse)}</div>
          </HendingInfo>
        </HendingBeholder>)
      })}
    </div>)
  }

  render() {

    return (
      <div className="programside">
        <ProgramStatus />

        <div className="program">
          {this.programfilter()}
          <Paragraph><a href="https://www.poption.com/speedintervju/dagenatifi-2020">Speedintervju-påmelding via Poption frem til kl 14:00 på fredag</a></Paragraph>
          <Paragraph><a href="/torsdag">Gikk du glipp av gårsdagens stander? se her!</a></Paragraph>
          {this.hendelser(this.state.filterDag)}

        </div>

        <DetaljertProgram>
          {this.detaljertekort(this.state.filterDag)}
        </DetaljertProgram>
      </div>
    );
  }
}

const Paragraph = styled.p`
text-align: center;
`

const FilterButton = styled.button`
  text-align: center;
  background-color: deepskyblue;
  width:150px;
  padding: .5rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 1rem;
  border:none;
  font-size: 1.2rem;
  min-width: 6rem;

  :hover {
    background-color: dodgerblue;
  }
`

const DetaljertProgram = styled.div`
  background: #F5F5F5;
  border: solid 1px #F5F5F5;
  border-radius: 1rem;
  margin: 0.5rem;
`

const HendingBeholder = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  background: white;
  border: solid 1px white;
  border-radius: 1rem;
  margin: 1rem;

  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: row;
    text-align: left;

    :focus{
      display: flex;
      flex-direction: row;
      text-align: left;
      color: orange;
    }

    :active{
      display: flex;
      flex-direction: row;
      text-align: left;
      color: orange;
    }
  }
`

const HendingsBilde = styled.div`
  align-self: center;
  width: 100%;

  img{
      width: 100%;
      padding: 0 1rem;
      height: auto;
  }
  @media (max-width: 767.98px) {
    display:none;
  }
`

const HendingInfo = styled.div`
  width: 100%;
  padding: 5%;
  h3{
    margin-block-end: 0.5em;
  }
  h6{
    margin-block-start: 0;
    margin-block-end: 0;
  }
`

export default Program;
