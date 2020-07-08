import React from "react";
import styled from "styled-components";
import logo from "../img/white_logo.png"


const Header = () => {

  return (
    <div style={{ backgroundColor: "#002446" }}>
      <Wrapper>
        <span />
        <span />
        <Logo src={logo} />
      </Wrapper>
    </div >
  )
};


const Logo = styled.img`
  width: 8rem;
  margin-top: 23px;;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1rem;
  
  padding: 1em;
  background: #002446;
`;


export default Header;
