import React, { Component } from 'react';
import './index.css';
import './kontakt.css';
//import Layout from './Layout'
//import Routes from "./App-routes";
//import logo from '../img/normal_logo.png'; // with import

//for implementasjon av datafetching, sjekk ut dagen-today
class Kontakt extends Component {
  render() {
    return (
      <div class="kontaktbase">

        <div id="om-dagen" class="container-fluid hvit-bg">
          <div class="row">
          <div class="intro col-md-4 offset-2 ">
            <h2 class="svart_overskrift">om dagen</h2>
            <p>
              <br/>Dagen er en frivillig studentforening ved Institutt for Informatikk, UiO, som arrangerer to
              karrieredager i året. I høstsemesteret arrangeres dagen@ifi, og i vårsemesteret arrangeres
              ettermiddagen@ifi, begge finner sted på Ole Johan Dahls hus.
            </p>
            <p>
              En flott arena for studenter å møte bedrifter og se hva slags muligheter man har i arbeidslivet
              med en utdannelse innen informatikk, og det er en flott arena for bedrifter å markedsføre seg
              selv til informatikkstudenter over alle trinn.
            </p>
          </div>

          </div>
        </div>

        <div id="kontakt" class="container-fluid">
          <div class="row">

            <div class="adresse col-md-4 offset-1">

              <h2 class="svart_overskrift">Kontakt</h2>
              <h5>Du finner oss på institutt for informatikk ved UiO</h5>

              <div class="row">

                <div class="col-md">
                  <br/><b>Besøksadresse</b>
                  <br/>Institutt for informatikk
                  <br/>Ole-Johan Dahls hus
                  <br/>Gaustadalléen 23B
                  <br/>0373 Oslo
                </div>

                <div class="col-md">
                  <br/><b>Postadresse</b>
                  <br/>IFI-DAGEN
                  <br/>Institutt for informatikk
                  <br/>Postboks 1080 Blindern
                  <br/>0373 Oslo
                </div>

              </div>

              <br/>Vedtekter finner du <a
                href="https://static1.squarespace.com/static/55436d91e4b0026a5245a380/t/5ac3a38e8a922d61e27e1419/1522770830325/vedtekter.pdf">her.</a>
              <br/>Hele styret kan kontaktes på <a href="mailto:styret@dagenatifi.no">styret@dagenatifi.no</a>

            </div>

            <div class="col-md-4 offset-1">
              <h2 class="svart_overskrift">Navet</h2>
              <h5>Lyst til å holdebedriftspresentasjon på IFI?</h5>
              <br/>Navet er bedriftskontakten ved Institutt for Informatikk, Universitetet i Oslo. Les mer på om
              presentasjoner, ekskursjoner, faglige foredrag og kursrekker her:
              <a href="https://ifinavet.no/forcompanies">Navets hjemmesider</a>
            </div>

          </div>
        </div>


        <div id="styret" class="container-fluid">

          <h2 class="svart_overskrift blue text-center"><br/>Styret 2020 -  hent infoen her fra en json elns.</h2>

          <div class="row styret">

            <div class="col-md text-center">
              <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

          </div>

          <div class="row styret">

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

          </div>

          <div class="row styret">

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>


          </div>

          <div class="row styret">

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>

            <div class="col-md text-center"></div>

            <div class="col-md text-center">
            <img src={require("./img/obama.png")} alt="Obama"/>
              <br/><br/><b>STYRELEDER</b>
              <br/>Kari Eldfrid Stamnes
              <br/><a href="mailto:leder@dagenatifi.no">leder@dagenatifi.no</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Kontakt;
