import React from 'react'
import { Zoom } from '../../components/symbols'
import styled from 'styled-components'

const OpenProgram = () => {
    return (
        <Container
            style={{
                margin: 'auto',
                padding: '1em',
                textAlign: 'left',
                maxWidth: '850px',
                minWidth: '640px',
            }}
        >
            <Tag style={{ gridArea: 'Tag' }}>Åpningsshow 12:00-13:00</Tag>
            <div
                style={{
                    gridArea: 'Zoom',
                    padding: '1em',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
            >
                <Zoom
                    link={
                        'https://uio.zoom.us/j/64027618671?pwd=OFJtUXZvSWo5TFlVZS9SWmpKMkw3Zz09'
                    }
                    text={'Se åpningsshowet her!'}
                />
            </div>
            <h1
                style={{
                    fontSize: '3em',
                    gridArea: 'Title',
                    fontStyle: 'italic',
                }}
            >
                Åpningsshow
            </h1>
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
            <Konkurranse
                style={{ gridArea: 'Competition', textAlign: 'center' }}
            >
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
                style={{
                    gridArea: 'Picture',
                    width: '400px',
                    height: '400px',
                }}
                src={require('../../img/fredagsprat.png')}
                alt=""
            ></img>
        </Container>
    )
}

const Container = styled.div`
    padding: 3em;
    display: grid;
    grid-template-columns: 15vw 15vw 15vw;
    grid-template-areas:
        'Tag . .'
        '. Zoom .'
        'Title Title . '
        'Description Description Description'
        '. Competition  .'
        '. . Picture';

        @media screen and (max-width: 815px) {
            grid-template-columns: auto;
            grid-template-areas:
            'Tag'
            'Zoom'
            'Title'
            'Description'
            'Competition'
            'Picture';

            p{
                font-size: 1rem,
                font-weight: 200,
            }
            justify-items:center;
           
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
    justify-content: center;
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

const Tag = styled.div`
    height: 1.2em;
    margin: 1em;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    border-radius: 25px;
    background-color: #ff6b6b;
    width: 15vw;
    text-align: center;
    color: snow;
`
export default OpenProgram
