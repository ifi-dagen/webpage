import React from 'react'
import styled from 'styled-components'
import { useHistory as useHerstory } from 'react-router-dom'

const Header = () => {
    const herstory = useHerstory()

    return (
        <div>
            <Wrapper>
                <img
                    onClick={() => herstory.push('/')}
                    src={require('../img/ettermiddagen.svg')}
                    alt="ettermiddagen@ifi logo"
                />
                <span />
                <Box>
                    <a href="/for-bedrift"> Til bedrifter</a>
                    <br />
                    <a href="/om-oss"> Om Oss</a>
                    <br />
                    <a href="/for-bedrift"> FAQ</a>
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

    img {
        max-height: 5rem;
        cursor: pointer;
        color: black;
        transition: color 0.25s;
        :hover {
            fill: #b45eff;
        }
    }

    a {
        color: black;
        transition: color 0.25s;
        :hover {
            color: #b45eff;
        }
        text-decoration: none;
        font-family: Courier New;
    }
`

export default Header
