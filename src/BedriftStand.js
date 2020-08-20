import React, { Component } from 'react';
import './App.css';
import './stander.css';
import stand_info from './data/stand_info.js'

import ReactPlayer from 'react-player/youtube';



export default class BedriftStand extends Component {
  state = { show: true, active_stand: false };



  hideModal = () => {
    this.setState({ show: false });
  };

  active = (now) => {
    console.log(now);
    //for testing: edit the following variables as you please!
    const stand_start = new Date(2019, 9, 24, 12, 0, 0, 0); //før: melding om at stander åpner "24.09 klxx:xx"
    const stand_stop = new Date(2019, 9, 24, 14, 0, 0, 0); //før: stander
    const stand_start2 = new Date(2020, 9, 25, 12, 0, 0, 0); //før: stand kort med video istede for zoom-link
    const stand_stop2 = new Date(2020, 9, 25, 14, 0, 0, 0); //før: Stander                                                            //etter: takk for i år!
    if (now < stand_start){
      return false;
    } else if (now < stand_stop){
      return true;
    } else if (now < stand_start2){
      return false;
    } else if (now < stand_stop2){
      return true;
    } else {
      return false;
    }
  }

  infoBolk = (bedrift) => {
    return <div className="infoBolk">
      <h1 className="bedriftnavn"> {bedrift.bedriftnavn}</h1>
      <p> {bedrift.beskrivelse}</p>
      {bedrift.ice_breakers.length !== 0 && <h4>spørr oss om</h4>}
      <p>{bedrift.ice_breakers.join(", ")}</p>
      {bedrift.stillinger.length !== 0 && <h4>Stillinger</h4>}
      {bedrift.stillinger.map((annonse, index) => {
        return (<a href={annonse.link} key={index}>{annonse.tekst}<br/></a>)
      })}
      {bedrift.konkurranser.length !== 0 && <h4>Konkuranse</h4>}
      {bedrift.konkurranser.map((annonse, index) => {
        return (<a href={annonse.link}key={index}>{annonse.tekst}<br/></a>)
      })}
      {bedrift.foredrag.length !== 0 && <h4>foredrag</h4>}
      {bedrift.foredrag.map((annonse, index) => {
        return (<a href={annonse.link}key={index}>{annonse.tekst}<br/></a>)
      })}
    </div>
  }

  toggle = (e, value) => {
    e.preventDefault();
    this.setState({active_stand: value})
  }

  inntrykkt = (bedrift,videoStyle) => {
    if (this.state.active_stand === true){
      return <div id="zoomlink">
              <a href={bedrift.zoomlink}> <h1>Møt oss her!</h1></a>
            </div>
    }
    return <div id='videoContainer'>
        <ReactPlayer
          id='video'
          url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
          playing={true}
          loop={true}
          style={videoStyle}
          width='640px'
          height='360px'
        />
      </div>
  }



  render(){
    const bedrift = stand_info["dag1"][this.props.match.params.bedrift];
    const videoStyle = {
      width: '100px',
      justifyContent: 'center',
      alignSelf: 'center'
    };

    return (
      <div className="modal">
        <div className='modal-main'>
          <a href="./">tilbake til stander<br/></a>
          <button onClick={(e) => this.toggle(e,!this.state.active_stand)}>(for demo)standområde er {this.state.active_stand? "åpent":"lukket"}</button>
          {this.inntrykkt(bedrift,videoStyle)}
          {this.infoBolk(bedrift)}
        </div>
      </div>
    )
  }
}
