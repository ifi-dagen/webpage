import React, { useState } from 'react'
import styled from 'styled-components'
import { Instagram, Webpage, Facebook, Linkedin } from './symbols'
import ettermiddagen from '../img/ettermiddagen.svg'
import ettermiddagenannenfarge from '../img/ettermiddagenannenfarge.svg'
import { useHistory as useHerstory } from 'react-router-dom'

const Footer = () => {
    const herstory = useHerstory()
    const [logo, setLogo] = useState(ettermiddagen)
    const toggleLogo = () => {
        if (logo === ettermiddagen) {
            setLogo(ettermiddagenannenfarge)
        } else if (logo === ettermiddagenannenfarge) {
            setLogo(ettermiddagen)
        }
    }
    return (
        <div>
            <Wrapper>
                <img
                    onClick={() => herstory.push('/')}
                    src={logo}
                    alt="ettermiddagen@ifi logo"
                    onMouseEnter={() => toggleLogo()}
                    onMouseOut={() => toggleLogo()}
                />
                <span />
                <Box>
                    <a href={'https://www.instagram.com/dagenatifi'}>
                        Instagram
                    </a>
                    <br />

                    <a href={'https://www.facebook.com/dagenatifi'}>Facebook</a>
                    <br />

                    <a href={'https://www.linkedin.com/dagenatifi'}>Linkedin</a>
                    <br />
                </Box>
            </Wrapper>
        </div>
    )
}

const Box = styled.div`
    justify-self: right;
    line-height: 2;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;
    padding: 1em;
    align-items: center;
    background-color: #b23a48;

    img {
        max-height: 5rem;
        cursor: pointer;
        color: black;
        transition: color 0.25s;
    }

    a {
        color: white;
        transition: color 0.25s;
        :hover {
            color: #b45eff;
        }
        text-decoration: none;
        font-family: Courier New;
    }
    clear: both;
    position: relative;
    height: 12vh;
`

export default Footer
