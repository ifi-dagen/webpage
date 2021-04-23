import React from 'react'
import styled from 'styled-components'
import foredrag_info from '../../data/foredrag_info'
import EttermiddagenProgram from '../program/EttermiddagenProgram'
const Foredrag = ({ id, setSelected }) => {
    const foredrag = foredrag_info[id]
    return (
        /*
        TODO:
        * Feed info through props
        * Link time to time view for program
        * Need time/date/ID state from program to determine which  lecture to load
        */

        <Wrapper>
            <Title>
                <h1>{foredrag.title}</h1>
            </Title>
            {/* exaple link back to program for the selected time */}
            <Time
                onClick={() => {
                    setSelected('program')
                    return <EttermiddagenProgram />
                }}
            >
                {foredrag.startTime} - {foredrag.endTime}
            </Time>
            <SpeakerInfo
                companyName={foredrag.companyName}
                speakerName={foredrag.speaker}
            />
            <About>
                <h3>Om foredraget</h3> {foredrag.about}
                <RerouteToLink
                    location={foredrag.link}
                    text={'Se foredraget her!'}
                />
            </About>
        </Wrapper>
    )
}

const SpeakerInfo = ({ companyName, speakerName }) => {
    return (
        <CompanyContainer>
            <CompanyName>
                {' '}
                <RerouteToLink
                    location={`https://${companyName}.no`}
                    text={companyName}
                />
            </CompanyName>
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

const RerouteToLink = ({ location, text }) => {
    return (
        <Place>
            <a href={location}>{text}</a>
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
    grid-template-areas: 'companyName companylogo speakerinfo .';
    max-height: 6vw;
`
const CompanyLogo = styled.div`
    padding-top: 1em;
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
        cursor: pointer;
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
    padding-top: 1em;
`

const Wrapper = styled.div`
    margin: auto;
    width: 70%;
`
/*
const Border = styled.div`
    border: 2px;
    border-style: solid;
    border-color: deepskyblue;
    padding: 1em;
    border-radius: 8px;
`
*/

export default Foredrag
