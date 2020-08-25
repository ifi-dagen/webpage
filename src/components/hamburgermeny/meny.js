import React from 'react'
import { bool } from 'prop-types';
import styled from 'styled-components'

const Meny = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} {...props}>
      <a href="/" tabIndex={tabIndex}> Hjem </a>
      <a href="/for-bedrift" tabIndex={tabIndex}> For bedrifter </a>
      <a href="/frivillig" tabIndex={tabIndex}> Bli frivillig</a>
      <a href="/kontakt" tabIndex={tabIndex}> Om arrangøren </a>
    </StyledMenu>
  )

}

Meny.propTypes = {
  open: bool.isRequired,
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightsteelblue;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: 576px) {
    width: 100%;
  }


  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: whitesmoke;
    }

    &:focus {
        outline: thin dotted;
    }
    }
`

export default Meny;
