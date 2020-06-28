import React, { useState } from "react";
import styled from "styled-components";
import logo from "./img/white_logo.png"


const Header = () => {
  const [showMenu] = useState(false);


  return (
    <Wrapper>
      <Hamburger />
      <span />
      <Logo src={logo} />
    </Wrapper>
  )
};

const Hamburger = () => {
  return (
    <Icon className="fas fa-bars"></Icon>
  )
}

const Logo = styled.img`
  width: 8rem;
  margin-top: 10px;
`

const Icon = styled.i`
  font-size: 2rem;
  color: #FCFAF1;
  transition: color 0.25s;
  margin-top: 10px;
  cursor: pointer;

`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1rem;
  
  padding: 1em;
  background: #002446;
`;


export default Header;