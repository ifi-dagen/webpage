import React, { Component } from 'react';
import './App.css';
import './bedrift.css';
import Visitkort from './Visitkort'


class Bedrift extends Component {
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
                    <h1>MAILINGLISTE - null backend atm!</h1>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skriv e-postadresse her..." />
                        <a className="btn btn-lg btn-header btn_bedrift" href="#?">Meld din interesse</a>
                    </div>
                </div>

                <div className="arr_beskrivelse">
                    <h5>Dagen@ifi vs. Ettermiddagen@ifi</h5>
                    <p>
                        I år blir dagen@ifi anderledes, men til vanlig er dagen@ifi den store karrieredagen vår tidlig på høsten med nettverkbygging fra morgen til kveld. Ettermiddagen@ifi er en litt mindre karriredag med nettverksbygging fra formiddag til kveld.
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
                <div className="priser ">
                    <h1>PRISER OG PAKKER</h1>
                    <p>info om pakker, i år kan vi droppe v-boksene-v</p>
                    <div className="row ">
                        <h2> Stand-pakker for <text color="#08A6E4">dagen@ifi</text> </h2>
                    </div>

                    <div className="row ">

                        <div className="col-lg-3 stand_pakke stand_pakke_1">
                            <div className="stand_pakke_inner">
                                <h2 className="svart_overskrift">STANDPLASS</h2>
                                <h5 className="blue">pris: 35 000,-</h5>

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

                        <div className="col-lg-3 stand_pakke stand_pakke_2">
                            <div className="stand_pakke_inner">

                                <h2 className="svart_overskrift">SPONSOR</h2>
                                <h5 className="blue">pris: 55 000,-</h5>

                                <br/><b>Pakken inkluderer:</b>
                                <br/>- Alt som er inkludert i standakken
                                <br/>- Navn og logo fremhevet på vår nettside og trykksaker
                                <br/>- Intervjurom
                                <br/>- 1. Prioritet på valg av standplass
                                <br/>- Garantert et foredrag eller en lyntale
                                <br/>- 10 bonger for bruk på kvelden
                            </div>
                        </div>

                        <div className="col-lg-3 stand_pakke stand_pakke_3">
                            <div className="stand_pakke_inner">

                                <h2 className="svart_overskrift">HOVEDSPONSOR</h2>
                                <h5 className="blue">pris: 100 000,-</h5>

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
