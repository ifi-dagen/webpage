import React from 'react'
import './frivillig.css'
import Visitkort from '../../components/Visitkort';


const Frivillig = () => {

  return (
    <div className="base">
      <h1>Takk for at så mange vil være frivillige!</h1>
      <p>
        Vi er kjempeglade for at så mange har meldt interesse for å være frivillige under dagen@ifi,
        og nå tror vi at vi har fått inn så mange som vi trenger.
        Har du fortsatt veldig lyst til å bidra med noe, sender du en mail til Burhan og hører om det er noe du kan bidra med.
      </p>
      <p>
        Som frivillig funksjonær, også kalt 'funk', vil du kunne velge mellom ulike arbeidsroller før, under eller etter bedriftsdagen.
        I år trenger vi spesielt hjelp til å holde oppsyn med bedrift-zoom-standene.
      </p>
      <p>
        Som takk vil du etter gjennomført skift få en gavepakke,
        og tilgang til vår ekslusive internfest om smittevernregler og tiltak tillater dette.
      </p>


      <div className="kontaktinfo">
        <h1>Har du spørsmål?</h1>
        <div className="styret container-fluid">
          <Visitkort rolle="FUNKANSVARLIG" epost="funkansvarlig" navn="Burhan Sarfraz" />
        </div>
      </div>

    </div>
  )
}



export default Frivillig;
