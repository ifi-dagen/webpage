import React from 'react'
import { YellowZoom } from '../../components/symbols'
import styled from 'styled-components'

const End = () => {
    return (
        <div
            style={{
                margin: 'auto',
                textAlign: 'center',
                maxWidth: '850px',
                minWidth: '640px',
                padding: '0 5rem',
            }}
        >
            <h3 style={{ fontSize: '30px' }}>Kahoot</h3>
            <img src={require('../../img/DANS.jpg')} alt=""></img>
            <br/>
            <br/>
            <br/>
            <br/>
            <YellowZoom
                link={
                    'https://uio.zoom.us/j/64027618671?pwd=OFJtUXZvSWo5TFlVZS9SWmpKMkw3Zz09'
                }
                text={'Bli med på kahoot her!'}
            />
            <p style={{
                fontSize: '1.5rem',
                fontWeight: '550',
            }}>
                For å avslutte en fin dag med masse spennende bedrifter
                inviterer vi på kahoot! Vi håper dere har hatt en super dag på
                ettermiddagen@ifi og vi gleder oss allerede til å se dere til
                høsten på dagen@ifi!
            </p>
            <br/>
            <Konkurranse>
                <h1>Konkurranse!</h1>
                <p>
                <b>Delta på kahooten og vinn gavekort på Wolt:</b>
                
                <br />1. plass: 500,-
                <br />2. plass: 300,-
                <br />3. plass 200,- 
                <br />Beste bakgrunn: 250,-
                <br />"Lucky looser":  250,-
                </p>

            </Konkurranse>
            <br/>
            <h3 style={{ fontSize: '30px' }}>Takk for i dag!!</h3>
            
        </div>
    )
}

const Konkurranse = styled.div`
    border-radius: 50%;
    background-color: snow;
    justify-self: center;

    width:400px;
    height: 400px;

    h1 {
    font-style: italic;
    color: #cdb4db;
    }

    p{
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
    }
`


export default End
