import React, { Component } from 'react';
import './App.css';
import './program.css';
import './index.css';
import './front.css';

import program_info from './data/program_info.js'
//import Layout from './Layout'
//import Routes from "./App-routes";

class Program extends Component {
  statusbar = () => {
    //program_info["dag1"]
    const now = new Date();
    console.log(program_info["dag1"][0]["start"]);
    console.log(program_info["dag1"].length);
    let i = 0;
    while ( i < program_info["dag1"].length){
      if(now< program_info["dag1"][i]["start"]){
        const info = program_info["dag1"][i]
        console.log(info);
        return(
          <div id="banner" className="parallax">
            <h1> her kommer "nå skjer" og "snart" </h1>
            <div className="container">
              <div className=" text-center caption">
                <p>{info.foredragstittel}</p>
                <p>{info.beskrivelse}</p>
                <p>{info.start.toString()}</p>
                <p>{info.slutt.toString()}</p>
              </div>
            </div>
          </div>
        )
      }
      i++;
    }
    return(
      <div>yo</div>
    )
  }

  //lag liste av eventer
  foredrag = () => {
    return program_info["dag1"].map((hendinger, index) => {
      console.log(hendinger);
      return (
        <div className="event-detail" key={index}>
          <p><mark className="starttid">{hendinger.start.getHours()+":"+hendinger.start.getMinutes()}</mark> - {hendinger.foredragstittel}</p>
        </div>)
    })
  }

  render(){
    return (
      <div>
        <div className="statusbar">
          {this.statusbar()}
        </div>
        <div className="program">
          <h1> Program for idag</h1>
          {this.foredrag()}
        </div>
        <div className="detaltert-program">
          <h1> her kommer foredragskort med detaljer </h1>
        </div>
        <div id="banner" className="parallax">
          <h1> her kommer "nå skjer" og "snart" </h1>
          <div className="container">
            <div className=" text-center caption">
              hei
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Program;
