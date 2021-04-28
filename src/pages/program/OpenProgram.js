import React from 'react'
import { Zoom } from '../../components/symbols'
import styled from 'styled-components'

const OpenProgram = () => {
    return (
        <Container
            style={{
                margin: 'auto',
                textAlign: 'center',
                maxWidth: '850px',
                minWidth: '640px',
                padding: '0 5rem',
            }}
        >
            <h3 style={{ fontSize: '30px', gridArea: 'Title' }}>
                Åpningssermoni
            </h3>
            <Zoom
                style={{ gridArea: 'Zoom' }}
                link={
                    'https://uio.zoom.us/j/64027618671?pwd=OFJtUXZvSWo5TFlVZS9SWmpKMkw3Zz09'
                }
                text={'Se åpningssermonien her!'}
            />
            <p
                style={{
                    fontSize: '1.5rem',
                    fontWeight: '550',
                    gridArea: 'Description',
                }}
            >
                Få en super start på ettermiddagen med Gyda, Eivind og Maja,
                SoMe teamet fra{' '}
                <a href="https://instagram.com/unioslo_ifi?igshid=qnctjszowjb8">
                    {' '}
                    @unioslo_ifi
                </a>{' '}
                . Ta turen innom for å høre live fredagsprat før det braker løs
                med standområde og foredrag. Ta med en kaffekopp og hør hva som
                har skjedd på ifi den siste uken.
            </p>
            <br />
            <Konkurranse style={{ gridArea: 'Competition' }}>
                <h1>Konkurranse!</h1>
                <p>
                    Send bilde av at du deltar på åpningsshowet til oss på insta
                    DM! Vi trekker ut 5 vinnere av gavekort på Morgenlevering
                    til en verdi av 200,- !
                </p>
                <Link href={'https://instagram.com/dagenatifi'}>
                    <Icon className="fab fa-instagram">
                        <p>@dagenatifi</p>
                    </Icon>
                </Link>
            </Konkurranse>
            <br />

            <img
                style={{ gridArea: 'Picture' }}
                src={require('../../img/fredagsprat.png')}
                alt=""
            ></img>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-areas:
        'Title'
        'Zoom'
        'Description'
        'Competition'
        'Picture';
    justify-items: center;
`

const Konkurranse = styled.div`
    border-radius: 50%;
    background-color: snow;
    width: 400px;
    height: 400px;
    h1 {
        font-style: italic;
        color: #cdb4db;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
    }
`

const Link = styled.a`
    align-items: flex-start;
    padding: 1em;
`

const Icon = styled.i`
    font-size: 3rem;
    color: black;
    transition: color 0.25s;

    ${Link}:hover & {
        color: deepskyblue;
    }
`
export default OpenProgram
