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
            <p>Kl 11-13 vises standområdet på forsiden. Iløpet av dette tidsrommet vil de kunne besøke zoom-standen deres.</p>
            <p>På bedriftsiden deres vil studentene kunne se en introduksjonsvideo, lese en beskrivelse av bedriften deres og se hvilke stillingsannonser dere har ute. Har dere konkurranser eller ønsker å legge til noe mer på denne siden, eller har ønsker om endring har vi noe fleksibilitet til å legge til dette på siden. </p>
            <div className="kontaktinfo">
                <h2>Trenger dere hjelp under arrangementet?</h2>
                <p>Problemer med zoom-stand? Kontakt Burhan.</p>
                <p>Vil dere endre noe med standoversikt eller bedriftsiden? Kontakt Kari.</p>
                <p>Spørsmål om foredrag går til Henrik.</p>
                <p>Ved generelle spørsmål kontakter dere Lise.</p>
                <div className="styret container-fluid">
                    <Visitkort rolle="TEKNISK ANSVARLIG" epost="teknisk" navn="Kari Stamnes" />
                    <Visitkort rolle="BEDRIFTSANSVARLIG" epost="bedrift" navn="Lise Wåsjø" />
                    <Visitkort rolle="FAGLIG ANSVARLIG" epost="faglig" navn="Henrik Høybakk Olsvik" />
                    <Visitkort rolle="FUNKSJONÆR ANSVARLIG" epost="funkansvarlig" navn="Burhan Sarfraz" />
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
