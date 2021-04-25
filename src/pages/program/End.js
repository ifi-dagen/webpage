import React from 'react'
import { Zoom } from '../../components/symbols'

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
            <Zoom
                link={
                    'https://uio.zoom.us/j/64027618671?pwd=OFJtUXZvSWo5TFlVZS9SWmpKMkw3Zz09'
                }
                text={'Bli med på kahoot her!'}
            />
            <p>
                For å avslutte en fin dag med masse spennende bedrifter
                inviterer vi på kahoot! Vi håper dere har hatt en super dag på
                ettermiddagen@ifi og vi gleder oss allerede til å se dere til
                høsten på dagen@ifi!
            </p>
            <h3 style={{ fontSize: '30px' }}>Takk for i dag!!</h3>
            <img src={require('../../img/ettermidagen_at_ifi-0480.jpg')}></img>
        </div>
    )
}
export default End
