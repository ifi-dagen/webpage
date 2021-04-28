import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {
    Instagram,
    Webpage,
    Facebook,
    Zoom,
    Linkedin,
} from '../../components/symbols'
import EttermiddagenProgram from '../program/EttermiddagenProgram'

export const BedriftKomponent = ({ bedrift, setSelected }) => {
    //Får fra bedrift kohort

    console.log('BEDRIFT: ', bedrift)
    if (bedrift) {
        return (
            <div
                style={{
                    maxWidth: '850px',
                    minWidth: '640px',
                    margin: 'auto',
                    padding: '0 5rem',
                    height: 'auto',
                    textAlign: 'left',
                }}
            >
                <Container>
                    <h3
                        style={{
                            gridArea: 'info',
                            justifySelf: 'center',
                            padding: '1em',
                        }}
                    >
                        Snakk med oss på Zoom mellom {bedrift.standtime[0]} -{' '}
                        {bedrift.standtime[1]}
                    </h3>
                    <img
                        src={require('../../img/logoer/' + bedrift.logo)}
                        alt={'Logo'}
                        style={{ gridArea: 'Logo' }}
                    ></img>
                    <div
                        style={{
                            gridArea: 'Zoom',
                            justifySelf: 'center',
                            padding: '1em',
                        }}
                    >
                        <Zoom link={bedrift.zoom} text={'Møt oss på Zoom!'} />
                    </div>

                    <h2 style={{ gridArea: 'Title' }}>
                        {bedrift.descriptionTitle}
                    </h2>
                    <p style={{ gridArea: 'Description' }}>
                        {bedrift.description.map((sentence) => {
                            return <p key={sentence}>{sentence}</p>
                        })}
                    </p>
                    {/* <ReactPlayer
                        url={bedrift.video}
                        // width="426px"
                        // height="240px"
                        style={{
                            gridArea: 'Video',
                            justifySelf: 'center',
                            paddingBottom: '2em',
                        }}
                    /> */}

                    <div style={{ gridArea: 'SoMe' }}>
                        <Facebook link={bedrift.facebook} />
                        <Instagram link={bedrift.instagram} />
                        <Linkedin link={bedrift.facebook} />
                        <Webpage link={bedrift.website} />
                    </div>

                    <h2 style={{ gridArea: 'TitleTalk' }}>
                        {bedrift.talkTitle}
                    </h2>

                    <h3
                        onClick={() => {
                            setSelected('program')
                            return <EttermiddagenProgram />
                        }}
                    >
                        Tilbake til programmet...
                    </h3>
                    {/* <p style={{ gridArea: 'Talk' }}>
                        {bedrift.talk.map((sentence) => {
                            return <p key={sentence}>{sentence}</p>
                        })}
                    </p>
                    
                    <p style={{ gridArea: 'Competition' }}>
                        <h3>Konkurranse</h3>
                        <a href={bedrift.competition.link}>
                            {bedrift.competition.text}
                        </a>
                    </p> */}

                    <div style={{ gridArea: 'Questions' }}>
                        <h3>5 raske</h3>
                        {bedrift.answer.map((answer) => {
                            return <p key={answer}>{answer}</p>
                        })}
                    </div>

                    <h3 style={{ gridArea: 'Work' }}>
                        {bedrift.positionTitle}
                    </h3>
                    <div style={{ gridArea: 'Annonse' }}>
                        {bedrift.positions.map((position) => {
                            return (
                                <p>
                                    <a key={position} href={position.link}>
                                        {position.name}
                                    </a>
                                </p>
                            )
                        })}
                    </div>
                </Container>
            </div>
        )
    } else {
        return <>promp</>
    }
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 5% 35% 30%;
    grid-template-rows: auto;
    grid-template-areas:
        'info info info info'
        'Logo Logo Logo SoMe'
        '. Zoom Zoom Zoom'
        '. . Title Title'
        '. . Description Description'
        '. . TitleTalk TitleTalk'
        '. . Talk Talk'
        '. . Work Work'
        '. . Annonse Annonse';

    @media screen and (max-width: 815px) {
        grid-template-columns: 35vw 100vw;
        grid-template-rows: auto auto auto auto 100vh;
        overflow-x: visible;
        grid-template-areas:
            'info info'
            'Logo SoMe'
            '. Zoom '
            'Competition Title '
            'Competition Description'
            'Questions Description'
            '. Description'
            '. Video'
            '. TitleTalk'
            '. Talk'
            '. Work'
            '.  Annonse';
        p {
        }
    }
`
