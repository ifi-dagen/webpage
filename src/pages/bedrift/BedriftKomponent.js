import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bedrifter from '../../data/bedrift_info.json'
import { useHistory } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {
    Instagram,
    Webpage,
    Facebook,
    Linkedin,
    Bluepurplezoom,
} from '../../components/symbols'
import dayjs from 'dayjs'

export const BedriftKomponent = ({ match }) => {
    const [zoom, setZoom] = useState(null)
    let now = `${dayjs().hour()}:${dayjs().minute()}`
    const [video, setVideo] = useState(null)

    //Får fra bedrift kohort
    const history = useHistory()
    let bedrift = match.url.split('bedrift/')[1]
    bedrift = Bedrifter.find((b) => b.name === bedrift)
    window.scrollTo(0, 0)

    useEffect(() => {
        if (bedrift.standtime[0].split(':')[0] === now.split(':')[0]) {
            console.log('DENNE SKAL HA ZOOM')
            setZoom(
                <Bluepurplezoom link={bedrift.zoom} text={'Møt oss på Zoom!'} />
            )
        }

        return () => {}
    }, [bedrift, now])

    useEffect(() => {
        if (bedrift.video !== '') {
            setVideo(
                <ReactPlayer
                    playing
                    url={require('../../img/video/' + bedrift.video)}
                    style={{
                        gridArea: 'Video',
                        justifySelf: 'center',
                        paddingBottom: '2em',
                    }}
                />
            )
        }

        return () => {}
    }, [bedrift])

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
                    <GoBack>
                        <i
                            className="fas fa-arrow-left"
                            onClick={() => {
                                history.goBack()
                            }}
                        >
                            <p>
                                <br></br>Program
                            </p>
                        </i>
                    </GoBack>
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
                        {zoom}
                    </div>
                    <a
                        style={{
                            gridArea: 'liveMenti',
                            padding: '1em',
                        }}
                        href={bedrift.mentiLive}
                    >
                        Se innsendte spørsmål her!
                    </a>
                    <a
                        style={{
                            gridArea: 'rekrutterer',
                            padding: '1em',
                        }}
                        href={bedrift.rekruttlink}
                    >
                        {bedrift.rekruttekst}
                    </a>

                    <a
                        style={{
                            gridArea: 'codeMenti',
                            padding: '1em',
                        }}
                        href={'https://www.menti.com/'}
                    >
                        Still oss spørsmål på Mentimeter! Bruk koden{' '}
                        {bedrift.mentiKode}
                    </a>

                    <h2 style={{ gridArea: 'Title' }}>
                        {bedrift.descriptionTitle}
                    </h2>
                    <p style={{ gridArea: 'Description' }}>
                        {bedrift.description.map((sentence) => {
                            return <p key={sentence}>{sentence}</p>
                        })}
                    </p>
                    {video}

                    <div style={{ gridArea: 'SoMe' }}>
                        <Facebook link={bedrift.facebook} />
                        <Instagram link={bedrift.instagram} />
                        <Linkedin link={bedrift.linkedin} />
                        <Webpage link={bedrift.website} />
                    </div>

                    <h2 style={{ gridArea: 'TitleTalk' }}>
                        {bedrift.talkTitle}
                    </h2>

                    <div style={{ gridArea: 'Talk' }}>
                        {bedrift.talk.map((sentence) => {
                            return <p key={sentence}>{sentence}</p>
                        })}
                    </div>

                    <h3 style={{ gridArea: 'Work' }}>
                        {bedrift.positionTitle}
                    </h3>
                    <div style={{ gridArea: 'Annonse' }}>
                        {bedrift.positions.map((position) => {
                            return (
                                <a key={position} href={position.link}>
                                    {position.name}
                                </a>
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

const GoBack = styled.div`
    grid-area: 'button';

    i {
        margin: 0;
        font-size: 30px;
        :hover {
            cursor: pointer;
        }
        p {
            margin-block-start: 0;
            font-size: 15px;
            font-family: 'Courier New', Courier, monospace;
        }
    }
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 5% 35% 30%;
    grid-template-rows: auto;
    grid-template-areas:
        'button . . .'
        'info info info info'
        'Logo Logo Logo SoMe'
        '. Zoom Zoom Zoom'
        'liveMenti . Title Title'
        'codeMenti . Description Description'
        'rekrutterer . Description Description '
        '. Video Video Video'
        '. . TitleTalk TitleTalk'
        '. . Talk Talk'
        '. . Work Work'
        '. . Annonse Annonse';

    img {
        max-width: 400px;
        max-height: 300px;
        padding: 1em;
    }

    @media screen and (max-width: 815px) {
        grid-template-columns: 90vw;
        grid-template-rows: auto;
        padding: 1em;
        margin-top: 1em;
        overflow-x: visible;
        grid-template-areas:
            'button'
            'info'
            'Logo '
            'SoMe'
            'Zoom '
            'liveMenti'
            'codeMenti'
            'Title'
            'Description'
            'TitleTalk'
            'Talk'
            'Work'
            'Annonse';

        p {
            font-size: 1rem;
        }

        img {
            max-width: 200px;
            max-height: 90px;
            padding: 1em;
        }
        justify-items: center;
    }
`
