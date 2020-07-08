import React, { Component } from 'react';
import './App.css';
import './bedrift.css';

export default class Prisinfo extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.className === "hidden") {
            return (<div className="priser_kommer_her"/>);
        }

        return (
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
        );
    }
}