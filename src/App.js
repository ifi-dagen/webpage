import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
    </div>
)

export default App
