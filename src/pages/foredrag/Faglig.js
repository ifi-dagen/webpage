import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Faglig = () => {
    return (
        <>
            <InnerContainerEdu style={{ gridArea: 'foredrag1' }}>
                <Link
                    to={{
                        pathname: '/foredrag/Netcompany',
                    }}
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontStyle: 'italic',
                    }}
                >
                    <Talk>
                        <Tag>Foredrag 13:00-13:30</Tag>
                        <h3>Death By Powerpoint</h3>
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
                <Link
                    to={{
                        pathname: '/foredrag/Bekk',
                    }}
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontStyle: 'italic',
                    }}
                >
                    <Talk>
                        <Tag>Foredrag 14:00-14:30</Tag>
                        <h3>Impostor Syndrome</h3>
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
                <Link
                    to={{
                        pathname: '/foredrag/Accenture',
                    }}
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontStyle: 'italic',
                    }}
                >
                    <Talk>
                        <Tag>Foredrag 15:00-15:30</Tag>
                        <h3>Accenture Tech Vision</h3>
                    </Talk>
                    <TalkComp>
                        <img
                            src={require('../../img/logoer/Accenture.png')}
                            alt=""
                        ></img>
                    </TalkComp>
                </Link>
            </InnerContainerEdu>
        </>
    )
}

const InnerContainerEdu = styled.div`
    display: grid;
    width: 20vw;
    margin: 0.5em;
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
        background-color: #d2b7e5;
        cursor: pointer;
    }

    padding: 1em;
    justify-items: center;

    @media screen and (max-width: 815px) {
        grid-template-columns: 100vw;
        grid-template-rows: 80vh;
        margin-top: 1rem;
        padding: 0;
        width: 90vw;
        margin: 1em;
        height: auto;

        justify-items: start;
    }
`

const Tag = styled.div`
    font-size: 1.2rem;
    border-radius: 25px;
    background-color: #ff6b6b;
    width: 15vw;
    text-align: center;
    color: snow;
    @media screen and (max-width: 815px) {
        width: 52vw;
        margin: 1em;
    }
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
