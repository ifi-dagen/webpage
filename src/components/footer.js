import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

import sanityClient from '../client'
import './footer.scss'

function Footer() {
    const [footerData, setFooterData] = useState(null)

    useEffect(() => {
        const query =
            '*[_type == "footer"]{"imageUrl": logo.asset->url, "faceurl": faceurl, "instaurl": instaurl, "linkedinurl": linkedinurl, "footertext": footertext}'
        sanityClient
            .fetch(query)
            .then((data) => setFooterData(data))
            .catch(console.error)
    }, [])

    return (
        <div className="footer-container">
            <div className="divider"></div>
            <div className="social-media-links">
                {footerData && (
                    <div className="social-media-icons">
                        <a href={footerData[0].faceurl}>
                            <FaFacebook color="black" fontSize="1.2em" />
                        </a>
                        <a href={footerData[0].instaurl}>
                            <FaInstagram color="black" fontSize="1.2em" />
                        </a>
                        <a href={footerData[0].linkedinurl}>
                            <FaLinkedin color="black" fontSize="1.2em" />
                        </a>
                    </div>
                )}
                {footerData && (
                    <div className="footer-text">
                        {footerData[0].footertext}
                    </div>
                )}
            </div>
            <div className="logo-section">
                <Link to="/">
                    {footerData && (
                        <img src={footerData[0].imageUrl} alt="Logo" />
                    )}
                </Link>
            </div>
        </div>
    )
}

export default Footer
