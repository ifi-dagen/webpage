import React, { useEffect, useState } from 'react'
import sanityClient from '../client'

function Header() {
    const [headerData, setHeaderData] = useState(null)

    useEffect(() => {
        const query = '*[_type == "header"]{logo, navigationitems}'
        sanityClient
            .fetch(query)
            .then((data) => setHeaderData(data))
            .catch(console.error)
    }, [])

    useEffect(() => {
        console.log(headerData)
    }, [headerData])

    return (
        <div className="header-container">
            {headerData &&
                headerData.map((header) => {
                    return header.navigationitems.map((element) => {
                        console.log(element)
                        return (
                            <div className="navlink" key={element._key}>
                                {element.title}
                            </div>
                        )
                    })
                })}
        </div>
    )
}

export default Header
