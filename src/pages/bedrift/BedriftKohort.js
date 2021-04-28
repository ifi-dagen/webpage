import React from 'react'
import styled from 'styled-components'
import Bedrift from '../../data/bedrift_info.json'

const importAll = (r) => {
    let logos = {}
    r.keys().forEach((item) => {
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
                <Comp1
                    onClick={() => {
                        setCompany(c1)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c1)} alt=""></img>
                </Comp1>

                <Comp2
                    onClick={() => {
                        setCompany(c2)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c2)} alt=""></img>{' '}
                </Comp2>
                <Comp3
                    onClick={() => {
                        setCompany(c3)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c3)} alt=""></img>{' '}
                </Comp3>
            </InnerContainerComp>
        )
    } else if (kohort === 2) {
        return (
            <InnerContainerComp2>
                {/* <Time>
                    {c1.standtime[0]} -{c1.standtime[1]}
                </Time> */}
                <Comp1
                    onClick={() => {
                        setCompany(c1)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c1)} alt=""></img>
                </Comp1>
                <Comp2
                    onClick={() => {
                        setCompany(c2)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c2)} alt=""></img>{' '}
                </Comp2>
                <Comp3
                    onClick={() => {
                        setCompany(c3)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c3)} alt=""></img>{' '}
                </Comp3>
            </InnerContainerComp2>
        )
    } else if (kohort === 3) {
        return (
            <InnerContainerComp3>
                <Comp1
                    onClick={() => {
                        setCompany(c1)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c1)} alt=""></img>
                </Comp1>
                <Comp2
                    onClick={() => {
                        setCompany(c2)
                        setSelected('bedrift')
                    }}
                >
                    <img src={CompToLogo(c2)} alt=""></img>{' '}
                </Comp2>
            </InnerContainerComp3>
        )
    } else {
        return <>Her skjedde det noe galt:/</>
    }
}

export default BedriftKohort

const InnerContainerComp = styled.div`
    display: grid;
    grid-area: kohort1;
    grid-template-columns: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    grid-template-areas:
        'c1'
        'c2'
        'c3';
    padding: 1em;
    /* border: solid; */
    background-color: #f4f3ee;
    @media screen and (max-width: 815px) {
        grid-template-columns: 60vw;
        padding: 0;
    }
`

const InnerContainerComp2 = styled.div`
    display: grid;
    grid-area: kohort2;
    grid-template-columns: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    grid-template-areas:
        'c1'
        'c2'
        'c3';
    padding: 1em;
    /* border: solid; */
    background-color: #f4f3ee;
    @media screen and (max-width: 815px) {
        grid-template-columns: 60vw;
        padding: 0;
    }
`

const InnerContainerComp3 = styled.div`
    display: grid;
    grid-area: kohort3;
    grid-template-columns: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    grid-template-areas:
        'c1'
        'c2';
    padding: 1em;
    /* border: solid; */
    background-color: #f4f3ee;
    @media screen and (max-width: 815px) {
        grid-template-columns: 60vw;
        padding: 0;
    }
`
const Comp1 = styled.div`
    grid-area: c1;
    align-self: center;
    img {
        display: block;
        max-width: 250px;
        max-height: 90px;
        width: auto;
        height: auto;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
        padding: 1em;
    }
    :hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.5s ease;
        background-color: #99c24d;
        box-shadow: 1px 5px 5px;
    }
    border-radius: 1rem;
`

const Comp2 = styled.div`
    grid-area: c2;
    align-self: center;
    img {
        display: block;
        max-width: 250px;
        max-height: 90px;
        width: auto;
        height: auto;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
        padding: 1em;
    }
    :hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.5s ease;
        background-color: #f18f01;
        box-shadow: 1px 5px 5px;
    }
    border-radius: 1rem;
`
const Comp3 = styled.div`
    grid-area: c3;
    align-self: center;
    img {
        display: block;
        max-width: 250px;
        max-height: 90px;
        width: auto;
        height: auto;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
        padding: 1em;
    }
    :hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.5s ease;
        background-color: #23b5d3;
        box-shadow: 1px 5px 5px;
    }
    border-radius: 1rem;
`
