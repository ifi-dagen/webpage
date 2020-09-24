import React, { Component } from 'react';
import '../../App.css';
import './bedriftstand.css';
import stand_info from '../../data/stand_info.js'
import styled from "styled-components";
import live_time from '../../data/time.js'


import ReactPlayer from 'react-player/youtube';

const formatedText = (text) => {
  return text.split("\n").map((item, index) => { if (item === "  ") { return (<p key={index} ><br /></p>) }; return (<p key={index} >{item}</p>) })
}

//tar inn lister av typen [ {tekst: "", link: ""}, ... ]
const listUp = (tittel, liste, link_prefix) => {
  if (liste.length !== 0 & liste[0].tekst !== "") {
    return (
      <div className= "linker">
        <h4 className="undertittel">{tittel}</h4>
        {liste.map((item, index) => {
          if (!link_prefix || link_prefix === "") {
            return (
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>{item.tekst}<br /></a>
            )
          }
          if (item.link !== "") {
            return (<a href={link_prefix + item.link} key={index}>{item.tekst}<br /></a>)
          }
          return (<p>{item.tekst}</p>)
        })}
      </div>
    )
  }
}



export default class BedriftStand extends Component {
  state = { show: true, active_stand: false };

  //changes the active_stand-value after a timeout.
  delayUpdate = (newState, timeout) => {
    const context = this;
    setTimeout(function () { context.setState({ active_stand: newState }); }, timeout);
  }

  //keeps track of whether or not the zoomrooms should be open
  active = (tidspunkt) => {
    if (tidspunkt < live_time.stand_start) {
      this.delayUpdate(true, (live_time.stand_start.getTime() - tidspunkt.getTime()));
      return false;
    } else if (tidspunkt < live_time.stand_stop) {
      if (this.state.dag !== true) { this.setState({ dag: true }) }
      this.delayUpdate(false, (live_time.stand_stop.getTime() - tidspunkt.getTime()));
      return true;
    } else if (tidspunkt < live_time.stand_start2) {
      if (this.state.dag !== false) { this.setState({ dag: false }) }
      this.delayUpdate(true, (live_time.stand_start2.getTime() - tidspunkt.getTime()));
      return false;
    } else if (tidspunkt < live_time.stand_stop2) {
      if (this.state.dag !== true) { this.setState({ dag: true }) }
      this.delayUpdate(false, (live_time.stand_stop2.getTime() - tidspunkt.getTime()));
      return true;
    } else {
      if (this.state.dag !== false) { this.setState({ dag: false }) }
      return false;
    }
  }

  infoBolk = (bedrift) => {
    return <div className="infoBolk">
      <h1 className="bedriftnavn"> {bedrift.bedriftnavn} {bedrift.poption && !this.state.active_stand && <Link href={bedrift.poption}>
        <Icon className="fas fa-handshake"></Icon>Gå til poption her
              </Link>}</h1>
      <div> {bedrift.beskrivelse && formatedText(bedrift.beskrivelse)}</div>
      {listUp("Stillinger", bedrift.stillinger, "")}
      {listUp("Foredrag", bedrift.foredrag, "../../program#")}
      {listUp("Sprell", bedrift.konkurranser, "")}
    </div>
  }

  //kunn for demo knapper
  toggle = (e, value) => {
    e.preventDefault();
    this.setState({ active_stand: value })
  }

  inntrykkt = (bedrift, activated) => {
    if (activated && bedrift.zoomlink !== "") {
      return (<div id="livelinker">
        <Link href={bedrift.zoomlink}>
          <Icon className="fas fa-video"></Icon>Møt oss på zoom!
                </Link>
        {bedrift.poption && <Link href={bedrift.poption}>
          <Icon className="fas fa-handshake"></Icon>Gå til poption her
                </Link>}
      </div>)
    } else if (bedrift.video !== "") {
      if (bedrift.video.includes("youtu")) {
        return <div id='videoContainer'>
          <ReactPlayer
            id='video'
            url={bedrift.video}
            playing={false}
            loop={true}
          />
          <a id="videolink" href={bedrift.video} >Se video her</a>
        </div>
      } else {
        return <div id='videoContainer'>
          <iframe title="video" width="640" height="360" src={bedrift.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <a id="videolink" href={bedrift.video} >Se video her</a>
        </div>
      }
    }
    return
  }

  componentDidMount() {
    //const zoom_open = this.active(new Date())
    this.setState({ active_stand: true })
  }

  render() {
    const bedrift = stand_info[this.props.match.params.dag][this.props.match.params.bedrift.replace(/_/g, ' ')];//replace setter inn _ istede for mellomrom i stringen.
    //console.log(this.props.match.params.bedrift.replace(/_/g, ' '));
    //console.log(bedrift);//replace setter inn _ istede for mellomrom i stringen.

    return (
      <div className="bedriftStandBase">
        <div className='bedriftStandInnhold'>
          <a href="/#standomraade">tilbake til stander<br/></a>
          { this.props.testmode && <button onClick={(e) => this.toggle(e,!this.state.active_stand)}>(for demo)standområde er {this.state.active_stand ? "åpent" : "lukket"}</button>}
          {this.inntrykkt(bedrift,this.state.active_stand)}
          {this.infoBolk(bedrift)}
        </div>
      </div>
    )
  }
}

const Link = styled.a`
align-items: flex-start;
padding: 1em;
`;

const Icon = styled.i`
font-size: 2rem;
color: black;
transition: color 0.25s;

${Link}:hover & {
  color: deepskyblue;
}
`;
