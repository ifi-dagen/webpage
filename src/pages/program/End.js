import React from 'react'
import { Zoom } from '../../components/symbols'
import styled from 'styled-components'

const End = () => {
    window.scrollTo(0, 0);

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
            <Tag style={{ gridArea: 'Tag' }}>Kahoot 16:00</Tag>
            <div
                style={{
                    gridArea: 'Zoom',
                    padding: '1em',
                    justifySelf: 'center',
                }}
            >
                <Zoom
                    link={
                        'https://uio.zoom.us/j/64027618671?pwd=OFJtUXZvSWo5TFlVZS9SWmpKMkw3Zz09'
                    }
                    text={'Bli med på kahoot her!'}
                />
            </div>

            <h1
                style={{
                    fontSize: '3em',
                    gridArea: 'Title',
                    fontStyle: 'italic',
                }}
            >
                Kahoot
            </h1>

            <p
                style={{
                    fontSize: '1.5rem',
                    fontWeight: '550',
                    gridArea: 'Description',
                }}
            >
                For å avslutte en fin dag med masse spennende bedrifter
                inviterer vi på kahoot! Vi håper dere har hatt en super dag på
                ettermiddagen@ifi og vi gleder oss allerede til å se dere til
                høsten på dagen@ifi!
            </p>
            <br />
            <Konkurranse
                style={{ gridArea: 'Competition', textAlign: 'center' }}
            >
                <h1>Konkurranse!</h1>
                <p>
                    <b>Delta på kahooten og vinn gavekort på Wolt:</b>
                    <br />
                    1. plass: 500,-
                    <br />
                    2. plass: 300,-
                    <br />
                    3. plass 200,-
                    <br />
                    Beste bakgrunn: 250,-
                    <br />
                    "Lucky looser": 250,-
                </p>
            </Konkurranse>
            <br />
            <h1
                style={{
                    gridArea: 'Thanks',
                    fontSize: '3em',
                    textAlign: 'center',
                }}
            >
                Takk for i dag!!
            </h1>
        </Container>
    )
}

const Container = styled.div`
    padding: 3em;
    display: grid;
    grid-template-columns: 15vw 15vw 15vw;
    grid-template-areas:
        'Tag . .'
        'Zoom Zoom Zoom'
        'Title Title . '
        'Description Description Description'
        '. Competition  .'
        'Thanks Thanks Thanks';

        @media screen and (max-width: 815px) {
            grid-template-columns: auto;
            grid-template-areas:
            'Tag'
            'Zoom'
            'Title'
            'Description'
            'Competition'
            'Thanks';

            p{
                font-size: 1rem,
                font-weight: 200,
            }
            justify-items:center;
           
`

const Konkurranse = styled.div`
    border-radius: 50%;
    background-color: snow;
    justify-self: center;

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

export default End
