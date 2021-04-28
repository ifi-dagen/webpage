import React, { Component } from 'react';
import '../App.css';
import '../pages/bedrift/bedrift.css';

export default class Prisinfo extends Component {
    render() {
        if (this.props.className === "hidden") {
            return (<div className="priser_kommer_her" />);
        }

        return (
            <div className="priser ">
                <h1>PRISER OG PAKKER</h1>
                <div className="row ">
             </div>
                <div className="row ">

                <div className="col-lg-3 stand_pakke stand_pakke_1">
                        <div className="stand_pakke_inner">
                            <h2 className="svart_overskrift">DIGITAL STANDPLASS</h2>
                            <h3 className="blue">pris: 10 000,-</h3>

                            <br /><b>Pakken inkluderer:</b>
                            <br />- Noe profilering på nettsiden og i våre sosiale medier
                            <br />- Zoom rom
                        </div>
                </div>

                <div className="col-lg-3 stand_pakke stand_pakke_1">
                        <div className="stand_pakke_inner">
                            <h2 className="svart_overskrift">DIGITAL SPONSOR STANDPLASS</h2>
                            <h3 className="blue">pris: 15 000,-</h3>

                            <br /><b>Pakken inkluderer:</b>
                            <br />- Profilering på nettsiden og i våre sosiale medier
                            <br />- Zoom rom
                            <br />- Foredrag
                        </div>
                </div>
                    
                    <div className="col-lg-3 stand_pakke stand_pakke_1">
                        <div className="stand_pakke_inner">
                            <h2 className="svart_overskrift">FYSISK STANDPLASS</h2>
                            <h3 className="blue">pris: 30 000,-</h3>

                            <br /><b>Pakken inkluderer:</b>
                            <br />- Standplass på ca 4m2
                            <br />- Bord og to barkrakker
                            <br />- Trådløst internett
                            <br />- Strøm (to kontakter)
                            <br />- Logo i informasjonsbrosjyren for dagen@ifi
                            <br />- Tilgang til bedriftslounge med mat og drikke på dagtid
                            <br />- Mulighet for å holde foredrag/lyntale
                            <br />- Profilering på nettsiden 
                        </div>
                    </div>

                

                    <div className="col-lg-3 stand_pakke stand_pakke_2">
                        <div className="stand_pakke_inner">

                            <h2 className="svart_overskrift">SPONSORPLASS</h2>
                            <h3 className="blue">pris: 45 000,-</h3>

                            <br /><b>Pakken inkluderer:</b>
                            <br />- Alt som er inkludert i standardpakken
                            <br />- Navn og logo fremhevet på vår nettside og trykksaker
                            <br />- Intervjurom
                            <br />- 1. Prioritet på valg av standplass
                            <br />- Garantert et foredrag eller en lyntale
                            <br />- 10 bonger for bruk på kvelden
                        </div>
                    </div>

                    <div className="col-lg-3 stand_pakke stand_pakke_3">
                        <div className="stand_pakke_inner">

                            <h2 className="svart_overskrift">HOVEDSPONSOR</h2>
                            <h3 className="blue">pris: 55 000,-</h3>

                            <br /><b>Pakken inkluderer:</b>
                            <br />- Standplass på ca 4m2
                            <br />- Bord og to barkrakker
                            <br />- Trådløst internett
                            <br />- Strøm (to kontakter)
                            <br />- Logo i informasjonsbrosjyren for dagen@ifi
                            <br />- Tilgang til bedriftslounge med mat og drikke på dagtid
                            <br />- Mulighet for å holde foredrag/lyntale
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
