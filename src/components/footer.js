import React from "react";
import styled from "styled-components";


const Footer = () => {
    return (
        <Wrapper />
      
    )
}

/*
const Links = () => {
    return (
        <Navlinks>
            <span />
            <Link href="/for-bedrift" > For bedrifter </Link>
            <Link href="/frivillig" > Bli frivillig</Link>
            <Link href="/kontakt" > Om arrangøren </Link>
            <span />
        </Navlinks>
    )
};

const Navlinks = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto auto 1fr;
    grid-gap: 2rem;
`

const Link = styled.a`
    color: whitesmoke;
    text-decoration: none;
    transition: color 0.25s;

    :hover {
        color: deepskyblue;
    }
`
*/

const Wrapper = styled.section`
    background: linear-gradient(to right, #001446, #002446);
    padding: 5em;
    align-content: center;
    position: relative;
    margin-bottom: 20vwpx
    height: ;
    background-color: red;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
`;

export default Footer;