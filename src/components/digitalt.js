import React from 'react'
import styled from 'styled-components'

const Digitalt = () => {
  return (
    <Wrapper>
      <Title>Digitalt i 2021 også</Title>
      <Text>
        Vi gleder oss til å arrangere digital ettermiddagen@ifi dette vårsemesteret.
        Det er vanskelig å si om høstsemesterets dagen@ifi blir heldigital eller en kombinasjon av noe digitalt og fysisk,
        men vi er optimistiske og skal gjøre vårt beste ut fra situasjonen.
        Det kommer snart en oversikt over alle bedrifter som deltar på ettermiddagen. Vi har bestemt oss for å minske antallet bedrifter som 
        deltar på årets Ettermiddag, slik at de bedriftene som deltar får bedre eksponering og studentene mer tid hos hver enkelt.
        
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