import React from 'react'
import Routes from './App-routes'
import NewFooter from './components/newfooter'
import NewHeader from './components/newheader'



const App = () => (
    <div>
        <NewHeader className="header"/>
         <Routes />
         <footer className="footer">
            <NewFooter/>
        </footer>
    </div>
)


export default App
