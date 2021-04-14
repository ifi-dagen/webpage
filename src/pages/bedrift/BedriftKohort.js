import React from 'react'
import styled from 'styled-components'
import Bedrift from "./bedrift_info.json";
import { useHistory } from 'react-router-dom'
import {BedriftKomponent} from "./BedriftKomponent"
import { useState } from "react";



/* 

*/


const importAll = (r) => {
    let logos = {};
    r.keys().map((item, index) => { logos[item.replace('./', '')] = r(item); });
    return logos;
}

  
const logos = importAll(require.context('../../img/logoer', false, /\.(png|jpe?g|svg)$/));

const CompToLogo = (comp) => {
    return logos[comp.logo]
}

const CompToObject = (comp) => {
    return Bedrift.find(x => (x.name === comp))
}

const redirect = (comp, history, setCompany, company) => {
    history.push("/bedrift")
    if (comp) {
        setCompany(comp)
        console.log(company);
    }
       
    return <BedriftKomponent bedrift={company}/>
}

const BedriftKohort = ({comp1, comp2, comp3, comp4}) => {
    const history = useHistory()
    const [company, setCompany] = useState(0)
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
                <img src={CompToLogo(c1)}
                     onClick={() => redirect(c1, history, setCompany, company)}
                     alt=""
                ></img>
            </Comp1>
            <Comp2>
                <img src={CompToLogo(c2)}
                     alt=""
                ></img>
            </Comp2>
            <Comp3>
                <img src={CompToLogo(c3)}
                     alt=""
                ></img>
            </Comp3>
            <Comp4>
                <img src={CompToLogo(c4)}
                     alt=""
                ></img>
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