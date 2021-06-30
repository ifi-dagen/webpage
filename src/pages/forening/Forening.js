import React from 'react'
import '../../App.css'
import dagen from './forening.json'
import { peepsInfo } from './peeps'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Forening = () => {
    return (
        <div className="content">
            <i >
            <Link 
                style={{fontSize: '50px'}}
                className="fas fa-long-arrow-alt-left"
                to={"/"}
                >
            </Link>
        
            </i>
            <br/>
            
            <h2>{dagen.title}</h2>
            <Segl src={require('../../img/uio_ifi_segl.png')}></Segl>

            {dagen.about_us.map((sentence) => {
                return <p key={sentence}>{sentence}</p>
            })}
            
            <h5>Besøk oss</h5>
                <p> 
                    Gaustadalléen 23 B <br/>
                    Institutt for Informatikk <br/>
                    0373 Oslo 
                </p>

            <h2>{dagen.title_join}</h2>
            {dagen.join.map((sentence) => {
                return <p key={sentence}>{sentence}</p>
            })}
            <br />
            <p>
                Send oss en mail på{' '}
                <a href="mailto:styret@dagenatifi.no">styret@dagenatifi.no</a>{' '}
                eller en DM på instagram hvis det er noe du lurer på!
            </p>

            <br />
            <h2>Andre måter å nå ut til studenter på?</h2>
            <p>Interessert i å ha bedriftpresentasjon på ifi? Ta kontakt med <a href = "mailto: styret@ifinavet.no"> styret@ifinavet.no</a> / <a href="https://ifinavet.no/">ifinavet.no</a></p>
            <p>Interessert i å nå ut til studenter fra andre institutter? Ta kontakt med <a href = "mailto: karriereuka@sio.no"> karriereuka@sio.no</a> / <a href="https://www.uio.no/studier/karriere/karriereuka/"> karriereuka ved UiO</a></p>
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
            <p style={{color: '#cdb4db'}}><b>{peep.navn}</b></p>
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
    grid-gap: 2.5rem;
    margin: 2.5rem;
`

const Segl = styled.img`
    width: 40%;
    padding:0.5rem;
`

export default Forening
