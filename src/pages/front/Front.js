import React from 'react';
import styled from 'styled-components'
import Hovedsponsor from './hovedsponsor'
import Sponsor from './sponsor'
import HvaEr from './hvaer'
import Digitalt from './digitalt'
import bilde from "../../img/ettermidagen_at_ifi-0480.jpg"
import { Link } from "react-router-dom"
import { peepsInfo } from './peeps'
import ProgramStatus from '../../components/ProgramStatus.js';
import Stander from '../../Stander.js'

const Front = () => {
  return (
    <Div>
      <Container>
        <h1>Den største bedriftsdagen for IT studenter i Oslo.</h1>
        <h3>Verden blir aldri den samme igjen, kom dere på nett og få jobb på Dagen.</h3>
        <DateParagraph />
      </Container>

      <Nav />
      <Stander forside/>
      <Hovedsponsor />

      <GridContainerWrapper>
        <ErGrid>
          <HvaEr />
          <Digitalt />
        </ErGrid>
        <Sponsor />
        <Img src={bilde} style={{ width: "100%" }} alt="Bilde av mennesker utenfor ifi" />
        <h1>Styret 2020</h1>
        <PeepsGrid >
          {peepsInfo.map((peep, index) => (
            <Visitkort2 peep={peep} key={peep.navn} />
          ))}
        </PeepsGrid>
      </GridContainerWrapper>
    </Div >
  );
}

const DateParagraph = () => {
  const Paragraph = styled.h2`
    padding: 1rem;
  `

  return (
    <Paragraph>
      <i className="fas fa-calendar"></i> 24 <i className="fas fa-long-arrow-alt-right"></i> 25 September
    </Paragraph>
  )

}

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

const VisitkortImage = ({ path }) => {
  try {
    const bilde = require("../../img/styret/" + path)
    return <img src={bilde} alt="Bilde av styremedlem" />
  } catch {
    return <img className="round" src={require("../../img/styret/Placeholder.png")} alt="Manglende bilde av personen" />
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

const Img = styled.img`
  display: block;
  border-radius: 1rem;
`

const GridContainerWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 1rem;
  max-width: 900px;
  margin: auto;
  padding: 1rem;
`


const Div = styled.div`
  max-width: 1000px;
  margin: auto;
`

const Container = styled.div`
  max-width: 850px;
  margin: auto;
  padding: 1rem;

  * {
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    color: black;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const Nav = () => {
  return (
    <NavContainer>
      <NavButton>
      <Link to="/program">
        <i className="fas fa-stream"></i>
        <br />
        Digitalt Program
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/for-bedrift">
          <i className="fas fa-at"></i>
          <br />
          For Bedrifter
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/frivillig">
          <i className="fas fa-hand-holding-heart"></i>
          <br />
          Bli Frivillig
        </Link>
      </NavButton>
      <NavItem>
        <ProgramStatus compact />
      </NavItem>
    </NavContainer >
  )
}

const NavContainer = styled.div`
  margin: 0 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, auto));
  grid-row: 2;
  grid-gap: .5rem;

  background-color: #F5F5F5;
  border-radius: 1rem;
`

const NavButton = styled.div`
  text-align: center;
  background-color: deepskyblue;
  padding: .8rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 1rem;
  font-size: 1.2rem;

  a{
    color: white;
  }
`


//sett mest mulig av denne stylingen over i programstatus.
const NavItem = styled.div`
  text-align: center;
  background-color: #F5F5F5;
  color: rgb(80,89,98);
  text-decoration: none;
  font-weight: bold;
  border-radius: 1rem;
  font-size: 1.2rem;
  grid-column: 1/-1;
`

const ErGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export default Front;
