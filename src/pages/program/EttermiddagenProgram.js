import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BedriftKohort from '../bedrift/BedriftKohort'
import { BedriftKomponent } from '../bedrift/BedriftKomponent'
import Faglig from '../foredrag/Faglig'
import Foredrag from '../foredrag/foredrag'
import OpenProgram from './OpenProgram'
import End from './End'
import './program.css'

import Confetti from 'react-confetti'

const Program = () => {
    const [company, setCompany] = useState(null)
    const [talk, setTalk] = useState(null)
    const [selected, setSelected] = useState('program')
    const [confetti, setConfetti] = useState(null)
    

    if (selected === 'program') {
        return (

            <Container>
                <h1 style={{gridArea:"overskrift", justifySelf: "center", color:"black", fontSize: "50px"}}>Velkommen til digital ettermiddagen@ifi</h1>

                <Confetti
                    width={'2000'}
                    height={'2000'}
                    numberOfPieces={'100'}
                    recycle={false}
                    run={true}
                />
                <Split style={{ gridArea: 'split' }} />
                <Time style={{ gridArea: 'time' }}>
                    <div style={{ paddingTop: '2.3em' }}>12:00</div>
                </Time>

                <Open style={{ gridArea: 'open' }}>
                    <Tag>Konkurranse 12:00-13:00</Tag>
                    <h1 onClick={() => setSelected('åpningssermoni')}>
                        Åpningssermoni med Gyda, Eivind og Maja
                    </h1>
                </Open>
                <Split style={{ gridArea: 'split1' }} />
                <Time style={{ gridArea: 'time1' }}>
                    <div style={{ paddingTop: '2.3em' }}>13:00</div>
                </Time>

                <BedriftKohort
                    comp1="Accenture"
                    comp2="Nav"
                    comp3="Fink"
                    setSelected={setSelected}
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
                    comp1="Kolonial"
                    comp2="Netcompany"
                    comp3="NoA Ignite"
                    setSelected={setSelected}
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
                    setSelected={setSelected}
                    company={company}
                    setCompany={setCompany}
                    kohort={3}
                />
                <Faglig setSelected={setSelected} setTalk={setTalk} />
                <Split style={{ gridArea: 'split4' }} />
                <Time style={{ gridArea: 'time4' }}>
                    <div style={{ paddingTop: '2.3em' }}>16:00</div>
                </Time>
                <Open
                    style={{
                        gridArea: 'end',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <Tag>Konkurranse 16:00-16:30</Tag>
                    <h1 onClick={() => setSelected('avslutning')}>Kahoot!</h1>
                </Open>
                <Time style={{ gridArea: 'time5', marginBot: "1em"}}>
                    <div style={{ paddingTop: '2.3em' }}>Takk for i dag</div>
                </Time>
            </Container>
        )
    } else if (selected === 'bedrift') {
        console.log(selected)
        return <BedriftKomponent bedrift={company} setSelected={setSelected} />
    } else if (selected === 'faglig') {
        console.log(selected)
        return <Foredrag id={talk} setSelected={setSelected} />
    } else if (selected === 'åpningssermoni') {
        console.log(selected)
        return <OpenProgram setSelected={setSelected} />
    } else if (selected === 'avslutning') {
        console.log(selected)
        return <End setSelected={setSelected} />
    } 
}

const Container = styled.div`
    display: grid;
    max-width: 850px;
    min-width: 640px;
    margin: 0 auto;
    height: auto;
    grid-template-columns: 25vw 2vw 25vw;
    grid-template-rows: 20vh 9vh 42vh 9vh 42vh 9vh 42vh 9vh 42vh 9vh 42vh 9vh;
    grid-template-areas:
        'overskrift overskrift overskrift'
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
        grid-template-columns: 100vw;
        grid-template-columns: 35vw 35vw;
        grid-template-rows: 20vh 9vh 30vh 9vh 20vh 60vh 9vh 20vh 60vh 9vh 20vh 60vh 9vh 30vh 9vh ;
        grid-template-areas:
            'overskrift overskrift'
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
            font-size: 1rem;
        }
        padding: 0;

        img {
            display: block;
            max-width: 200px;
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
    height: 22vh;
    width: 22vw;

    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;

    
    :hover {
        opacity: 1;
        transition: 0.5s ease;
        background-color: #b7e4c7;
        cursor: pointer;
    }
    
   
`

const Tag = styled.div`
    margin: 1em;
    font-size: 1.2rem;
    border-radius: 25px;
    background-color: #cdb4db;
    width: 15vw;
    text-align: center;
    color: snow;
`

export default Program
