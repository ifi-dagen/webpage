import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'
import './header.scss'

function Header() {
    const [headerData, setHeaderData] = useState(null)

    useEffect(() => {
        const query =
            '*[_type == "header"]{"imageUrl": logo.asset->url, navigationitems}'
        sanityClient
            .fetch(query)
            .then((data) => setHeaderData(data))
            .catch(console.error)
    }, [])

    return (
        <div className="header-container">
            <div className="logo-section">
                <Link to="/">
                    {headerData && (
                        <img src={headerData[0].imageUrl} alt="Logo" />
                    )}
                </Link>
            </div>
            <div className="navlink-section">
                {headerData &&
                    headerData.map((header) => {
                        return header.navigationitems.map((element) => {
                            return (
                                <Link
                                    to={element.slug.current}
                                    className="navlink-item"
                                    key={element._key}
                                >
                                    {element.title}
                                </Link>
                            )
                        })
                    })}
            </div>
        </div>
    )
}

export default Header
