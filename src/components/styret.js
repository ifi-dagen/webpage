import React from 'react'
import styled from 'styled-components'
import { peepsInfo } from './peeps'


const Styret = () => {
    return(
        <div>
            <GridContainerWrapper>
        <h1>Si hei til det nye styret 2021-2022!</h1>
        <PeepsGrid >
          {peepsInfo.map((peep, index) => (
            <Visitkort2 peep={peep} key={peep.navn} />
          ))}
        </PeepsGrid>
      </GridContainerWrapper>
        </div>
    )
}


const VisitkortImage = ({ path }) => {
    try {
      const bilde = require("../img/styret/" + path)
      return <img src={bilde} alt="Bilde av styremedlem" />
    } catch {
      return <img className="round" src={require("../img/styret/Placeholder.png")} alt="Manglende bilde av personen" />
    }
  }
  
  const Peep = styled.div`
    img {
      padding: 0 0 1rem 0;
      margin: auto;
      min-width: 0px;
    }
  
    p {
      text-align: center;
      margin: 0;
    }
  `
  
  const PeepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  `
  
  
  const GridContainerWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-gap: 1rem;
    max-width: 900px;
    margin: auto;
    padding: 1rem;
  `
  
const Visitkort2 = ({ peep }) => {
    return (
      <Peep key={peep.navn}>
        <VisitkortImage path={peep.image} />
        <p><b>{peep.navn}</b></p>
        <p>{peep.rolle.tittel}</p>
        <p>{peep.rolle.epost}@dagenatifi.no</p>
      </Peep>
    )
  }

export default Styret;