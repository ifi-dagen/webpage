import React, { Component } from 'react';
import './App.css';
import './bedrift.css';
import Visitkort from './Visitkort';
import Prisinfo from './Prisinfo';


export default class Bedrift extends Component {
    render(){
        return (
            <div className="bedriftbase ">
                <div className ="påmeldingsinfo hidden">
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
                <div className="påmeldingsinfo">
                    <h1>PÅMELDING FOR HØSTEN 2020 ER STENGT</h1>
                    <p>
                        Informasjon om påmeldinger blir sendt ut til bedriftene på vår mailingliste. Er du usikker på
                        om din bedrift står på maillisten, ta kontakt.
                    </p>
                </div>

                <div className="kontaktinfo">
                    <h1>SPØRSMÅL?</h1>
                    <div className="styret container-fluid">
                        <Visitkort rolle="BEDRIFTSANSVARLIG" epost="bedrift" navn="Lise Wåsjø"/>
                        <Visitkort rolle="FAGLIG ANSVARLIG" epost="faglig" navn="Henrik Høybakk Olsvik"/>
                    </div>
                </div>

                <div className ="mailingliste hidden">
                    <h1>MAILINGLISTE - null backend atm, men knappen dukker opp her når den er klar!</h1>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skriv e-postadresse her..." />
                        <a className="btn btn-lg btn-header btn_bedrift" href="#?">Meld din interesse</a>
                    </div>
                </div>

                <div className="arr_beskrivelse">
                    <h5>dagen@ifi vs. ettermiddagen@ifi</h5>
                    <p>
                        I år blir dagen@ifi anderledes, men til vanlig er dagen@ifi den store karrieredagen vår tidlig på høsten med nettverkbygging fra morgen til kveld. ettermiddagen@ifi er en litt mindre karriredag med nettverksbygging fra formiddag til kveld.
                    </p>
                    <span className="blue">Påmelding og priser for ettermiddagen@ifi 2020 publiseres i januar/februar.</span>
                </div>

                <div className="hovedsponsor_beskrivelse hidden">
                    <h1>HOVEDSPONSOR</h1>
                    <p>beskrive hva som inngår i avtalen, evt søke knapp</p>
                    <h5>Valgkriterier</h5>
                    <p>
                        - Mer informasjon om selve opptaksprosess, antall standplasser, tidspunkt og kriterier vil bli
                        sendt ut som informasjon på e-post nærmere fristen for å besvare. Viktigste er at dere
                        registrerer dere under påmeldingskjema om dere ønsker å delta i år.
                    </p>
                </div>

				<Prisinfo className="hidden"/>
            </div>
        );
    }

}
