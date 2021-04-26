import React from 'react'
import styled from 'styled-components'

import Routes from './App-routes'
import Header from './components/header'
import Footer from './components/header'

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
            <Footer
                style={{ gridArea: 'footer' }}
                link1="https://www.instagram.com/dagenatifi"
                text1="Instagram"
                text2="Facebook"
                link2="https://www.facebook.com/dagenatifi"
                text3="Linkedin"
                link3="https://www.linkedin.com/dagenatifi"
            />
        </Container>
    </>
)

const Container = styled.div`
    display: grid;
    min-height: 100vh;
    align-items: start;
    grid-template-rows: 12vh auto 12vh;
    grid-template-areas:
        'header'
        'main'
        'footer';
`

export default App
