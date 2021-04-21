import React from 'react'
import styled from 'styled-components'

const Faglig = ({ setSelected, setTalk }) => {
    const updateState = (id) => {
        setSelected('faglig')
        setTalk(id)
    }

    return (
        <Edu>
            <h2>Faglig</h2>
            <InnerContainerEdu>
                <Talk>
                    <h3 onClick={() => updateState(0)}>Superforedrag 1</h3>{' '}
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                        onClick={() => updateState(0)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3 onClick={() => updateState(1)}>Superforedrag 2</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                        onClick={() => updateState(1)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3 onClick={() => updateState(2)}>Superforedrag 3</h3>{' '}
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                        onClick={() => updateState(2)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3 onClick={() => updateState(3)}>Superforedrag 4</h3>{' '}
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                        onClick={() => updateState(3)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>{' '}
            <InnerContainerEdu>
                <Talk>
                    <h3 onClick={() => updateState(4)}>Superforedrag 5</h3>{' '}
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                        onClick={() => updateState(4)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3 onClick={() => updateState(5)}>Superforedrag 6</h3>{' '}
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                        onClick={() => updateState(5)}
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
        </Edu>
    )
}

const Edu = styled.div`
    grid-area: edu;
`

// const Icon = styled.div`
//     img {
//         display: block;
//         max-width: 150px;
//         max-height: 70px;
//         width: auto;
//         height: auto;
//         overflow: hidden;
//     }
// `

const InnerContainerEdu = styled.div`
    grid-area: edu;
    border: 2px;
    display: grid;
    grid-template-columns: 14 vw 6vw;
    grid-template-areas: 'title title title company';
    height: 17%;
`
const Talk = styled.div`
    grid-area: title;
    height: 3vw;
    font-size: 14px;
    padding-top: 5vw;
    padding-bot: 3vw;
    :hover {
        cursor: pointer;
    }
`

const TalkComp = styled.div`
    grid-area: company;
    padding-top: 5vw;
    padding-bot: 3vw;
    img {
        display: block;
        max-width: 6vw;
        max-height: 3vw;
        width: auto;
        height: auto;
    }
    :hover {
        cursor: pointer;
    }
`
export default Faglig
