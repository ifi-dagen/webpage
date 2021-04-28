import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
const Faglig = ({ setSelected, setTalk }) => {
    const updateState = (id) => {
        setSelected('faglig')
        setTalk(id)
    }

    return (
        <>
            <InnerContainerEdu style={{ gridArea: 'foredrag1' }}>
            <Link to={{
                        pathname: "/foredrag/Netcompany",}}
                    >
                    
                      
                        
                <Talk>
                    <Tag>Foredrag 13:00-13:30</Tag>
                    <h3 >Death By Powerpoint</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Netcompany.png')}
                        alt=""
                    ></img>
                </TalkComp>
                </Link>

            </InnerContainerEdu>
            <InnerContainerEdu style={{ gridArea: 'foredrag2' }}>
            <Link to={{
                        pathname: "/foredrag/Bekk",}}
                    >
                <Talk>
                     <Tag>Foredrag 14:00-14:30</Tag>
                    <h3 >Impostor Syndrome</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Bekk.png')}
                        alt=""
                    ></img>
                </TalkComp>
                </Link>
            </InnerContainerEdu>
            <InnerContainerEdu style={{ gridArea: 'foredrag3' }}>
            <Link to={{
                        pathname: "/foredrag/Accenture",}}
                    >
                <Talk>
                <Tag>Foredrag 15:00-15:30</Tag>
                    <h3>
                        Superforedrag av accenture
                    </h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Accenture.png')}
                        alt=""
                        onClick={() => updateState(2)}
                    ></img>
                </TalkComp>
                </Link>
            </InnerContainerEdu>
        </>
    )
}

const InnerContainerEdu = styled.div`
    display: grid;
    height: 21vh;
    width: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #edf6f9;

    grid-template-areas:
        'title'
        'company';
    :hover {
        opacity: 1;
        transition: 0.5s ease;
        background-color: #a2d2ff;
    }
    padding: 1em;
    justify-items: center;
`

const Tag = styled.div`
    font-size: 1.2rem;
    border-radius: 25px;
    background-color: #ff6b6b;
    width: 15vw;
    text-align: center;
    color: snow;
`

const Talk = styled.div`
    grid-area: title;
    font-size: 30px;
    :hover {
        cursor: pointer;
    }
`

const TalkComp = styled.div`
    grid-area: company;

    img {
        max-width: 10vw;
        max-height: 5vw;
    }
    :hover {
        cursor: pointer;
    }
`
export default Faglig
