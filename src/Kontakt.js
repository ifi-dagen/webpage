import React, { Component } from 'react';
import './index.css';
import './kontakt.css';
import Visitkort from './Visitkort'
//import Routes from "./App-routes";
//import logo from '../img/normal_logo.png'; // with import

//for implementasjon av datafetching, sjekk ut dagen-today
class Kontakt extends Component {
  render() {
    return (
      <div class="kontaktbase">

        <div id="om-dagen" class="container-fluid">
          <div class="row">
          <div class="intro col-md-4 offset-2 ">
            <h2 class="svart_overskrift">om dagen</h2>
            <p>
              <br/>dagen er en frivillig studentforening ved Institutt for Informatikk, UiO, som arrangerer to
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
              Navet er bedriftskontakten ved Institutt for Informatikk, Universitetet i Oslo. Les mer på om
              presentasjoner, ekskursjoner, faglige foredrag og kursrekker her:
              <a href="https://ifinavet.no/forcompanies">Navets hjemmesider</a>
              <h2 class="svart_overskrift">Karriereuka</h2>
              <h5>I år sammarbeider vi med karriereuka på UiO</h5>
              Karriereuka holdes 21.-23. September og blir også holdt digitalt.
              <a href="https://www.uio.no/studier/karriere/karriereuka/">karriereuka hjemmesider hjemmesider</a>
            </div>

          </div>
        </div>

        <div id="styret">
          <div class="text-center">
            <h2 class="svart_overskrift blue"><br/>Styret 2020</h2>
          </div>
          <div class="styret container-fluid">
            <Visitkort rolle="LEDER" epost="leder" navn="Lea Nøstdahl"/>
            <Visitkort rolle="NESTLEDER" epost="nestleder" navn="Silje Marie Flaaten"/>
            <Visitkort rolle="BEDRIFTSANSVARLIG" epost="bedrift" navn="Lise Wåsjø"/>
            <Visitkort rolle="ØKONOMIANSVARLIG" epost="okonomi" navn="Jonas Roppestad Olsen"/>
            <Visitkort rolle="PROMOTERINGSANSVARLIG" epost="promotering" navn="Jørgen Skimmeland"/>
            <Visitkort rolle="PROMOTERINGSANSVARLIG" epost="promotering" navn="Camilla Christensen"/>
            <Visitkort rolle="FAGLIG ANSVARLIG" epost="faglig" navn="Henrik Høybakk Olsvik"/>
            <Visitkort rolle="FUNKANSVARLIG" epost="funkansvarlig" navn="Burhan Sarfraz"/>
            <Visitkort rolle="UNDERHOLDNINGSANSVARLIG" epost="underholdning" navn="Thea Aksdal Nordgulen "/>
            <Visitkort rolle="SOSIALT ANSVARLIG" epost="sosialt" navn="Nora Vestavik Klingvall"/>
            <Visitkort rolle="TEKNISK ANSVARLIG" epost="teknisk" navn="Kari Stamnes"/>
          </div>
        </div>

      </div>
    );
  }
}

export default Kontakt;
