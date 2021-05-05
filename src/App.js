import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'
import Homepage from './pages/Homepage'
import Header from './components/header'

const App = () => (
    <div className="grid-container">
        <div className="header">
            <Header />
        </div>
        <div className="body">
            <Switch>
                <Route exact path="/" component={Homepage} />
            </Switch>
        </div>
        <div className="footer">Footer</div>
    </div>
)

export default App
