import React from 'react'
import styled from 'styled-components'

const Social = () => {

    return(
        <div>
            <Facebook />
            <Instagram />
            <Linkedin />
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

export default Social;