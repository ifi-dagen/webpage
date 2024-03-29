import React from 'react'
import styled from 'styled-components'
import Bedrift from '../../data/bedrift_info.json'
import { Link } from 'react-router-dom'

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

const BedriftKohort = ({ comp1, comp2, comp3, setCompany, kohort }) => {
    const c1 = CompToObject(comp1)
    const c2 = CompToObject(comp2)
    const c3 = CompToObject(comp3)
    if (kohort === 1) {
        return (
            <InnerContainerComp>
                <Tag>Stander 13:00-14:00</Tag>
                <Comp1
                    onClick={() => {
                        setCompany(c1)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c1.name}`,
                        }}
                    >
                        <img src={CompToLogo(c1)} alt=""></img>
                    </Link>{' '}
                </Comp1>

                <Comp2
                    onClick={() => {
                        setCompany(c2)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c2.name}`,
                        }}
                    >
                        <img src={CompToLogo(c2)} alt=""></img>
                    </Link>{' '}
                </Comp2>
                <Comp3
                    onClick={() => {
                        setCompany(c3)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c3.name}`,
                        }}
                    >
                        <img src={CompToLogo(c3)} alt=""></img>
                    </Link>{' '}
                </Comp3>
            </InnerContainerComp>
        )
    } else if (kohort === 2) {
        return (
            <InnerContainerComp2>
                <Tag>Stander 14:00-15:00</Tag>
                <Comp1
                    onClick={() => {
                        setCompany(c1)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c1.name}`,
                        }}
                    >
                        <img src={CompToLogo(c1)} alt=""></img>
                    </Link>
                </Comp1>
                <Comp2
                    onClick={() => {
                        setCompany(c2)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c2.name}`,
                        }}
                    >
                        <img src={CompToLogo(c2)} alt=""></img>
                    </Link>{' '}
                </Comp2>
                <Comp3
                    onClick={() => {
                        setCompany(c3)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c3.name}`,
                        }}
                    >
                        <img src={CompToLogo(c3)} alt=""></img>
                    </Link>{' '}
                </Comp3>
            </InnerContainerComp2>
        )
    } else if (kohort === 3) {
        return (
            <InnerContainerComp3>
                <Tag>Stander 15:00-16:00</Tag>

                <Comp1
                    onClick={() => {
                        setCompany(c1)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c1.name}`,
                        }}
                    >
                        <img src={CompToLogo(c1)} alt=""></img>
                    </Link>{' '}
                </Comp1>
                <Comp2
                    onClick={() => {
                        setCompany(c2)
                    }}
                >
                    <Link
                        to={{
                            pathname: `/bedrift/${c2.name}`,
                        }}
                    >
                        <img src={CompToLogo(c2)} alt=""></img>
                    </Link>{' '}
                </Comp2>
            </InnerContainerComp3>
        )
    } else {
        return <>Her skjedde det noe galt:/</>
    }
}

export default BedriftKohort

const Tag = styled.div`
    font-size: 1.2rem;
    border-radius: 25px;
    background-color: #ff6b6b;
    width: 15vw;
    height: 1.5rem;
    text-align: center;
    color: snow;
    @media screen and (max-width: 815px) {
        width: 52vw;
        margin: 1em;
    }
`

const InnerContainerComp = styled.div`
    display: grid;
    grid-area: kohort1;
    margin: 0.5em;
    grid-template-columns: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    grid-template-areas:
        'tag'
        'c1'
        'c2'
        'c3';
    padding: 1em;
    background-color: #edf6f9;
    @media screen and (max-width: 815px) {
        grid-template-columns: 90vw;
        padding: 0;
    }
    padding: 1em;
`

const InnerContainerComp2 = styled.div`
    display: grid;
    grid-area: kohort2;
    margin: 0.5em;
    grid-template-columns: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    grid-template-areas:
        'tag'
        'c1'
        'c2'
        'c3';
    padding: 1em;
    background-color: #edf6f9;
    @media screen and (max-width: 815px) {
        grid-template-columns: 90vw;
        padding: 0;
    }
`

const InnerContainerComp3 = styled.div`
    display: grid;
    grid-area: kohort3;
    margin: 0.5em;
    grid-template-columns: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    grid-template-areas:
        'tag'
        'c1'
        'c2';
    padding: 1em;
    /* border: solid; */
    background-color: #edf6f9;
    @media screen and (max-width: 815px) {
        grid-template-columns: 90vw;
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
        background-color: #ffcb69;
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
        background-color: #b7e4c7;
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
        background-color: #f8ad9d;
    }
    border-radius: 1rem;
`
