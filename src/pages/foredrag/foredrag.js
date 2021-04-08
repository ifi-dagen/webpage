import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import '../kontakt/kontakt.css'

const Foredrag = (props) => {
    const history = useHistory()

    return (
        /*
        TODO:
        * Make skelton for design 
        * Create company group grid
        * Feed info through props
        * Link time to time view for program
        * 
        */

        <Wrapper>
            <Title>
                <h1>
                    Artificial Intelligence using Big Data Machine Learning
                    Blockchain Technology{' '}
                </h1>
            </Title>

            <Time onClick={() => history.push('/program#3')}>
                {props.startTime} - {props.endTime}
            </Time>
            <SpeakerInfo companyName={props.companyName} />
            <About>
                <h3>Om foredraget</h3> Artificial Intelligence using Big Data
                Machine Learning Blockchain Technology Artificial Intelligence
                using Big Data Machine Learning Blockchain Technology Artificial
                Intelligence using Big Data Machine Learning Blockchain
                Technology Artificial Intelligence using Big Data Machine
                Learning Blockchain Technology Artificial Intelligence using Big
                Data Machine Learning Blockchain Technology Artificial
                Intelligence using Big Data Machine Learning Blockchain
                Technology Artificial Intelligence using Big Data Machine
                Learning Blockchain Technology Artificial Intelligence using Big
                Data Machine Learning Blockchain Technology Artificial
                Intelligence using Big Data Machine Learning Blockchain
                Technology Artificial Intelligence using Big Data Machine
                Learning Blockchain Technology Artificial Intelligence using Big
                Data Machine Learning Blockchain Technology Artificial
                Intelligence using Big Data Machine Learning Blockchain
                Technology Artificial Intelligence using Big Data Machine
                Learning Blockchain Technology Artificial Intelligence using Big
                Data Machine Learning Blockchain Technology Artificial
                Intelligence using Big Data Machine Learning Blockchain
                Technology Artificial Intelligence using Big Data Machine
                Learning Blockchain Technology{' '}
            </About>
            <RerouteToLink
                location={
                    'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
                }
            />
        </Wrapper>
    )

    {
        /* //     <Time>{props.time}</Time>;<Company>{props.company}</Company>;
    //     <Title>{props.title}</Title>;<About>{props.about}</About>;
    //     <Place>{props.place}</Place>;<Speaker>{props.speaker}</Speaker>; */
    }
}

const SpeakerInfo = ({ companyName, speakerName }) => {
    companyName = 'Netcompany'
    return (
        <CompanyContainer>
            <CompanyName>{companyName}</CompanyName>
            <CompanyLogo>
                {' '}
                <img
                    src={require(`./logo/${companyName}_logo.png`)}
                    alt={`Bilde av ${companyName} sin logo`}
                ></img>
            </CompanyLogo>
            <Speaker>
                <img
                    src={require(`./speaker/${companyName}_speaker.png`)}
                    alt={`Bilde av ${speakerName}`}
                ></img>
                <br></br>
                {speakerName}
            </Speaker>
        </CompanyContainer>
    )
}

const RerouteToLink = ({ location }) => {
    return (
        <Place>
            <a target="_blank" href={location}>
                Se foredraget her!
            </a>
        </Place>
    )
}

const Title = styled.div`
    h1 {
        color: black;
        line-height: 1;
    }
`

const CompanyContainer = styled.div`
    display: grid;
    grid-template-areas: 'companyName companylogo speakerinfo xxx 
    ';
`
const CompanyLogo = styled.div`
    max-width: 20vw;
`
const Speaker = styled.div`
    color: deepskyblue;
    grid-area: speakerinfo;
    img {
        max-width: 8vw;
        max-height: 8vw;
    }
    justify-items: center;
    text-align: center;
`
const CompanyName = styled.div`
    font-size: 1.17em;
    padding-left: 1em;
    width: 50%;
    font-weight: bold;
    color: black;
    grid-area: companyName;
`
const Time = styled.div`
    font-size: 1.17em;
    width: 14%;
    font-weight: bold;
    &:hover {
        color: deepskyblue;
    }
    padding-left: 1em;
`

const About = styled.div`
    padding: 0 1em 1em 1em;
    line-height: 1.5;
    h3 {
        color: grey;
    }
`

const Place = styled.div`
    a {
        color: black;
        font-size: 20px;
        line-height: 1;
        text-decoration: none;
    }
    a:hover {
        color: deepskyblue;
    }
    padding: 1em;
`

const Wrapper = styled.div`
    display: grid;
    grid-template columns: 1fr 2em 2em auto;
    padding: 1em;
    margin: auto;
    width: 70%;
`

const Border = styled.div`
    border: 2px;
    border-style: solid;
    border-color: deepskyblue;
    padding: 1em;
    border-radius: 8px;
`

export default Foredrag
