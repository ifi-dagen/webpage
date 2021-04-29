import React from "react";
import styled from "styled-components";

export const Zoom = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fas fa-video"></Icon> {props.text}
    </Link>
  );
};


export const YellowZoom = (props) => {
  return(
    <Yellowbutton href={props.link}>
      <i className="fas fa-play-circle"/>
      {props.text}
    </Yellowbutton>
  )
};

export const Greenpurplezoom = (props) => {
  return(
    <Greenpurplebutton href={props.link}>
      <i className="fas fa-play-circle"/>
      {props.text}
    </Greenpurplebutton>
  )
};

export const Bluegreenzoom = (props) => {
  return(
    <Bluegreenbutton href={props.link}>
      <i className="fas fa-play-circle"/>
      {props.text}
    </Bluegreenbutton>
  )
};

export const Bluepurplezoom = (props) => {
  return(
    <Bluepurplebutton href={props.link}>
      <i className="fas fa-play-circle"/>
      {props.text}
    </Bluepurplebutton>
  )
};

export const Facebook = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fab fa-facebook"></Icon>
    </Link>
  );
};

export const Linkedin = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fab fa-linkedin"></Icon>
    </Link>
  );
};

export const Instagram = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fab fa-instagram"></Icon>
    </Link>
  );
};

export const Webpage = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fas fa-desktop"></Icon>
    </Link>
  );
};

const Link = styled.a`
  align-items: flex-start;
  padding: 1em;
`;

const Icon = styled.i`
  font-size: 2rem;
  color: black;
  transition: color 0.25s;

  ${Link}:hover & {
    color: #ff6b6b;
    cursor: pointer;
  }
`;


const Yellowbutton = styled.a`
font-size: 2rem;
text-transform: uppercase;
font-weight: 900;
border-radius: 3.5rem / 100%;
padding: 1.25rem 2rem;
  background-color: #FEE140;
  color: #FA709A;
  transition:  all 330ms;

  &:hover {
    background-color: #FA709A;
  color: #FEE140;
    
    transition: all 330ms * 1.5 ease-out;
  }
`

const Bluepurplebutton = styled.a`
font-size: 2rem;
text-transform: uppercase;
font-weight: 900;
border-radius: 3.5rem / 100%;
padding: 1.25rem 2rem;
  background-color: #21D4FD;
  color: #B721FF;
  transition:  all 330ms;

  &:hover {
    background-color: #B721FF;
  color: #21D4FD;
    
    transition: all 330ms * 1.5 ease-out;
  }
`


const Bluegreenbutton = styled.a`
font-size: 2rem;
text-transform: uppercase;
font-weight: 900;
border-radius: 3.5rem / 100%;
padding: 1.25rem 2rem;
  background-color: #08AEEA;
  color: #2AF598;
  transition:  all 330ms;

  &:hover {
    background-color: #2AF598;
  color: #08AEEA;
    
    transition: all 330ms * 1.5 ease-out;
  }
`

const Greenpurplebutton = styled.a`
font-size: 2rem;
text-transform: uppercase;
font-weight: 900;
border-radius: 3.5rem / 100%;
padding: 1.25rem 2rem;
  background-color: #3EECAC;
  color: #EE74E1;
  transition:  all 330ms;

  &:hover {
    background-color: #EE74E1;
  color: #3EECAC;
    
    transition: all 330ms * 1.5 ease-out;
  }
`