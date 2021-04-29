import React from 'react'
import styled from 'styled-components'

import Routes from './App-routes'
// import Program from "./pages/program/EttermiddagenProgram"
import Header from './components/header'
import Newfooter from './components/newfooter'

const App = () => (
    <div>
        <Container>
            <Header
                style={{ gridArea: 'header' }}
                link1="/for-bedrift"
                text1="Bedrifter"
                text2="Om oss"
                link2="/om-oss"
                text3="FAQ"
                link3="/studenter"
            />
            <Routes style={{gridArea: 'main' }} />
            <Newfooter/>
        </Container>
    </div>
)

const Container = styled.div`
    display: grid;

    min-height: 100vh;
    align-items: start;
    margin-left: auto;
    margin-right: auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        'header'
        'main'
        'footer';
`

export default App
