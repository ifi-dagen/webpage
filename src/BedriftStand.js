import React, { Component } from 'react';
import './App.css';
import './stander.css';
import stand_info from './data/stand_info.js'

import ReactPlayer from 'react-player/youtube';



export default class BedriftStand extends Component {
  state = { show: true, active_stand: false };

  delayUpdate = (newState, timeout) => {
    const context = this;
    setTimeout(function() {context.setState({active_stand: newState}); }, timeout);
  }

  active = (tidspunkt) => {
    console.log(tidspunkt);
    //for testing: edit the following variables as you please!
    const stand_start = new Date(2020, 7, 22, 11, 58, 40, 0); //new Date(2020, 8, 24, 12, 0, 0, 0);
    const stand_stop = new Date(2020, 7, 22, 11, 58, 45, 0); //new Date(2020, 8, 24, 14, 0, 0, 0);
    const stand_start2 = new Date(2020, 7, 22, 11, 58, 50, 0); //new Date(2020, 8, 25, 12, 0, 0, 0);
    const stand_stop2 = new Date(2020, 7, 22, 11, 58, 55, 0); //new Date(2020, 8, 25, 14, 0, 0, 0);
    console.log(stand_stop);

    if (tidspunkt < stand_start){
      this.delayUpdate(true,(stand_start.getTime() - tidspunkt.getTime()));
      //return false;
    } else if (tidspunkt < stand_stop){
      if(this.state.dag !== true){this.setState({dag: true})}
      this.delayUpdate(false,(stand_stop.getTime() - tidspunkt.getTime()));
      //return true;
    } else if (tidspunkt < stand_start2){
      if(this.state.dag !== false){this.setState({dag: false})}
      this.delayUpdate(true,(stand_start2.getTime() - tidspunkt.getTime()));
      //return false;
    } else if (tidspunkt < stand_stop2){
      if(this.state.dag !== true){this.setState({dag: true})}
      this.delayUpdate(false,(stand_stop2.getTime() - tidspunkt.getTime()));
      //return true;
    } else {
      //console.log("før",this.state.dag);
      if(this.state.dag !== false){this.setState({dag: false})}
      //console.log("etter",this.state.dag);
      //return false;
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

  inntrykkt = (bedrift,videoStyle,activated) => {
    if (activated){
      return <div id="zoomlink">
              <a href={bedrift.zoomlink}> <h1>Møt oss her!</h1></a>
            </div>
    }
    return <div id='videoContainer'>
        <ReactPlayer
          id='video'
          url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
          playing={false}
          loop={true}
          style={videoStyle}
          width='640px'
          height='360px'
        />
      </div>
  }



  render(){
    this.active(new Date())
    const bedrift = stand_info[this.props.match.params.dag][this.props.match.params.bedrift];
    const videoStyle = {
      justifyContent: 'center',
      alignSelf: 'center'
    };
    return (
      <div className="bedriftStandBase">
        <div className='bedriftStandInnhold'>
          <a href="/stander">tilbake til stander<br/></a>
          { this.props.testmode && <button onClick={(e) => this.toggle(e,!this.state.active_stand)}>(for demo)standområde er {this.state.active_stand? "åpent":"lukket"}</button>}
          {this.inntrykkt(bedrift,videoStyle,this.state.active_stand)}
          {this.infoBolk(bedrift)}
        </div>
      </div>
    )
  }
}
