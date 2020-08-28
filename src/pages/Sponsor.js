import React from 'react';
import styled from 'styled-components'
import '../App.css';

const Sponsor = () => {
  return (
    <Wrapper>
      <h2 className="svart_overskrift blue"><br />ÅRETS HOVEDSPONSOR 2020</h2>
      <Logo src={require("../img/dnb_sjogronn.png")} alt="DnB logo" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 3rem;
`

const Logo = styled.img`
  width: 20rem;
  margin: 2em;
  align-content: center;
`

export default Sponsor;