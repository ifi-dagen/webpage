import React from 'react'
import Routes from './App-routes'
import Footer from './components/footer'
import Header from './components/header'



const App = () => (
    <div>
        <Header className="header"/>
         <Routes />
         <footer className="footer">
            <Footer/>
        </footer>
    </div>
)


export default App
