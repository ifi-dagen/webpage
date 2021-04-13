import React from 'react'
import styled from 'styled-components'

const HvaER = () => {
    return (
        <Wrapper>
            <Title>Møt studenter</Title>
            <Text>
                Vi er den beste arenaen for å etablere kontakt mellom studenter
                og bedrifter. Ifi-studenter er dyktige informatikere med
                spesialisering innen enten design, robotikk, språkteknologi,
                digital økonomi & ledelse, sikkerhet eller systemarkitektur.
                Dette er ambisiøse og flinke mennesker på randen til å begynne i
                sin første ordentlige IT-jobb. Bruk muligheten til å huke tak i
                disse unge, tech-gærne folka - klare til å bli formet av
                arbeidslivet.
            </Text>
        </Wrapper>
    )
}

const Title = styled.h2`
    text-align: center;
    color: black;
`

const Wrapper = styled.div`
    padding: 1rem;
    background: none;
    text-align: left;

    background-color: #f5f5f5;

    border-radius: 1rem;

    @media screen and (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
`

const Text = styled.p`
    color: black;
    text-align: left;
    font-weight: 500;
`

export default HvaER
