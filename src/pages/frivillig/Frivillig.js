import React from 'react'
import styled from 'styled-components'
import './frivillig.css'
import Visitkort from '../../components/Visitkort';


const Frivillig = () => {

  return (
    <div className="base">
      <h1>Vi trenger frivillige!</h1>
      <p>For å arrangere en trygg og vellykket bedriftsdag, er vi helt avhengige av frivillige under dagen@ifi.</p>
      <p>Som frivillig funksjonær, også kalt 'funk', vil du kunne velge mellom ulike arbeidsroller før, under eller etter bedriftsdagen.</p>
      <p>Som takk vil du etter gjennomført skift få en gavepakke, samt tilgang til vår ekslusive internfest.</p>

      <Button>Frivilligskjema</Button>

      <div className="kontaktinfo">
        <h1>Har du spørsmål?</h1>
        <div className="styret container-fluid">
          <Visitkort rolle="FUNKANSVARLIG" epost="funkansvarlig" navn="Burhan Sarfraz" />
        </div>
      </div>

    </div>
  )
}

const Button = styled.button`
  background: none;
  color: dodgerblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid dodgerblue;
  border-radius: 3px;
`


export default Frivillig;
