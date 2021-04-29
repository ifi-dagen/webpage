import React from "react";
import styled from "styled-components";


export const Zoom = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fas fa-video"></Icon> {props.text}
    </Link>
  );
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
