import React from "react";
import styled from "styled-components";


const Footer = () => {
    return (
        <Wrapper>
            <Instagram />
            <Facebook />
            <Credit>Følg oss på Facebook & Instagram</Credit>
        </Wrapper >
    )
}

const Instagram = () => {
    return (
        <Link href="https://www.instagram.com/dagenatifi/">
            <Icon className="fab fa-instagram"></Icon>
        </Link>
    )
}

const Facebook = () => {
    return (
        <Link href="https://www.facebook.com/dagenatifi">
            <Icon className="fab fa-facebook"></Icon>
        </Link>
    )
}

const Link = styled.a`
  align-items: center;
  padding: 1em;
`;

const Icon = styled.i`
  font-size: 3rem;
  color: black;
  transition: color 0.25s;

  ${Link}:hover & {
    color: deepskyblue;
  }
`;

const Credit = styled.div`
    font-size: 11px;
    align-content: center;
    margin: 3em;
    color: #000;
`;

const Wrapper = styled.section`
  background: papayawhip;
  padding: 4em;
`;


export default Footer;