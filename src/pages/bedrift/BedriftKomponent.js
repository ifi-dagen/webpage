import React from 'react'
import styled from 'styled-components'
import Bedrifter from '../../data/bedrift_info.json'
import { useHistory } from 'react-router-dom'
import {
    Instagram,
    Webpage,
    Facebook,
    Zoom,
    Linkedin,
} from '../../components/symbols'

export const BedriftKomponent = ({ setSelected, match }) => {
    //Får fra bedrift kohort
    const history = useHistory()
    let bedrift = match.url.split('bedrift/')[1]
    bedrift = Bedrifter.find((b) => b.name === bedrift)
    window.scrollTo(0, 0);

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
                    <GoBack style={{ gridArea: 'button' }}>
                        <h3
                            onClick={() => {
                                history.goBack()
                            }}
                        >
                            Tilbake til programmet...
                        </h3>
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
                        <Zoom link={bedrift.zoom} text={'Møt oss på Zoom!'} />
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
                            gridArea: 'codeMenti',
                            padding: '1em',
                        }}
                        href={'https://www.menti.com/'}
                    >
                        Noe du lurer på? Bruk koden {bedrift.mentiKode}
                    </a>

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

                    <div style={{ gridArea: 'Talk' }}>
                        {bedrift.talk.map((sentence) => {
                            return <p key={sentence}>{sentence}</p>
                        })}
                    </div>

                    {/* <p style={{ gridArea: 'Competition' }}>
                        <h3>Konkurranse</h3>
                        <a href={bedrift.competition.link}>
                            {bedrift.competition.text}
                        </a>
                    </p>  */}

                    {/* <div style={{ gridArea: 'Questions' }}>
                        <h3>5 raske</h3>
                        {bedrift.answer.map((answer) => {
                            return <p key={answer}>{answer}</p>
                        })}
                    </div> */}

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
    border: solid;
    h3 {
        :hover {
            cursor: pointer;
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
        'liveMenti . . .'
        'codeMenti . . .'
        '. . Title Title'
        '. . Description Description'
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
