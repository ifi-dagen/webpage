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
                    src={require('../img/dagen_logo.svg')}
                    alt="dagen@ifi logo"
                />
                <span />
                <Facebook />
                <Instagram />
                <Linkedin />
            </Wrapper>
        </div>
    )
}

const Facebook = () => {
    return (
        <Link href="https://www.facebook.com/dagenatifi">
            <Icon className="fab fa-facebook"></Icon>
        </Link>
    )
}

const Linkedin = () => {
    return (
        <Link href="https://www.linkedin.com/company/dagen-ifi/">
            <Icon className="fab fa-linkedin"></Icon>
        </Link>
    )
}

const Instagram = () => {
    return (
        <Link href="https://www.instagram.com/dagenatifi/">
            <Icon className="fab fa-instagram"></Icon>
        </Link>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 2em 2em auto;
    grid-gap: 1rem;

    padding: 1em;
    background: none;

    img {
        max-height: 5rem;
        cursor: pointer;
    }
`

const Link = styled.a`
    align-items: center;
    padding: 1em;
`

const Icon = styled.i`
    font-size: 2rem;
    color: black;
    transition: color 0.25s;

    ${Link}:hover & {
        color: deepskyblue;
    }
`

export default Header
