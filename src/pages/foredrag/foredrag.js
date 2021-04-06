import React from "react";
import styled from "styled-components";

const Foredrag = (props) => {
    return <h1>Heisann sweisann</h1>;
    // <Wrapper>
    //     <Time>{props.time}</Time>;<Company>{props.company}</Company>;
    //     <Title>{props.title}</Title>;<About>{props.about}</About>;
    //     <Place>{props.place}</Place>;<Speaker>{props.speaker}</Speaker>;
    // </Wrapper>;
};

const Time = styled.div``;

const Company = styled.div``;

const Title = styled.div``;

const About = styled.div``;

const Place = styled.div``;

const Speaker = styled.div``;

const Wrapper = styled.div`
    padding: 0rem 5rem;
    margin: auto;
    max-width: 0.5;
    line-height: 1.5;

    h1 {
        color: black;
        line-height: 1;
    }
    h2 {
        font-weight: normal;
        font-size: 20px;
    }
`;

const Point = styled.p`
    color: deepskyblue;
    font-size: 20px;
    line-height: 1;
`;

const Footer = styled.div`
    padding: 5rem;
`;

export default Foredrag;
