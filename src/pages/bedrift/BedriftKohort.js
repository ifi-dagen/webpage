import React from 'react'
import styled from 'styled-components'
import Bedrift from './bedrift_info.json'

/* 

*/

const importAll = (r) => {
    let logos = {}
    r.keys().map((item) => {
        logos[item.replace('./', '')] = r(item)
    })
    return logos
}

const logos = importAll(
    require.context('../../img/logoer', false, /\.(png|jpe?g|svg)$/)
)

const CompToLogo = (comp) => {
    return logos[comp.logo]
}

const CompToObject = (comp) => {
    console.log(comp)
    return Bedrift.find((x) => x.name === comp)
}

const BedriftKohort = ({
    comp1,
    comp2,
    comp3,
    setSelected,
    setCompany,
    kohort,
}) => {
    const c1 = CompToObject(comp1)
    const c2 = CompToObject(comp2)
    const c3 = CompToObject(comp3)
    if (kohort === 1) {
        return (
            <InnerContainerComp>
                <Comp1>
                    <img
                        src={CompToLogo(c1)}
                        onClick={() => {
                            setCompany(c1)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>
                </Comp1>
                <Comp2>
                    <img
                        src={CompToLogo(c2)}
                        onClick={() => {
                            setCompany(c2)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>{' '}
                </Comp2>
                <Comp3>
                    <img
                        src={CompToLogo(c3)}
                        onClick={() => {
                            setCompany(c3)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>{' '}
                </Comp3>
            </InnerContainerComp>
        )
    } else if (kohort === 2) {
        return (
            <InnerContainerComp2>
                {/* <Time>
                    {c1.standtime[0]} -{c1.standtime[1]}
                </Time> */}
                <Comp1>
                    <img
                        src={CompToLogo(c1)}
                        onClick={() => {
                            setCompany(c1)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>
                </Comp1>
                <Comp2>
                    <img
                        src={CompToLogo(c2)}
                        onClick={() => {
                            setCompany(c2)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>{' '}
                </Comp2>
                <Comp3>
                    <img
                        src={CompToLogo(c3)}
                        onClick={() => {
                            setCompany(c3)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>{' '}
                </Comp3>
            </InnerContainerComp2>
        )
    } else if (kohort === 3) {
        return (
            <InnerContainerComp3>
                {/* <Time>
                    {c1.standtime[0]} -{c1.standtime[1]}
                </Time> */}
                <Comp1>
                    <img
                        src={CompToLogo(c1)}
                        onClick={() => {
                            setCompany(c1)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>
                </Comp1>
                <Comp2>
                    <img
                        src={CompToLogo(c2)}
                        onClick={() => {
                            setCompany(c2)
                            setSelected('bedrift')
                        }}
                        alt=""
                    ></img>{' '}
                </Comp2>
            </InnerContainerComp3>
        )
    } else {
        return <>PROMP</>
    }
}

export default BedriftKohort

const InnerContainerComp = styled.div`
    display: grid;
    grid-area: kohort1;
    grid-template-columns: 20vw;

    grid-template-areas:
        'c1'
        'c2'
        'c3';
    padding: 2em;
    justify-items: center;
    align-items: center;
    border: solid;

    background-color: seashell;
`

const InnerContainerComp2 = styled.div`
    display: grid;
    grid-area: kohort2;
    grid-template-columns: 20vw;

    grid-template-areas:
        'c1'
        'c2'
        'c3';
    padding: 2em;
    justify-items: center;
    align-items: center;
    border: solid;
    background-color: seashell;
`

const InnerContainerComp3 = styled.div`
    display: grid;
    grid-area: kohort3;
    grid-template-columns: 20vw;
    grid-template-areas:
        'c1'
        'c2'
        'c3';
    padding: 2em;
    justify-items: center;
    align-items: center;
    border-right: solid;
`
const Comp1 = styled.div`
    grid-area: c1;
    place-items: center;
    img {
        display: block;
        max-width: 150px;
        max-height: 70px;
        width: auto;
        height: auto;
        overflow: hidden;
    }
    :hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.5s ease;
        background-color: #99c24d;
        box-shadow: 1px 5px 5px;
    }
`

const Comp2 = styled.div`
    grid-area: c2;
    place-items: center;
    img {
        display: block;
        max-width: 150px;
        max-height: 70px;
        width: auto;
        height: auto;
        overflow: hidden;
    }
    :hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.5s ease;
        background-color: #f18f01;
        box-shadow: 1px 5px 5px;
    }
`
const Comp3 = styled.div`
    grid-area: c3;
    place-items: center;
    img {
        display: block;
        max-width: 150px;
        max-height: 70px;
        width: auto;
        height: auto;
        overflow: hidden;
    }
    :hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.5s ease;
        background-color: #23b5d3;
        box-shadow: 1px 5px 5px;
    }
`

// const Comp4 = styled.div`
//     grid-area: c4;
//     display: flex;

//     place-items: center;
//     img {
//         display: block;
//         max-width: 150px;
//         max-height: 70px;
//         width: auto;
//         height: auto;
//         overflow: hidden;
//     }
//     :hover {
//         cursor: pointer;
//     }
// `

// const Time = styled.div`
//     grid-area: time;
//     display: flex;
//     place-items: center;
//     padding-right: 2em;
//     justify-items: center;
//     img {
//         height: 110%;
//         width: 70%;
//     }
//     color: black;
//     font-size: 15px;
// `
