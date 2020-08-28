import React from "react";
import styled from "styled-components";
import logo from "../img/white_logo.png"


const Footer = () => {
    return (

        <Wrapper>
            <Logo src={logo} />
            <Links />
        </Wrapper >
    )
}


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

const Logo = styled.img`
    width: 9rem;
    text-align:center;
    padding: 1em;
`

const Wrapper = styled.section`
    background: linear-gradient(to right, #001446, #002446);
    padding: 2em;
    align-content: center;
`;

export default Footer;