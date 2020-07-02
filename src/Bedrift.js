import React, { Component } from 'react';
import './App.css';
import './bedrift.css';
import Visitkort from './Visitkort'


//import Layout from './Layout'
//import Routes from "./App-routes";

class Bedrift extends Component {
  render(){
    return (
      <div class="bedriftbase ">
        <div class ="påmeldingsinfo">
          <h1>PÅMELDING ER ÅPEN</h1>
          <p>
            Informasjon om påmelding ble også sendt ut til bedriftene på vår mailingliste. Er du usikker på
            om din bedrift står på maillisten, ta kontakt.
          </p>
          <p>
            Mer informasjon om selve opptaksprosess, antall standplasser, tidspunkt og kriterier vil bli
            sendt ut som informasjon på e-post nærmere fristen for å besvare. Viktigste er at dere
            registrerer dere under påmeldingskjema om dere ønsker å delta i år.
          </p>
          <p>
            Etter en flott dag på stand blir det variert underholdning i studentkjelleren vår, Escape, og vi
            oppfordrer alle bedrifter til å bli igjen for å delta på dette. Dette er et av høstens store
            høydepunkter for studentene ved Institutt for Informatikk og en fin mulighet å mingle mer
            avslappet. Ta kontakt med bedriftansvarlig om dere lurer på noe mer.
          </p>
        </div>
        <div class ="mailingliste">
          <h1>MAILINGLISTE - null backend atm!</h1>
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skriv e-postadresse her..." />
              <a class="btn btn-lg btn-header btn_bedrift" href="#?">Meld din interesse</a>
          </div>
        </div>

        <div class ="arr_beskrivelse">
  		    <h5>Dagen@ifi vs. Ettermiddagen@ifi</h5>
					<p>
						- Mer informasjon om selve opptaksprosess, antall standplasser, tidspunkt og kriterier vil bli
						sendt ut som informasjon på e-post nærmere fristen for å besvare. Viktigste er at dere
						registrerer dere under påmeldingskjema om dere ønsker å delta i år.
					</p>
					<h5>Valgkriterier</h5>
					<p>
						- Mer informasjon om selve opptaksprosess, antall standplasser, tidspunkt og kriterier vil bli
						sendt ut som informasjon på e-post nærmere fristen for å besvare. Viktigste er at dere
						registrerer dere under påmeldingskjema om dere ønsker å delta i år.
					</p>
          <span class="blue">Påmeldingsfristen er mandag 1.juli. **Sett inn link her***</span>
				</div>

        <div class ="hovedsponsor_beskrivelse">
          <h1>HOVEDSPONSOR</h1>
          <p>beskrive hva som inngår i avtalen, evt søke knapp</p>
        </div>
        <div class ="kontaktinfo">
          <h1>SPØRSMÅL?</h1>
          <div class="styret container-fluid">
            <Visitkort rolle="BEDRIFTSANSVARLIG" epost="bedrift" navn="Lise Wåsjø"/>
            <Visitkort rolle="FAGLIG ANSVARLIG" epost="faglig" navn="Henrik Høybakk Olsvik"/>
          </div>
        </div>
        <div class ="priser">
          <h1>PRISER OG PAKKER</h1>
          <p>info om pakker, i år kan vi droppe v-boksene-v</p>
          <div class="row ">
    				<h2> Stand-pakker for <font color="#08A6E4">dagen@ifi</font> </h2>
    			</div>

    			<div class="row ">

    				<div class="col-lg-3 stand_pakke stand_pakke_1">
    					<div class="stand_pakke_inner">
    						<h2 class="svart_overskrift">STANDPLASS</h2>
    						<h5 class="blue">pris: 35 000,-</h5>

    						<br/><b>Pakken inkluderer:</b>
    						<br/>- Standplass på ca 4m2
    						<br/>- Bord og to barkrakker
    						<br/>- Trådløst internett
    						<br/>- Strøm (to kontakter)
    						<br/>- Logo i informasjonsbrosjyren for dagen@ifi
    						<br/>- Tilgang til bedriftslounge med mat og drikke på dagtid
    						<br/>- Mulighet for å holde foredrag/lyntale
    					</div>
    				</div>

    				<div class="col-lg-3 stand_pakke stand_pakke_2">
    					<div class="stand_pakke_inner">

    						<h2 class="svart_overskrift">SPONSOR</h2>
    						<h5 class="blue">pris: 55 000,-</h5>

    						<br/><b>Pakken inkluderer:</b>
    						<br/>- Alt som er inkludert i standakken
    						<br/>- Navn og logo fremhevet på vår nettside og trykksaker
    						<br/>- Intervjurom
    						<br/>- 1. Prioritet på valg av standplass
    						<br/>- Garantert et foredrag eller en lyntale
    						<br/>- 10 bonger for bruk på kvelden
    					</div>
    				</div>

    				<div class="col-lg-3 stand_pakke stand_pakke_3">
    					<div class="stand_pakke_inner">

    						<h2 class="svart_overskrift">HOVEDSPONSOR</h2>
    						<h5 class="blue">pris: 100 000,-</h5>

    						<br/><b>Pakken inkluderer:</b>
    						<br/>- Standplass på ca 4m2
    						<br/>- Bord og to barkrakker
    						<br/>- Trådløst internett
    						<br/>- Strøm (to kontakter)
    						<br/>- Logo i informasjonsbrosjyren for dagen@ifi
    						<br/>- Tilgang til bedriftslounge med mat og drikke på dagtid
    						<br/>- Mulighet for å holde foredrag/lyntale
    					</div>
    				</div>

    			</div>

        </div>
      </div>
    );
  }

}

export default Bedrift;
