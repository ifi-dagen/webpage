import React from 'react'
import styled from 'styled-components'
import Bedrift from './bedrift_info.json'
import { useHistory } from 'react-router-dom'
import { BedriftKomponent } from './BedriftKomponent'
import { useState, useEffect } from 'react'

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
    return Bedrift.find((x) => x.name === comp)
}

const BedriftKohort = ({
    comp1,
    comp2,
    comp3,
    comp4,
    setSelected,
    company,
    setCompany,
}) => {
    const c1 = CompToObject(comp1)
    const c2 = CompToObject(comp2)
    const c3 = CompToObject(comp3)
    const c4 = CompToObject(comp4)
    return (
        <InnerContainerComp>
            <Time>
                {c1.standtime[0]} -{c1.standtime[1]}
            </Time>
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
            <Comp4>
                <img
                    src={CompToLogo(c4)}
                    onClick={() => {
                        setCompany(c4)
                        setSelected('bedrift')
                    }}
                    alt=""
                ></img>{' '}
            </Comp4>
        </InnerContainerComp>
    )
}

export default BedriftKohort

const InnerContainerComp = styled.div`
    display: grid;

    grid-template-areas:
        'time c1 c2'
        'time c3 c4';
    padding: 2em;
    height: 20vw;
    width: 35vw;
`

const Comp1 = styled.div`
    grid-area: c1;
    place-items: center;
    display: flex;
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
    }
`

const Comp2 = styled.div`
    grid-area: c2;
    display: flex;
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
    }
`
const Comp3 = styled.div`
    grid-area: c3;
    place-items: center;
    display: flex;
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
    }
`
const Comp4 = styled.div`
    grid-area: c4;
    display: flex;

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
    }
`

const Time = styled.div`
    grid-area: time;
    display: flex;
    place-items: center;
    padding-right: 2em;
    justify-items: center;
    img {
        height: 110%;
        width: 70%;
    }
    color: black;
    font-size: 15px;
`
