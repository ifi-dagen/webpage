import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'
import sanityClient from './client'
import GenericPage from './pages/GenericPage'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const query = '*[_type == "pages"]{"slug": slug.current}'
        sanityClient
            .fetch(query)
            .then((data) => setData(data))
            .catch(console.error)
    }, [])

    return (
        <div className="grid-container">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <Switch>
                    {data &&
                        data.map((elem) => {
                            return (
                                <Route
                                    key={elem.slug}
                                    path={elem.slug}
                                    component={() => (
                                        <GenericPage slug={elem.slug} />
                                    )}
                                />
                            )
                        })}
                </Switch>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App
