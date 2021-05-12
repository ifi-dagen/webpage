import React, { useEffect, useState } from 'react'

import sanityClient from '../client'
import './GenericPage.scss'
import Sponsors from '../components/sponsors'

function GenericPage({ slug }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const query = `*[_type == "pages" && slug.current == '${slug}']{pagesections}`
        sanityClient
            .fetch(query)
            .then((data) => setData(data[0]))
            .catch(console.error)
    }, [slug])

    function findSection(param) {
        switch (param._type) {
            case 'sponsors':
                return (
                    <Sponsors
                        key={param._key}
                        title={param.title}
                        sponsorlist={param.sponsorlist}
                    />
                )
            default:
                console.log('Section not found', param)
                return <> </>
        }
    }

    return (
        <div className="page-root">
            <div className="page-container">
                {data &&
                    data.pagesections.map((elem) => {
                        return <div key={elem._key}>{findSection(elem)}</div>
                    })}
            </div>
        </div>
    )
}

export default GenericPage
