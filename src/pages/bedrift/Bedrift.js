import React from 'react';
import '../../App.css';
import './bedrift.css';
import Visitkort from '../../components/Visitkort';
import Prisinfo from '../../components/Prisinfo';


const Bedrift = () => {
    return (
        <div className="bedriftbase ">
            <h1>
                Årets karrieredag blir for første gang arrangert digitalt,
                og vi synes det er veldig kult at så mange bedrifter er påmeldt.
            </h1>
            <p>Kl 11-13 vises standområdet på forsiden. Iløpet av dette tidsrommet vil studenter kunne besøke dere på zoom-standen deres.</p>
            <p> På bedriftsiden kan studentene bli bedre kjent med dere.
            Her kan dere legge ut informasjon om hvem dere er og hvilke stillinger dere utlyser.
            Dere kan også legge inn informasjon om eventuelle konkurranser dere holder eller linke til hjemmesiden deres.
            </p>
            <br />
            <div className="kontaktinfo">
                <h2>Trenger dere hjelp under arrangementet?</h2>
                <p>Problemer med zoom-stand? Kontakt Burhan.</p>
                <p>Lurer dere på noe angående bedriftsiden? Kontakt Kari.</p>
                <p>Spørsmål om foredrag går til Henrik.</p>
                <p>Ved generelle spørsmål kontakter dere Lise.</p>
                <div className="styret container-fluid">
                    <Visitkort rolle="FUNKSJONÆR ANSVARLIG" epost="funkansvarlig" navn="Burhan Sarfraz" />
                    <Visitkort rolle="TEKNISK ANSVARLIG" epost="teknisk" navn="Kari Stamnes" />
                    <Visitkort rolle="FAGLIG ANSVARLIG" epost="faglig" navn="Henrik Høybakk Olsvik" />
                    <Visitkort rolle="BEDRIFTSANSVARLIG" epost="bedrift" navn="Lise Wåsjø" />
                </div>
            </div>

            <div className="mailingliste hidden">
                <h1>MAILINGLISTE - null backend atm, men knappen dukker opp her når den er klar!</h1>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skriv e-postadresse her..." />
                    <a className="btn btn-lg btn-header btn_bedrift" href="#?">Meld din interesse</a>
                </div>
            </div>

            <Prisinfo className="hidden" />
        </div >
    );
}

export default Bedrift;
