import React, { useState } from 'react'
import styled from 'styled-components'
import BedriftKohort from '../bedrift/BedriftKohort'
import { BedriftKomponent } from '../bedrift/BedriftKomponent'
import Faglig from '../foredrag/Faglig'
import Foredrag from '../foredrag/foredrag'
import './program.css'

const Program = () => {
    const [company, setCompany] = useState(null)
    const [talk, setTalk] = useState(null)
    const [selected, setSelected] = useState('program')
    if (selected === 'program') {
        return (
            <Container>
                <Comp>
                    <h2>Bedritne saker</h2>
                </Comp>
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

                {/* <h1 style= {{gridArea: "comp"}}>COMP</h1>
                    <h1 style={{gridArea: "kohort1"}}>kohort1</h1>
                    <h1 style={{gridArea: "kohort2"}}>kohort2</h1>
                    <h1 style={{gridArea: "kohort3"}}>kohort3</h1> */}

                <Faglig setSelected={setSelected} setTalk={setTalk} />
            </Container>
        )
    } else if (selected === 'bedrift') {
        console.log(selected)
        return <BedriftKomponent bedrift={company} setSelected={setSelected} />
    } else if (selected === 'faglig') {
        console.log(selected)
        return <Foredrag id={talk} setSelected={setSelected} />
    }
}

const Container = styled.div`
    display: grid;
    max-width: 850px;
    min-width: 640px;
    margin: auto;
    padding: 0 5rem;
    height: auto;
    grid-template-columns: 25vw 2vw 25vw;
    grid-template-rows: 10vh 9vh 42vh 9vh 42vh 9vh 42vh;
    grid-template-areas:
        ' comp . edu '
        ' . time1 . '
        ' kohort1 split1 foredrag1 '
        ' . time2 . '
        ' kohort2 split2 foredrag2 '
        ' . time3 .  '
        ' kohort3 split3 foredrag3 ';
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

export default Program
