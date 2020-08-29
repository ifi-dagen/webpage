import React from 'react'
import styled from 'styled-components'

const Digitalt = () => {
  return (
    <Wrapper>
      <Title>Digitalt i 2020</Title>
      <Text>
        Bedriftsdagen i år blir heldigital og skjer over 2 dager.
        Det kommer snart en oversikt over alle bedrifter som deltar.
        Hver bedrift vil ha sitt eget zoom rom som deres digitale stand,
        hvor de stiller med eget opplegg, konkurranser og stillingsannonser.
        Som vanlig vil det være faglige foredrag gjennom hele bedriftsdagen.
        Vi planlegger også for to fysiske kveldsarrangementer,
        hvor det vil bli noe mulighet for å mingle med bedrifter.
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

  background-color: #F5F5F5;

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

export default Digitalt;