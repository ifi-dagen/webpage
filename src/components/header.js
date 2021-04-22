import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory as useHerstory } from 'react-router-dom'
import ettermiddagen from "../img/ettermiddagen.svg"
import ettermiddagenannenfarge from "../img/ettermiddagenannenfarge.svg"



const Header = () => {
    const herstory = useHerstory()
    const [logo, setLogo] = useState(ettermiddagen);
    const updateState = () => {
        if (logo === ettermiddagen) {
            console.log("heeeeeelå");
            setLogo(ettermiddagenannenfarge)
            console.log(logo);
        }
        else if (logo === ettermiddagenannenfarge) {
            console.log(logo);
            setLogo("../img/ettermiddagen.svg")
        }
    }
    if (logo === ettermiddagen){
        return (
            <div>
                <Wrapper>
                    <img
                        onClick={() => herstory.push('/')}
                        src={ettermiddagen}
                        alt="ettermiddagen@ifi logo"
                        onMouseEnter={() => updateState()}
                        onMouseLeave={() => updateState()}
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
    else {
        return (
            <div>
                <Wrapper>
                    <img
                        onClick={() => herstory.push('/')}
                        src={ettermiddagenannenfarge}
                        alt="ettermiddagen@ifi logo"
                        onMouseEnter={() => updateState}
                        onMouseLeave={() => updateState}
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
            </div>)
    }
   
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
    background-color: aquamarine;
    div {
        max-height: 5rem;
        cursor: pointer;
        color: black;
        transition: color 0.25s;
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
