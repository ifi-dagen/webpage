
import React from 'react';
import styled from 'styled-components'

 const Front = () => {
  return (
    <div className="content">
      <br/>
      <br />
      <h1>Informasjon til bedrifter om påmelding til dagen@ifi høst 2021</h1>
      <h3>Sist oppdatert: 30.06.2021</h3>
       
      <h4>
        Høstens karrieredag dagen@ifi er satt til 23. september 2021.
          <b> Påmeldingen er nå stengt. </b> Vi er dessverre litt forsinket i opptaket av bedrifter, men vil sende en bekreftelse eller et avslag på deltakelse innen 1. august (uke 30).
        <br/>
        <br/>
          Årets karrieredag blir digital dette semesteret også. Det siste året har vi gjort vårt beste for å arrangere digitale versjoner av dagen- og ettermiddagen@ifi gjennom denne nettsiden og zoom, men for dagen@ifi 2021 har vi bestemt oss for å teste ut en ny plattform som heter  Graduateland. Vi mener denne plattformen vil fungere bedre for å koble bedrifter og studenter, og totalt sett løfte den helhetlige opplevelsen av en digital karrieredag for begge parter. Bruk av denne plattformen medfører at vi er nødt til å øke prisene våre. Karrieredagens varighet blir 4 timer, og vi åpner for at 25 bedrifter kan delta. Vi mener dette antallet bedrifter er et godt kompromiss for å sikre godt oppmøte for hver bedrift, og for at det ikke blir overveldende for studenten å navigere seg mellom for mange bedrifter.
      </h4>
      <Wrapper>
        <div className="stand-box"> 
          <h4>Digital standplass</h4>
          <b><p>Pris: 20 000,-</p></b>
          <p>Profilering på dagenatifi.no</p>
          <p>Profilering på våre sosiale medier</p>
          <p>Graduateland rom</p>
        </div>
       
        <div className="stand-box"> 
          <h4>Digital sponsor standplass</h4>
          <b><p>Pris: 25 000,-</p></b>
          <p>Profilering på dagenatifi.no</p>
          <p>Profilering på våre sosiale medier</p>
          <p>Graduateland rom</p>
          <p>Mulighet for å dele ut merch</p>
          <p>Høyere eksponering i vår promotering</p>
          <p>Foredrag</p>
        </div>
      </Wrapper> 
    </div >
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, auto));
  grid-gap: 1rem;
  justify-content: center;
`

export default Front;