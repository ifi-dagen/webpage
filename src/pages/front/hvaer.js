import React from 'react'
import styled from 'styled-components'

const HvaER = () => {
  return (
    <Wrapper>
      <Title>Møt bedrifter</Title>
      <Text>
        Vi er den beste arenaen for bedrifter og studenter å komme i kontakt.
        </Text>
    </Wrapper>
  )
}

const Title = styled.div`
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

export default HvaER;