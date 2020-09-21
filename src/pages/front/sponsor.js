import React from 'react'
import styled from 'styled-components'
import bekklogo from "../../img/logoer/Bekk.png"
import kantegalogo from "../../img/logoer/Kantega.png"
import ffilogo from "../../img/logoer/Ffi.png"
import fremtindlogo from "../../img/logoer/fremtind.png"

const Sponsor = () => {
    return (
        <div>
            <h2>SPONSORER</h2>
            <Sponsorer />
        </div>
    )
}

const Sponsorer = () => {
    return (
        <NavContainer>
            <img src={bekklogo} alt="Bekk logo" />
            <img src={kantegalogo} alt="Kantega logo" />
            <img src={ffilogo} alt="FFI logo" />
            <img src={fremtindlogo} alt="Fremtind logo" />
        </NavContainer >
    )
}




const NavContainer = styled.div`
margin: 0 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
  grid-row: 1;
  grid-gap: .5rem;
    
    img {
        max-width: 8rem;
        margin: auto;
        padding: 0.5em;
        align-content: center;
        display: block;
    }
  `

export default Sponsor;