import React from 'react'
import styled from 'styled-components'

const Faglig = ({ setSelected, setTalk }) => {
    const updateState = (id) => {
        setSelected('faglig')
        setTalk(id)
    }

    return (
        <>
            <InnerContainerEdu style={{ gridArea: 'foredrag1' }}>
                <Talk>
                    <h3 onClick={() => updateState(0)}>Death By Powerpoint</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Netcompany.png')}
                        alt=""
                        onClick={() => updateState(0)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu style={{ gridArea: 'foredrag2' }}>
                <Talk>
                    <h3 onClick={() => updateState(1)}>
                        Superforedrag av Bekk
                    </h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Bekk.png')}
                        alt=""
                        onClick={() => updateState(1)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu style={{ gridArea: 'foredrag3' }}>
                <Talk>
                    <h3 onClick={() => updateState(2)}>
                        Superforedrag av Accenture
                    </h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Accenture.png')}
                        alt=""
                        onClick={() => updateState(2)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
        </>
    )
}

const InnerContainerEdu = styled.div`
    display: grid;
    height: 21vh;

    grid-template-areas:
        'title'
        'company';
    :hover {
        opacity: 1;
        transition: 0.5s ease;
        background-color: #ea526f;
    }

    border-radius: 1rem;
    justify-items: center;
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
