import React from "react";
import styled from "styled-components";

const Foredrag = (props) => {
    return (
        <Wrapper>
            <Title>
                <h1>Artificial Big Data Science Blockchain </h1>
            </Title>
            <Time>
                <h3>13:00 - 14:00</h3>
            </Time>
            <About>
                <p>
                    {" "}
                    Heisann sweisann Heisann sweisann Heisann sweisann Heisann
                    sweisann Heisann sweisann Heisann sweisann Heisann sweisann
                    Heisann sweisann Heisann sweisann Heisann sweisann Heisann
                    sweisann Heisann sweisann Heisann sweisann Heisann sweisann
                    Heisann sweisann Heisann sweisann Heisann sweisann Heisann
                    sweisann Heisann sweisann Heisann sweisann Heisann sweisann
                    Heisann sweisannHeisann sweisann Heisann sweisann Heisann
                    sweisann Heisann sweisann Heisann sweisann Heisann sweisann
                    Heisann sweisann Heisann sweisann Heisann sweisann Heisann
                    sweisann Heisann sweisann Heisann sweisann Heisann sweisann
                    Heisann sweisann Heisann sweisann Heisann sweisann Heisann
                    sweisann Heisann sweisann Heisann sweisann Heisann sweisann
                    Heisann sweisann Heisann sweisann Heisann sweisann Heisann
                    sweisann Heisann sweisann Heisann sweisann Heisann sweisann
                </p>
            </About>
        </Wrapper>
    );

    {
        /* //     <Time>{props.time}</Time>;<Company>{props.company}</Company>;
    //     <Title>{props.title}</Title>;<About>{props.about}</About>;
    //     <Place>{props.place}</Place>;<Speaker>{props.speaker}</Speaker>; */
    }
};

const Time = styled.div`
    h3 {
        border: 2px;
        border-style: solid;
        border-color: deepskyblue;
        padding: 1em;
        width: 14%;
        font-weight: bold;
        border-radius: 4px;
    }
`;

const Company = styled.div``;

const Title = styled.div`
    h1 {
        color: black;
        line-height: 1;
    }
`;

const About = styled.div`
    p {
        border: 2px;
        border-style: solid;
        border-color: deepskyblue;
        padding: 1em;
    }
`;

const Place = styled.div``;

const Speaker = styled.div``;

const Wrapper = styled.div`
    padding: 0rem 5rem;
    margin: auto;
    width: 70%;
    line-height: 1.5;
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
