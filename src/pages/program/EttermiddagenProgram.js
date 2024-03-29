import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BedriftKohort from '../bedrift/BedriftKohort'
import Faglig from '../foredrag/Faglig'
import './program.css'
import { Link } from 'react-router-dom'
import Countdown from '../../components/countdown'

import Confetti from 'react-confetti'

const Program = () => {
    const [company, setCompany] = useState(null)
    const [confetti, setConfetti] = useState(null)

    useEffect(() => {
        const toggleConfetti = () => {
            if (confetti === null) {
                setConfetti(
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
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
        }, 1800000)
        return () => clearInterval(interval)
    }, [confetti])

    return (
        <Container>
            {/* <Confetti
                    width={window.innerWidth }
                    height={window.innerHeigth }
                    numberOfPieces={'100'}
                    recycle={false}
                    run={true}
                /> */}
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
                    color: 'black',
                }}
            >
                Velkommen til digital ettermiddagen@ifi
            </Title>
            <h2
                style={{
                    gridArea: 'h2',
                }}
            >
                Vi håper du tar turen innom og prater litt med de ulike
                bedriftene i standområdet, de gleder seg til å møte deg!
                Parallellt med det digitale standområdet kjøres det ulike
                foredrag, og vi håper du finner noe som er interessant og
                relevant for deg. Vi har flere konkurranser gående iløpet av
                dagen, og flere av bedriftene har egne konkurranser iløpet av
                standtiden sin, så utnytt sjansen til å mingle med litt
                bedrifter over en lav sko i dag.{' '}
            </h2>
            <h2 style={{ gridArea: 'h3', justifySelf: 'center' }}>
             <a href={"https://docs.google.com/forms/d/e/1FAIpQLSd88cP_BYJvGYY8xfOIO8QnaLmTkYMfaPYDbtNZiEy6wbVEEQ/viewform"}>Besøkt stand eller foredrag? Del opplevelsen din og vinn universal-gavekort!</a>  
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
                    <h1>Åpningsshow med Gyda, Eivind og Maja</h1>
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
                company={company}
                setCompany={setCompany}
                kohort={3}
            />
            <Faglig />
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
                    <h1>Kahoot!</h1>
                </Link>
            </Open>
            <Time style={{ gridArea: 'time5', marginBot: '1em' }}>
                <div style={{ paddingTop: '2.3em' }}>Takk for i dag</div>
            </Time>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    margin-left: auto;
    margin-right: auto;
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
        grid-template-columns: 20vw 100vw;
        min-width: 320px;
        min-height: 810px;
        text-align: left;
        grid-template-rows: 10vh 15vh 30vh 10vh 9vh 30vh 9vh 30vh 60vh 9vh 30vh 60vh 9vh 30vh 60vh 9vh 35vh 9vh;
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
            display: grid;
            font-size: 1rem;
            text-align: left;
            justify-self: center;
        }

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
        background-color: #a2d2ff;
        cursor: pointer;
    }
    padding: 1em;

    @media screen and (max-width: 815px) {
        grid-template-columns: 100vw;
        grid-template-rows: 80vh;
        padding: 0;
        margin-top: 1rem;
        width: 90vw;
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
