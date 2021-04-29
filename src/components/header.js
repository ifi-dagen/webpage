import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory as useHerstory } from 'react-router-dom'
import {Link} from "react-router-dom"
import ettermiddagen from '../img/ettermiddagen.svg'
import ettermiddagenannenfarge from '../img/ettermiddagenannenfarge.svg'

export const Info = ({ link1, text1, link2, text2, link3, text3 }) => {
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
                    <Link to={`${link1}`}> {text1}</Link>
                    <br />
                    <Link to={`${link2}`}> {text2}</Link>
                    <br />
                    <Link to={`${link3}`}> {text3}</Link>
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
    padding: 0.5em;
    align-items: center;
    background-color: #2a6f97;
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
            color: #ff6b6b;
        }
        text-decoration: none;
        font-family: Courier New;
    }
`

export default Info
