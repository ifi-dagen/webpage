import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Program from './pages/program/EttermiddagenProgram'
import Bedrift from './pages/bedrift/Bedrift'
import Front from './pages/front/Front'
import Error from './pages/error/Error'
import Stander from './pages/standomraade/Stander'
import BedriftStand from './pages/bedriftstand/BedriftStand'
import Studenter from './pages/studenter/studenter'
import Styret from './components/styret'
import Foredrag from './pages/foredrag/foredrag'
import { BedriftKomponent } from './pages/bedrift/BedriftKomponent'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={(prop) => <Front />} />
                <Route
                    exact
                    path="/program"
                    render={(prop) => (
                        <Program
                            {...prop}
                            store={this.props.store}
                            published={true}
                        />
                    )}
                />
                <Route
                    exact
                    path="/for-bedrift"
                    render={(prop) => (
                        <Bedrift {...prop} store={this.props.store} />
                    )}
                />
                <Route
                    exact
                    path="/studenter"
                    render={(prop) => <Studenter />}
                />
                <Route
                    exact
                    path="/foredrag"
                    render={(prop) => (
                        <Foredrag {...prop} store={this.props.store} />
                    )}
                />
                <Route exact path="/styret" render={(prop) => <Styret />} />
                <Route
                    exact
                    path="/stander"
                    render={(prop) => (
                        <Stander
                            {...prop}
                            store={this.props.store}
                            testmode={true}
                        />
                    )}
                />
                <Route
                    exact
                    path="/stander/:dag/:bedrift"
                    render={(prop) => (
                        <BedriftStand
                            {...prop}
                            store={this.props.store}
                            testmode={false}
                        />
                    )}
                />
                <Route
                    exact
                    path="/bedrift"
                    render={(prop) => (
                        <BedriftKomponent
                            {...prop}
                            store={this.props.store}
                            testmode={false}
                        />
                    )}
                />
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
