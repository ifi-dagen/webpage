import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Linkedin } from './symbols'


const Newfooter = () => {
    return(
        <div>
            <Line>
                    <span />
                    <Wrapper>
                        <Instagram link="http://www.instagram.com/dagenatifi"/>
                        <Facebook link="http://www.facebook.com/dagenatifi"/>
                        <Linkedin link="http://www.linkedin.com/dagenatifi"/>
                        <p> Følg @dagenatifi på sosiale medier</p>
                    </Wrapper>
                    <span />
                    <span />
                    <Dagen src={require('../img/dagen_logo.svg')} alt="dagen@ifi logo" />
                    
             </Line>
        </div>
    )
}

const Line = styled.div`
    border-top: 1px solid black;
    margin: 5rem;
    padding: 3rem;

    display: grid;
    grid-template-columns: auto 1fr  1fr 1fr auto;
    grid-gap: 1rem;

    align-items: center;

    @media screen and (max-width: 1000px) {
        grid-row: 2;
        grid-template-columns: repeat(auto-fit, minmax(15rem, auto));
        grid-gap: 1rem;
        justify-content: center;
    }    
`

const Wrapper = styled.div`

`

const Dagen = styled.img`
    width: 200px;
    height: 100px;
`

export default Newfooter;