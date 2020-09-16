import React, { Component } from 'react';
import './App.css';
import './stander.css';
import stand_info from './data/stand_info.js'
import styled from "styled-components";

import ReactPlayer from 'react-player/youtube';



export default class BedriftStand extends Component {
  state = { show: true, active_stand: false };

  delayUpdate = (newState, timeout) => {
    const context = this;
    setTimeout(function() {context.setState({active_stand: newState}); }, timeout);
  }

  active = (tidspunkt) => {
    const stand_start = new Date(2020, 8, 24, 11, 0, 0, 0);
    const stand_stop = new Date(2020, 8, 24, 13, 0, 0, 0);
    const stand_start2 = new Date(2020, 8, 25, 11, 0, 0, 0);
    const stand_stop2 = new Date(2020, 8, 25, 13, 0, 0, 0);

    if (tidspunkt < stand_start){
      this.delayUpdate(true,(stand_start.getTime() - tidspunkt.getTime()));
      return false;
    } else if (tidspunkt < stand_stop){
      if(this.state.dag !== true){this.setState({dag: true})}
      this.delayUpdate(false,(stand_stop.getTime() - tidspunkt.getTime()));
      return true;
    } else if (tidspunkt < stand_start2){
      if(this.state.dag !== false){this.setState({dag: false})}
      this.delayUpdate(true,(stand_start2.getTime() - tidspunkt.getTime()));
      return false;
    } else if (tidspunkt < stand_stop2){
      if(this.state.dag !== true){this.setState({dag: true})}
      this.delayUpdate(false,(stand_stop2.getTime() - tidspunkt.getTime()));
      return true;
    } else {
      if(this.state.dag !== false){this.setState({dag: false})}
      return false;
    }
  }

  //tar inn lister av typen [ {tekst: "", link: ""}, ... ]
  listUp = (tittel,liste) => {
    console.log(liste, liste.length)
    if(liste.length !== 0 & liste[0].tekst !== "") {
      return (
        <div>
          <h4>{tittel}</h4>
          {liste.map((item, index) => {
            if (item.link !== ""){
              return (<a href={item.link} key={index}>{item.tekst}<br/></a>)
            }
            return(<p>{item.tekst}</p>)
          })}
        </div>
      )
    }
  }

  infoBolk = (bedrift) => {
    console.log(bedrift)
    return <div className="infoBolk">
      <h1 className="bedriftnavn"> {bedrift.bedriftnavn}</h1>
      <p> {bedrift.beskrivelse && bedrift.beskrivelse}</p>
      {this.listUp("stillinger", bedrift.stillinger)}
      {this.listUp("konkurranser", bedrift.konkurranser)}
      {this.listUp("foredrag", bedrift.foredrag)}
    </div>
  }

  toggle = (e, value) => {
    e.preventDefault();
    this.setState({active_stand: value})
  }

  inntrykkt = (bedrift,activated) => {
    bedrift.poption = "bo"
    if (activated){
      return (<div id="livelinker">
                <Link href={bedrift.zoomlink}>
                  <Icon className="fas fa-video"></Icon>Møt oss på zoom!
                </Link>
                {bedrift.poption &&<Link href={bedrift.zoomlink}>
                  <Icon className="fas fa-handshake"></Icon>Gå til speedintervju her
                </Link>}
            </div>)
    } else if(bedrift.video !== ""){
      return <div id='videoContainer'>
          <ReactPlayer
            id='video'
            url={bedrift.video}
            playing={false}
            loop={true}
          />
        <a id="videolink" href={bedrift.video} >Se youtube-video her</a>
        </div>
    }
    return
  }



  componentDidMount(){
    const zoom_open = this.active(new Date())
    this.setState({active_stand: zoom_open})
  }

  render(){
    const bedrift = stand_info[this.props.match.params.dag][this.props.match.params.bedrift.replace(/_+/g, ' ')];//replace setter inn _ istede for mellomrom i stringen.

    return (
      <div className="bedriftStandBase">
        <div className='bedriftStandInnhold'>
          <a href="/stander">tilbake til stander<br/></a>
          { this.props.testmode && <button onClick={(e) => this.toggle(e,!this.state.active_stand)}>(for demo)standområde er {this.state.active_stand? "åpent":"lukket"}</button>}
          {this.inntrykkt(bedrift,this.state.active_stand)}
          {this.infoBolk(bedrift)}
        </div>
      </div>
    )
  }
}

const Facebook = () => {
  return (
    <Link href="https://www.facebook.com/dagenatifi">
      <Icon className="fab fa-video"></Icon>
    </Link>
  )
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
