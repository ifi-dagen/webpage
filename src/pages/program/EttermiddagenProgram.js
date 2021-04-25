import React, { useState } from 'react'
import styled from 'styled-components'
import BedriftKohort from '../bedrift/BedriftKohort'
import { BedriftKomponent } from '../bedrift/BedriftKomponent'
import Faglig from '../foredrag/Faglig'
import Foredrag from '../foredrag/foredrag'
import OpenProgram from './OpenProgram'
import End from './End'
import './program.css'

const Program = () => {
    const [company, setCompany] = useState(null)
    const [talk, setTalk] = useState(null)
    const [selected, setSelected] = useState('program')
    if (selected === 'program') {
        return (
            <Container>
                <Split style={{ gridArea: 'split' }} />
                <Time style={{ gridArea: 'time' }}>
                    <div style={{ paddingTop: '2.3em' }}>12:00</div>
                </Time>
                <Open style={{ gridArea: 'open' }}>
                    <h1 onClick={() => setSelected('åpningssermoni')}>
                        Åpningssermoni med Gyda, Eivind og Maja
                    </h1>
                </Open>
                {/* <Comp>
                    <h2>Bedritne saker</h2>
                </Comp> */}
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
                    setSelected={setSelected}
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
                    setSelected={setSelected}
                />
                <Faglig setSelected={setSelected} setTalk={setTalk} />
                <Split style={{ gridArea: 'split4' }} />
                <Time style={{ gridArea: 'time4' }}>
                    <div style={{ paddingTop: '2.3em' }}>16:00</div>
                </Time>
                <Open style={{ gridArea: 'end' }}>
                    <h1 onClick={() => setSelected('avslutning')}>Kahoot!</h1>
                </Open>
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
    padding: 0 5rem;
    height: auto;
    grid-template-columns: 25vw 2vw 25vw;
    grid-template-rows: 5vh 9vh 42vh 9vh 42vh 9vh 42vh 9vh 42vh 9vh 42vh 5vh;
    grid-template-areas:
        ' . . .'
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
        ' . . .';
    justify-items: center;
`

const Comp = styled.div`
    grid-area: comp;
    h2  {
        display: grid;
        place-items: center;
    }
`

// const Icon = styled.div`
//     img {
//         display: block;
//         max-width: 150px;
//         max-height: 70px;
//         width: auto;
//         height: auto;
//         overflow: hidden;
//     }
// `

const Split = styled.div`
    grid-area: split;
    border: 6px peachpuff;
    border-left: solid;
    border-right: solid;
`

const Time = styled.div`
    background-color: #ff8966;
    height: 90px;
    text-align: center;
    vertical-align: middle;
    width: 90px;
    border-radius: 50%;
    text-align: bottom;
`

const Open = styled.div`
    :hover {
        opacity: 1;
        transition: 0.5s ease;
        background-color: #ea526f;
    }
    border-radius: 1rem;
    justify-self: center;
    align-self: start;
`

export default Program
