import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Bedrift from './pages/bedrift/Bedrift'
import Error from './pages/error/Error'
import Studenter from './pages/studenter/studenter'
import Styret from './components/styret'
import Forening from './pages/forening/Forening'
import Front from './pages/front/Front'
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Front} />
                <Route
                    exact
                    path="/for-bedrift"
                    render={(prop) => (
                        <Bedrift {...prop} store={this.props.store} />
                    )}
                />
                <Route
                    exact
                    path="/om-oss"
                    render={(prop) => (
                        <Forening {...prop} store={this.props.store} />
                    )}
                />
                <Route
                    exact
                    path="/studenter"
                    render={(prop) => <Studenter />}
                />

                <Route exact path="/styret" render={(prop) => <Styret />} />
                <Route
                    render={(prop) => (
                        <Error {...prop} store={this.props.store} />
                    )}
                />
            </Switch>
        )
    }
}
export default Routes
