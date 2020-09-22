import React from 'react'
import styled from 'styled-components'

const Studenter = () => {
    return (
        <Wrapper>
            <h1>Hjelp, hvordan forbereder jeg meg til en digital karrieredag? </h1>
            <div>
                <h2>Nå er det ikke lenge før ifi’s første digitale karrieredag braker løs - og her kommer det et par tips til hvordan du kan forberede deg!</h2>
                <br />
                <Point> Oppdater LinkedIn CVen din</Point>
                Headhuntere og rekrutteringsbyråer bruker LinkedIn aktivt.
                Det er ikke uvanlig at det er de som tar kontakt med deg,
                så hvis du har en oppdatert profil vil det alene kanskje sørge for at du får jobb muligheter uten at du aktivt sender ut søknader.
                Vi anbefaler uansett at du oppdaterer profilen din og legger til de siste jobb-relaterte erfaringene du har.
                <br />
                <Point> Last opp sideprosjekter på GitHub </Point>
                Har du kodet noe kult i et fag, eller laget noe på fritiden - last opp prosjektet på GitHub!
                Det er en plattform ‘alle’ i bransjen kjenner,
                og bare det at du har klart å laste opp noe som helst er i seg selv er et bra første steg inn i programmeringsverdenen.
                <br />

                <Point> Last opp tekster du er fornøyd med på Medium eller en blogg </Point>
                For de av dere som kanskje ikke har så mange kode prosjekter å vise til,
                vil vi tipse dere om å laste opp tekster du har skrevet iløpet av studietiden på bloggplattformer som Medium, eller liknende.
                I mange fag vet vi at det skrives lange rapporter, eller kanskje du har skrevet en oblig om et tema du synes er spennende.
                Evnen til å kunne artikulere seg og reflektere rundt ting du har lært er supre soft-skills å vise frem,
                samtidig som det er en gylden mulighet til å vise frem noe faglig som engasjerer deg.
                <br />
                <Point> Sjekk ut hvilke bedrifter som kommer, og noter ned spørsmål på forhånd!
                     </Point>
                Hvorfor heter bedriften som den gjør, og hvor ligger lokalene deres?
                Er det mulighet for å jobbe utenlands, eller remote? Hvordan er kjønnsbalansen i prosjektene,
                og er det streng dresscode? Hvilke programmeringsspråk og rammeverk bruker dere,
                og hvilke prototype verktøy anbefaler dere å lære seg? Hva slags mat er det i kantina,
                og er det digg kaffe?
        </div>
            <Footer />
        </Wrapper>

    )
}

const Wrapper = styled.div`
    padding: 0rem 5rem;
    margin: auto;
    max-width: 700px;
    line-height: 1.5;

    h1 {
        color: black;
        line-height:1;
    }
    h2 {
        font-weight: normal;
        font-size: 20px;
    }
    
`

const Point = styled.p`
    color: deepskyblue;
    font-size: 20px;
    line-height:1;
`

const Footer = styled.div`
    padding: 5rem;
`

export default Studenter;