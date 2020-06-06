import React, { Component } from 'react';
import './App.css';
import Sponsor from './Sponsor';
import './index.css';
import './kontakt.css'
//import Routes from "./App-routes";
//import logo from '../img/normal_logo.png'; // with import

//for implementasjon av datafetching, sjekk ut dagen-today
class Front extends Component {
  render() {
    return (
      <div>
        <div id="banner" class="parallax">
          <div class="container">
            <div class="row">
              <div class="col-md text-center caption">
                <img class="front-logo" src={ require('./img/normal_logo.png')} alt="Dagen@ifi logo" />
                <h1>Den største bedriftsdagen i Oslo</h1>
                <h2 id="demo">04 : 22 : 45 : 12</h2>
                <h3>Torsdag 10. Okotober, Ole Johan Dahls hus</h3>
                <a class="btn btn-lg" href="program.html">Program</a>
              </div>
            </div>
          </div>
        </div>

        <div id="info" class="container-fluid hvit-bg">
          <div class="row">
            <div class="col-md-4 offset-1 ">
              <h2 class="svart_overskrift">Hva er dagen@ifi?</h2>
              <p>
                En flott arena for studenter å møte bedrifter og se hva slags muligheter man har i arbeidslivet med
                en utdannelse innen informatikk, og det er en flott arena for bedrifter å markedsføre seg selv til
                informatikkstudenter over alle trinn.
              </p>
              <p>
                En flott arena for studenter å møte bedrifter og se hva slags muligheter man har i arbeidslivet med
                en utdannelse innen informatikk, og det er en flott arena for bedrifter å markedsføre seg selv til
                informatikkstudenter over alle trinn.
              </p>
            </div>

            <div class="col-md-4 hvor_og_naar">
              <h2 class="svart_overskrift">Hvor og når?</h2>
              <p>
                <h5>Du finner oss på institutt for informatikk ved UiO:</h5>
                <br/>Institutt for informatikk
                <br/>Ole-Johan Dahls hus
                <br/>Gaustadalléen 23B
                <br/>0373 Oslo
              </p>
              <p>
                <h5>Fredag 28. September, kl 10-22</h5>
                <br/>Standområde: 10-16
                <br/>Underholdning: 18-22
              </p>
            </div>

          </div>
        </div>
        <Sponsor/>
      </div>
    );
  }
}

export default Front;
