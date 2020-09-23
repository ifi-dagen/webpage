import React, { Component } from 'react';
import styled from "styled-components";
import './stander.css';
import stand_info from '../../data/stand_info.js'
import Etter from './etter'
import {stand_time} from '../../data/time.js'

export default class Stander extends Component {
  state = { show: false, active_stand: false, dag: "før" };

  stander = (dag,testmode) => {
    const standliste = Object.values(stand_info[dag]).map((bedrift, index) => {
      const link = "/stander/" + dag + "/" + bedrift.bedriftnavn.replace(/\s/g, '_');
      return (
        <div className="button-card-container"
          id={index} key={index}>
          <a className="button-card"
            id={index} key={index}
            href={link}>
            <img id={index}
              className="button-img"
              src={require("../../img/logoer/" + bedrift.logonavn)}
              alt={bedrift.bedriftnavn} />
          </a>
        </div>
      )
    })
    if(testmode){
      standliste.unshift((<div key={-1}>{this.standbuttons(testmode)}</div>))
    }
    return standliste
  }

  preview_bedrifter = (dag, testmode) => {
    /*<div className="button-card-container"
      id={index} key={index}>
      <a className="button-card"
        id={index} key={index}
        href={link}>
        <img id={index}
          className="button-img"
          src={require("../../img/logoer/" + bedrift.logonavn)}
          alt={bedrift.bedriftnavn} />
      </a>
    </div>*/
    const previews = Object.values(stand_info[dag]).map((bedrift, index) => {
      return (
          <PreviewContainer key={index}>
            <PreviewCard>
              <PreviewImg id={index}
                src={require("../../img/logoer/" + bedrift.logonavn)}
                alt={bedrift.bedriftnavn} />
            </PreviewCard>
          </PreviewContainer>
        )
      })
      if(testmode){
        previews.unshift((<div key={-1}>{this.standbuttons(testmode)}</div>))
      }
    return previews;
  }

  delayUpdate = (newState, timeout) => {
    const context = this;
    setTimeout(function () { context.setState({ dag: newState }); }, timeout);
  }

  finnDag = (tidspunkt) => {
    //henter tidspunkt fra /data/time.js
    if (tidspunkt < stand_time.start1) {
      console.log("here")
      this.delayUpdate("dag1", (stand_time.start1.getTime() - tidspunkt.getTime()));
    } else if (tidspunkt < stand_time.start2) {
      console.log("here2")
      if (this.state.dag !== "dag1") { this.setState({ dag: "dag1" }) }
      this.delayUpdate("dag2", stand_time.start2.getTime() - tidspunkt.getTime());
    } else if (tidspunkt < stand_time.stop) {
      if (this.state.dag !== "dag2") { this.setState({ dag: "dag2" }) }
      this.delayUpdate("etter", (stand_time.stop.getTime() - tidspunkt.getTime()));
    } else {
      if (this.state.dag !== "etter") { this.setState({ dag: "etter" }) }
    }
  }

  toggle = (e, value) => {
    e.preventDefault();
    this.setState({ dag: value })
  }

  standbuttons = (show) => {
    if (show) {
      return (<div className="stand-bar-buttons">
        <button onClick={(e) => this.toggle(e, "før")}>(før) </button>
        <button onClick={(e) => this.toggle(e, "dag1")}>Torsdag</button>
        <button onClick={(e) => this.toggle(e, "dag2")}>Fredag</button>
        <button onClick={(e) => this.toggle(e, "etter")}>(etter)</button>
      </div>
      );
    }
    return <div></div>
  }

  componentDidMount(){
    this.finnDag(new Date()); //NB denne linja styrer tiden
    console.log(stand_time.stop, this.state)
  }

  render() {
    const testmode = this.props.testmode;
    //finn ut tidspunkt
    //this.finnDag(new Date()); //NB denne linja styrer tiden
    switch (this.state.dag) {
      case "før":
        if (this.props.forside) {
          return (<div>{this.preview_bedrifter("dag1")}</div>);
        }
        return (<div className={this.props.forside?"standOmraadeKomponent":"standbakgrunn"} id="standomraade">
          {this.preview_bedrifter("dag1", testmode)}
        </div>)
      case "dag1":
        return (<div className={this.props.forside?"standOmraadeKomponent":"standbakgrunn"} id="standomraade">
          <h2>Besøk bedriftene her!</h2>
          <div className="standbase">
          {this.stander("dag1", testmode)}
          {this.preview_bedrifter("dag2")}
          </div>
        </div>)
      case "dag2":
        return (<div className={this.props.forside?"standOmraadeKomponent":"standbakgrunn"}id="standomraade" >
          <h2>Besøk bedriftene her!</h2>
          <div className="standbase">
          {this.stander("dag2", testmode)}
          </div>
        </div>)
      case "etter":
        return (
          <Etter />
        )
      default:
        return <h1>Her er det ingen stander akkuratt nå, desverre</h1>
    }
  }
}


const PreviewContainer = styled.div`
  display: grid;
  min-width: 0;
  height: 200px;
  width: 200px;
  justify-content: center;
  background-color: white;
`;

const PreviewCard = styled.div`
  border: none;
  height: 200px;
  width: 200px;
  padding: 0.5em;
  background: #ffffff;
  transition: 0.3s;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, auto));
  box-shadow: inset 0 0 0 1000px rgba(44,164,255,.2);
  }
`;

const PreviewImg = styled.img`
  width: auto;
  max-height: 200px;
  max-width: 200px;
  margin: auto;
  align-content: center;
  display: block;
  box-shadow: inset 0 0 0 1000px rgba(44,164,255,.2);

`;
