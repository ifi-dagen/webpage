import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BedriftKohort from '../bedrift/BedriftKohort'
import { BedriftKomponent } from '../bedrift/BedriftKomponent'
import Faglig from '../foredrag/Faglig'
import Foredrag from '../foredrag/foredrag'
import OpenProgram from './OpenProgram'
import End from './End'
import './program.css'
import { Link } from 'react-router-dom'
import Countdown from '../../components/countdown'

import Confetti from 'react-confetti'


const Program = () => {
    const [company, setCompany] = useState(null)
    const [talk, setTalk] = useState(null)
    const [selected, setSelected] = useState('program')
    const [confetti, setConfetti] = useState(null)

    
    useEffect(() => {
        const toggleConfetti = () => {
            if (confetti === null) {
                setConfetti(
                    <Confetti
                        width={'2000'}
                        height={'3300'}
                        numberOfPieces={'100'}
                        recycle={false}
                        run={true}
                    />
                )
            } else {
                setConfetti(null)
            }
        }

        const interval = setInterval(() => {
            toggleConfetti()
        }, 20000)
        return () => clearInterval(interval)
    }, [confetti])

    if (selected === 'program') {
        return (
            <Container>
                <Confetti
                    width={'2000'}
                    height={'2000'}
                    numberOfPieces={'100'}
                    recycle={false}
                    run={true}
                />
                <Countdown
                    style={{
                        display: 'flex',
                        gridArea: 'countdown',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
                <Title
                    style={{
                        gridArea: 'Title',
                        justifySelf: 'center',
                        textAlign: 'center',
                        color: 'black',
                    }}
                >
                    Velkommen til digital ettermiddagen@ifi
                </Title>
                <h2
                    style={{
                        gridArea: 'h2',
                        justifySelf: 'center',
                        textAlign: 'center',
                    }}
                >
                    Vi håper du tar turen innom og prater litt med de ulike
                    bedriftene i standområdet, de gleder seg til å møte deg!
                    Parallellt med det digitale standområdet kjøres det ulike
                    foredrag, og vi håper du finner noe som er interessant og
                    relevant for deg. Vi har flere konkurranser gående iløpet av
                    dagen, og flere av bedriftene har egne konkurranser iløpet
                    av standtiden sin, så utnytt sjansen til å mingle med litt
                    bedrifter over en lav sko i dag.{' '}
                </h2>
                <h2 style={{ gridArea: 'h3', justifySelf: 'center' }}>
                    Vi i dagen-styret ønsker deg en flott ettermiddag!
                </h2>
                <br />

                {confetti}
                <Split style={{ gridArea: 'split' }} />
                <Time style={{ gridArea: 'time' }}>
                    <div style={{ paddingTop: '2.3em' }}>12:00</div>
                </Time>

                <Open style={{ gridArea: 'open' }}>
                    <Link
                        to={{ pathname: '/åpningsshow' }}
                        style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontStyle: 'italic',
                        }}
                    >
                        <Tag>Konkurranse 12:00-13:00</Tag>
                        <h1 onClick={() => setSelected('åpningssermoni')}>
                            Åpningsshow med Gyda, Eivind og Maja
                        </h1>
                    </Link>
                </Open>
                <Split style={{ gridArea: 'split1' }} />
                <Time style={{ gridArea: 'time1' }}>
                    <div style={{ paddingTop: '2.3em' }}>13:00</div>
                </Time>

                <BedriftKohort
                    comp1="Accenture"
                    comp2="Nav"
                    comp3="Fink"
                    setSelected={setSelected}
                    company={company}
                    setCompany={setCompany}
                    kohort={1}
                />

                <Split style={{ gridArea: 'split2' }} />
                <Time style={{ gridArea: 'time2' }}>
                    <div style={{ paddingTop: '2.3em' }}>14:00</div>
                </Time>

                <BedriftKohort
                    style={{ gridArea: 'kohort2' }}
                    comp1="Oda"
                    comp2="Netcompany"
                    comp3="NoA Ignite"
                    setSelected={setSelected}
                    company={company}
                    setCompany={setCompany}
                    kohort={2}
                />
                <Split style={{ gridArea: 'split3' }} />
                <Time style={{ gridArea: 'time3' }}>
                    <div style={{ paddingTop: '2.3em' }}>15:00</div>
                </Time>
                <BedriftKohort
                    style={{ gridArea: 'kohort3' }}
                    comp1="Bekk"
                    comp2="Cognite"
                    setSelected={setSelected}
                    company={company}
                    setCompany={setCompany}
                    kohort={3}
                />
                <Faglig setSelected={setSelected} setTalk={setTalk} />
                <Split style={{ gridArea: 'split4' }} />
                <Time style={{ gridArea: 'time4' }}>
                    <div style={{ paddingTop: '2.3em' }}>16:00</div>
                </Time>
                <Open
                    style={{
                        gridArea: 'end',
                    }}
                >
                    <Link
                        to={{ pathname: '/quiz' }}
                        style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontStyle: 'italic',
                        }}
                    >
                        <Tag>Konkurranse 16:00-16:30</Tag>
                        <h1 onClick={() => setSelected('avslutning')}>
                            Kahoot!
                        </h1>
                    </Link>
                </Open>
                <Time style={{ gridArea: 'time5', marginBot: '1em' }}>
                    <div style={{ paddingTop: '2.3em' }}>Takk for i dag</div>
                </Time>
            </Container>
        )
    } else if (selected === 'bedrift') {
        console.log(selected)
        return <BedriftKomponent bedrift={company} setSelected={setSelected} />
    } else if (selected === 'faglig') {
        console.log(selected)
        return <Foredrag id={talk} setSelected={setSelected} />
    } else if (selected === 'åpningssermoni') {
        console.log(selected)
        return <OpenProgram setSelected={setSelected} />
    } else if (selected === 'avslutning') {
        console.log(selected)
        return <End setSelected={setSelected} />
    }
}

const Container = styled.div`
    display: grid;
    overflow-y: visible;
    max-width: 850px;
    min-width: 640px;
    margin: 0 auto;
    height: auto;
    grid-template-columns: 25vw 2vw 25vw;
    grid-template-rows: 10vh 20vh 27vh 10vh 9vh 47vh 9vh 47vh 9vh 47vh 9vh 47vh 9vh 47vh 9vh;
    grid-template-areas:
        'countdown countdown countdown'
        'Title Title Title'
        'h2 h2 h2'
        'h3 h3 h3'
        '. time .'
        '. split open'
        ' . time1 . '
        ' kohort1 split1 foredrag1 '
        ' . time2 . '
        ' kohort2 split2 foredrag2 '
        ' . time3 .  '
        ' kohort3 split3 foredrag3 '
        ' . time4 .'
        ' . split4 end '
        ' . time5 .';
    justify-items: center;

    @media screen and (max-width: 815px) {
        grid-template-columns: 100vw;
        grid-template-columns: 35vw 35vw;
        grid-template-rows: 10vh 20vh 33vh 10vh 9vh 30vh 9vh 30vh 60vh 9vh 30vh 60vh 9vh 30vh 60vh 9vh 35vh 9vh;
        grid-template-areas:
            'countdown countdown'
            'Title Title'
            'h2 h2'
            'h3 h3'
            ' time . '
            ' split open'
            ' time1 . '
            ' split1 foredrag1'
            ' split1 kohort1 '
            'time2 .'
            'split2 foredrag2'
            'split2 kohort2'
            'time3 .'
            'split3 foredrag3'
            'split3 kohort3'
            'time4 .'
            'split4 end'
            'time5 .';
        h1,
        h2,
        h3 {
            font-size: 1rem;
            text-align: center;
            justify-self: center;
        }
        margin: 2.2em;

        img {
            display: block;
            max-width: 150px;
            max-height: 45px;
            width: auto;
            height: auto;
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            padding: 1em;
        }
        justify-items: center;
    }
`

const Title = styled.div`
    font-size: 3em;
    font-weight: bold;
    @media screen and (max-width: 815px) {
        font-size: 2em;
    }
`

const Split = styled.div`
    grid-area: split;
    border: 6px peachpuff;
    border-left: solid;
    border-right: solid;
    margin-top: -1em;
`

const Time = styled.div`
    background-color: #ff6b6b;
    height: 90px;
    text-align: center;
    color: white;
    font: 1em;
    vertical-align: middle;
    width: 90px;
    border-radius: 50%;
    text-align: bottom;
`

const Open = styled.div`
    background-color: #edf6f9;
    height: auto;
    width: 20vw;
    margin: 0.5em;

    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;

    :hover {
        opacity: 1;
        transition: 0.5s ease;
        background-color: #b7e4c7;
        cursor: pointer;
    }
    padding: 1em;

    @media screen and (max-width: 815px) {
        grid-template-columns: 90vw;
        grid-template-rows: 80vh;
        margin-top: 1rem;
        width: 50vw;
        margin: 1em;
        height: auto;

        p {
            font-size: 1rem;
        }

        justify-items: start;
    }
`

const Tag = styled.div`
    font-size: 1.2rem;
    border-radius: 25px;
    background-color: #cdb4db;
    text-align: center;
    color: snow;
    width: 15vw;
    margin: 0.5em;
    @media screen and (max-width: 815px) {
        width: 55vw;
        font-size: 1.1rem;
        justify-self: center;
    }
`

export default Program
