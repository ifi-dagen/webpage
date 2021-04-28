import React from 'react'
import { Zoom } from '../../components/symbols'

const OpenProgram = () => {
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
            <h3 style={{ fontSize: '30px' }}>Åpningssermoni</h3>
            <Zoom
                link={
                    'https://uio.zoom.us/j/64027618671?pwd=OFJtUXZvSWo5TFlVZS9SWmpKMkw3Zz09'
                }
                text={'Se åpningssermonien her!'}
            />
            <p>
                
                Få en super start på ettermiddagen med Gyda, Eivind og Maja, SoMe teamet fra @unioslo_ifi.
                Ta turen innom for å høre live fredagsprat før det braker løs med
                standområde og foredrag. Ta med en kaffekopp og hør hva som har
                skjedd på ifi den siste uken. 
            </p>

            <p>Send bilde av at du deltar på åpningsshowet til oss på insta DM! Vi trekker ut 5 vinnere av gavekort på Morgenlevering til en verdi av 200,- !</p>

            <img
                src={require('../../img/ettermidagen_at_ifi-0480.jpg')}
                alt=""
            ></img>
        </div>
    )
}
export default OpenProgram
