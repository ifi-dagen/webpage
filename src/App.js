import React from 'react'
import styled from 'styled-components'

import Routes from './App-routes'
import Header from './components/header'
import Footer from './components/footer'

const App = () => (
    <>
        <Container>
            <Header
                style={{ gridArea: 'header' }}
                link1="\for-bedrift"
                text1="Bedrifter"
                text2="Om oss"
                link2="\om-oss"
                text3="FAQ"
                link3="/for-bedrift"
            />
            <Routes style={{ gridArea: 'main' }} />
            <Footer style={{ gridArea: 'footer' }} />
        </Container>
    </>
)

const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto auto 12vh;
    grid-template-areas:
        'header'
        'main'
        'footer';
`

export default App
