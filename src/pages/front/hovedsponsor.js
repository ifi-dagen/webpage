import React from 'react';
import styled from 'styled-components'
import '../../App.css';
import logo from "../../img/dnb_sjogronn.png"

const Hovedsponsor = () => {
  return (
    <Wrapper>
      <h2>HOVEDSPONSOR</h2>
      <p>2020</p>
      <Logo src={logo} alt="DnB logo" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  padding: 3rem;

  h2 {
    margin: 0;
  }
  p {
    font-weight: bold;
    font-size: 1rem;
  }
`

const Logo = styled.img`
  max-width: 20rem;
  margin: 2em;
  align-content: center;
`

export default Hovedsponsor;