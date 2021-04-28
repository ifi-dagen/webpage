import React from 'react'
import {useHistory} from "react-router-dom"

import styled from 'styled-components'
import foredrag_info from '../../data/foredrag_info.json'
import EttermiddagenProgram from '../program/EttermiddagenProgram'

const Foredrag = ({ match }) => {
    let foredrag = match.url.split("foredrag/")[1]
    console.log("aøsldkjfknasøldfn", foredrag);
    foredrag = foredrag_info.find((f) => f.id === foredrag)
    const history = useHistory()
        return (
        <div
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'left',
            }}
        >
            <CompanyContainer>
                <Tag
                    style={{
                        gridArea: 'Time',
                        alignItems: 'center',
                        height: '1.2em',
                    }}
                    onClick={() => {
                        history.goBack()
                    }}
                >
                    Foredrag {foredrag.startTime} - {foredrag.endTime}
                </Tag>
                <img
                    style={{
                        gridArea: 'Logo',
                        padding: '1em',
                        alignSelf: 'center',
                        maxWidth: '200px',
                        maxHeight: '150px',
                    }}
                    src={require(`./logo/${foredrag.companyName}_logo.png`)}
                    alt={`Bilde av ${foredrag.companyName} sin logo`}
                ></img>

                <a
                    style={{ gridArea: 'Zoom', justifySelf: 'center' }}
                    href={foredrag.link}
                >
                    {'Se foredraget her!'}
                </a>

                <About style={{ gridArea: 'Description' }}>
                    <h1
                        style={{
                            alignSelf: 'center',
                            fontSize: '4em',
                            fontStyle: 'italic',
                        }}
                    >
                        {foredrag.title}
                    </h1>{' '}
                    {foredrag.about}
                </About>
            </CompanyContainer>
        </div>
    )
}

const CompanyContainer = styled.div`
    padding: 2em;
    display: grid;
    grid-template-columns: 15vw 10vw 10vw 15vw;
    grid-template-areas:
        'Time . . Logo'
        '. Zoom Zoom  .'
        'Description Description Description Description';
        
        @media screen and (max-width: 815px) {
            grid-template-columns: 50vw;
      
            grid-template-areas:
            'Time'
            'Logo'
            'Zoom'
            'Description';

            p{
                font-size: 0.5rem,
            }
            justify-items:center;
           
`

const About = styled.div`
    padding: 0 1em 1em 1em;
    line-height: 1.5;
    h3 {
        color: grey;
    }
`

const Tag = styled.div`
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

export default Foredrag
