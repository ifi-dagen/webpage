import React from 'react'
import styled from 'styled-components'

import Routes from './App-routes'
import Header from './components/header'
import Footer from './components/footer'

const App = () => (
    <>
        <Container>
            <Header style={{ gridArea: 'header' }} />
            <Routes style={{ gridArea: 'main' }} />
            <Footer style={{ gridArea: 'footer' }} />
        </Container>
    </>
)

const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        'header'
        'main'
        'footer';
`

export default App
