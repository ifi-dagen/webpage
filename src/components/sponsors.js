import React from 'react'

function Sponsors({ title, sponsorlist }) {
    return (
        <div>
            <div>{title}</div>
            {sponsorlist.map((sponsor) => {
                return <div key={sponsor._key}>{sponsor.companyname}</div>
            })}
        </div>
    )
}
export default Sponsors
