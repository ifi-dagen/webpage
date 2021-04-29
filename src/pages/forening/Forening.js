import React from 'react'
import '../../App.css'
import dagen from './forening.json'
import { peepsInfo } from './peeps'
import styled from 'styled-components'

const Forening = () => {
    return (
        <div className="bedriftbase ">
            <h1>{dagen.title}</h1>
            {dagen.about_us.map((sentence) => {
                return <p key={sentence}>{sentence}</p>
            })}

            <h1>{dagen.title_join}</h1>
            {dagen.join.map((sentence) => {
                return <p key={sentence}>{sentence}</p>
            })}
            <br />
            <p>
                Send mail til{' '}
                <a href="mailto:styret@dagenatifi.no">styret@dagenatifi.no</a>{' '}
                hvis det er noe du lurer på!
            </p>

            <br />
            <h2>Styret 2021</h2>
            <PeepsGrid>
                {peepsInfo.map((peep, index) => (
                    <Visitkort2 peep={peep} key={peep.navn} />
                ))}
            </PeepsGrid>
        </div>
    )
}
const Visitkort2 = ({ peep }) => {
    return (
        <Peep key={peep.navn}>
            <VisitkortImage path={peep.image} />
            <p>
                <b>{peep.navn}</b>
            </p>
            <p>{peep.rolle.tittel}</p>
            <p>{peep.rolle.epost}@dagenatifi.no</p>
        </Peep>
    )
}

const VisitkortImage = ({ path }) => {
    try {
        const bilde = require('../../img/styret/' + path)
        return <img src={bilde} alt="Bilde av styremedlem" />
    } catch {
        return (
            <img
                className="round"
                src={require('../../img/styret/Placeholder.png')}
                alt="Manglende bilde av personen"
            />
        )
    }
}

const Peep = styled.div`
    img {
        padding: 0 0 1rem 0;
        margin: auto;
        min-width: 0px;
    }
    p {
        text-align: center;
        margin: 0;
    }
`

const PeepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
`

export default Forening
