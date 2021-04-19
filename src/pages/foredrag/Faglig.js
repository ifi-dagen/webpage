import React from 'react'
import styled from 'styled-components'

const Faglig = () => {
    return (
        <Edu>
            <h2>Faglig</h2>
            <InnerContainerEdu>
                <Talk>
                    <h3>Superforedrag 1</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3>Superforedrag 2</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3>Superforedrag 3</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3>Superforedrag 4</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                    ></img>
                </TalkComp>
            </InnerContainerEdu>{' '}
            <InnerContainerEdu>
                <Talk>
                    <h3>Superforedrag 5</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
                    ></img>
                </TalkComp>
            </InnerContainerEdu>
            <InnerContainerEdu>
                <Talk>
                    <h3>Superforedrag 6</h3>
                </Talk>
                <TalkComp>
                    <img
                        src={require('../../img/logoer/Itera.jpg')}
                        alt=""
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
`
export default Faglig
