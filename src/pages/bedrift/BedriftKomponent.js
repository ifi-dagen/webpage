import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Bedrift from './bedrift_info.json'
import {
    Instagram,
    Webpage,
    Facebook,
    Zoom,
    Linkedin,
} from '../../components/symbols'
import { useState } from 'react'

export const BedriftKomponent = ({ bedrift }) => {
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

                    <h2 style={{ gridArea: 'Title' }}>Hvem er vi?</h2>
                    <p style={{ gridArea: 'Description' }}>
                        {bedrift.description}
                    </p>
                    <ReactPlayer
                        url={bedrift.video}
                        // width="426px"
                        // height="240px"
                        style={{
                            gridArea: 'Video',
                            justifySelf: 'center',
                            paddingBottom: '2em',
                        }}
                    />

                    <div style={{ gridArea: 'SoMe' }}>
                        <Facebook link={bedrift.facebook} />
                        <Instagram link={bedrift.instagram} />
                        <Linkedin link={bedrift.facebook} />
                        <Webpage link={bedrift.website} />
                    </div>

                    <h2 style={{ gridArea: 'TitleTalk' }}>
                        Vi vil snakke med deg!
                    </h2>
                    <p style={{ gridArea: 'Talk' }}>{bedrift.talk}</p>

                    <p style={{ gridArea: 'Competition' }}>
                        <h3>Konkurranse</h3>
                        <a href={bedrift.competition.link}>
                            {bedrift.competition.text}
                        </a>
                    </p>

                    <div style={{ gridArea: 'Questions' }}>
                        <h3>5 raske</h3>
                        {bedrift.answer.map((answer) => {
                            return <p key={answer}>{answer}</p>
                        })}
                    </div>

                    <h3 style={{ gridArea: 'Work' }}>
                        Våre spennende stillingsannonser
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
        'Competition . Title .'
        '. . Description Description'
        'Questions . Description Description'
        '. . Description Description'
        '. . Video Video'
        '. . TitleTalk TitleTalk'
        '. . Talk Talk'
        '. . Work Work'
        '. . Annonse Annonse';
`
