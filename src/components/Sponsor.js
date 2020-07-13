import React, { Component } from 'react';
import '../App.css';
//import Layout from './Layout';
//import Routes from "./App-routes";
//import logo from '../img/normal_logo.png'; // with import

//for implementasjon av datafetching, sjekk ut dagen-today
class Sponsor extends Component {
  render() {
    return(
      <div >
        <div id="hovedsponsor" class="container-fluid graa-bg">
          <div class="row">

            <div class="col-md-5 offset-1">
              <h2 class="svart_overskrift blue"><br/>HOVEDSPONSOR 2019</h2>
              <img src={ require("../img/politiet.png")} alt="Politiets IKT-tjenester logo" />

              <p>
                <br/>En flott arena for studenter å møte bedrifter og se hva slags muligheter man har i arbeidslivet
                med en utdannelse innen informatikk, og det er en flott arena for bedrifter å markedsføre seg selv
                til informatikkstudenter over alle trinn.
              </p>
              <p>
                En flott arena for studenter å møte bedrifter og se hva slags muligheter man har i arbeidslivet med
                en utdannelse innen informatikk, og det er en flott arena for bedrifter å markedsføre seg selv til
                informatikkstudenter over alle trinn.
              </p>
            </div>

            <div class="col-md-5 offset-1 col_bilde politi_bilde">
            </div>

          </div>
        </div>

        <div id="sponsor" class="container-fluid hvit-bg text-center">
          <div class="row">

            <div class="col-12">
              <h2 class="svart_overskrift_innrykk blue">SPONSORER</h2>
            </div>

          </div>

          <div class="row">

            <div class="col-md-3 offset-1">
              <img src={ require("../img/logo_1.png")} alt="Politiets IKT-tjenester logo"/>
            </div>

            <div class="col-md-3 offset-1">
              <img src={ require("../img/logo_2.jpg")} alt="Politiets IKT-tjenester logo"/>
            </div>

            <div class="col-md-3 offset-1">
              <img src={ require("../img/logo_3.png")} alt="Politiets IKT-tjenester logo"/>
            </div>

          </div>


          <div class="row">

            <div class="col-md-3 offset-1">
              <img src={ require("../img/logo_4.png")} alt="Politiets IKT-tjenester logo"/>
            </div>

            <div class="col-md-3 offset-1">
              <img src={ require("../img/logo_5.png")} alt="Politiets IKT-tjenester logo"/>
            </div>

            <div class="col-md-3 offset-1">
              <img src={ require("../img/logo_6.png")} alt="Politiets IKT-tjenester logo"/>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Sponsor;
