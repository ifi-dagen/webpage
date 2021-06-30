import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Program from './pages/program/EttermiddagenProgram'
import Bedrift from './pages/bedrift/Bedrift'
import Error from './pages/error/Error'
import Stander from './pages/standomraade/Stander'
import BedriftStand from './pages/bedriftstand/BedriftStand'
import Studenter from './pages/studenter/studenter'
import Styret from './components/styret'
import Forening from './pages/forening/Forening'
import Foredrag from './pages/foredrag/foredrag'
import { BedriftKomponent } from './pages/bedrift/BedriftKomponent'
import OpenProgram from './pages/program/OpenProgram'
import End from './pages/program/End'
import Front from './pages/front/Front'
const alleBedrifter = [
    'Accenture',
    'Nav',
    'Fink',
    'Oda',
    'Netcompany',
    'NoA Ignite',
    'Bekk',
    'Cognite',
]
const alleForedrag = ['Netcompany', 'Bekk', 'Accenture']

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
                {/* <Route
                    exact
                    path="/bedrift/Kolonial"
                    render={(prop) => (
                        <BedriftKomponent
                            {...prop}
                            store={this.props.store}
                            testmode={false}
                        />
                    )}
                /> */}
                {alleBedrifter.map((x) => {
                    return (
                        <Route
                            key=""
                            exact
                            path={`/bedrift/${x}`}
                            component={(prop) => (
                                <BedriftKomponent
                                    {...prop}
                                    store={this.props.store}
                                    testmode={false}
                                />
                            )}
                        />
                    )
                })}
                {alleForedrag.map((x) => {
                    return (
                        <Route
                            key=""
                            exact
                            path={`/foredrag/${x}`}
                            component={(prop) => (
                                <Foredrag
                                    {...prop}
                                    store={this.props.store}
                                    testmode={false}
                                />
                            )}
                        />
                    )
                })}
                <Route
                    exact
                    path={`/åpningsshow`}
                    component={(prop) => (
                        <OpenProgram
                            {...prop}
                            store={this.props.store}
                            testmode={false}
                        />
                    )}
                />
                <Route
                    exact
                    path={`/quiz`}
                    component={(prop) => (
                        <End
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
