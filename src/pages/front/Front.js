import React from 'react';
import styled, { keyframes } from 'styled-components'
import Hovedsponsor from '../Sponsor';
import bilde from "../../img/ettermidagen_at_ifi-0480.jpg"
import Visitkort from "../../components/Visitkort"
import { Link } from "react-router-dom"

const Front = () => {



  return (
    <Div>
      <Container>
        <h1>Den største bedriftsdagen for IT studenter i Oslo.</h1>
        <h3>Verden blir aldri den samme igjen, kom dere på nett og få jobb på Dagen.</h3>
        <DateParagraph />

      </Container>

      <Nav />
      <Hovedsponsor />

      <GridContainerWrapper>
        <ErGrid>
          <HvaER />
          <DagenER />
        </ErGrid>
        <Img src={bilde} style={{ width: "100%" }} />
        <h1>Styret 2020</h1>
        <PeepsGrid>
          {peepsInfo.map((peep, index) => (
            <Visitkort2 peep={peep} />
          ))}
        </PeepsGrid>
      </GridContainerWrapper>s
    </Div >
  );
}


const DateParagraph = () => {
  const Paragraph = styled.h2`
    padding: 1rem;
  `

  return (
    <Paragraph>
      <i class="fas fa-calendar"></i> 24 <i class="fas fa-long-arrow-alt-right"></i> 25 September
    </Paragraph>
  )

}

const Visitkort2 = ({ peep }) => {
  return (
    <Peep>
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
    return <img src={bilde} />
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
      <Link to="/program">
        <i class="fas fa-stream"></i>
        <br />
        Digitalt Program
        </Link>
      <Link to="/for-bedrift">
        <i class="fas fa-at"></i>
        <br />
        For Bedrifter
      </Link>
      <Link to="/frivillig">
        <i class="fas fa-hand-holding-heart"></i>
        <br />
        Bli Frivillig
      </Link>
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

  a {
    text-align: center;
    background-color: deepskyblue;
    padding: .8rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 1rem;
    font-size: 1.2rem;
  }

`

const HvaER = () => {
  return (
    <Wrapper>
      <h2>Møt bedrifter</h2>
      <Text>
        Vi er den beste arenaen for bedrifter og studenter å komme i kontakt.
      </Text>
    </Wrapper>
  )
}

const DagenER = () => {
  return (
    <Wrapper>
      <h2>Digitalt i 2020</h2>
      <Text>
        Bedriftsdagen i år blir heldigital og skjer over 2 dager.
        På denne nettsiden kommer det snart en oversikt over alle bedrifter som deltar.
        Hver bedrift vil ha sitt eget zoom rom som du kan besøke,
        hvor de har egne opplegg og konkurranser, samt aktuelle stillingsannonser.
      </Text>
    </Wrapper>
  )
}


const ErGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

const Wrapper = styled.div`
  padding: 1rem;
  background: none;
  text-align: left;

  background-color: #F5F5F5;

  border-radius: 1rem;

  h2 {
    text-align: center;
    color: black;
  };

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`

const Text = styled.p`
  color: black;
  text-align: left;
  font-weight: 500;
`


export default Front;



const roller = {
  leder: {
    tittel: "Leder",
    epost: "leder",
  },
  nestleder: {
    tittel: "Nestleder",
    epost: "nestleder"
  },
  bedrift: {
    tittel: "Bedrifts Ansvarlig",
    epost: "bedrift"
  },
  okonomi: {
    tittel: "Økonomi Ansvarlig",
    epost: "okonomi"
  },
  teknisk: {
    tittel: "Teknisk Ansvarlig",
    epost: "teknisk"
  },
  promotering: {
    tittel: "Promoterings Ansvarlig",
    epost: "promotering"
  },
  faglig: {
    tittel: "Faglig Ansvarlig",
    epost: "faglig"
  },
  funk: {
    tittel: "Funksjonær Ansvarlig",
    epost: "funkansvarlig"
  },
  underholdning: {
    tittel: "Underholdning Ansvarlig",
    epost: "underholdning"
  },
  sosialt: {
    tittel: "Sosialt Ansvarlig",
    epost: "sosialt"
  }
}

const peepsInfo = [
  {
    rolle: roller.leder,
    navn: "Lea Nøstdahl",
    image: "LeaNøstdahl.png",
  },
  {
    rolle: roller.nestleder,
    navn: "Silje Marie Flaaten",
    image: "SiljeMarieFlaaten.png",
  },
  {
    rolle: roller.bedrift,
    navn: "Lise Wåsjø",
    image: "LiseWåsjø.png"
  },
  {
    rolle: roller.okonomi,
    navn: "Jonas Roppestad Olsen",
    image: null
  },
  {
    rolle: roller.promotering,
    navn: "Jørgen Skimmeland",
    image: "JørgenSkimmeland.png"
  },
  {
    rolle: roller.promotering,
    navn: "Camilla Christensen",
    image: "CamillaChristensen.png"
  },
  {
    rolle: roller.faglig,
    navn: "Henrik Høybakk Olsvik",
    image: "HenrikHøybakkOlsvik.png"
  },
  {
    rolle: roller.funk,
    navn: "Burhan Sarfraz",
    image: "BurhanSarfraz.png"
  },
  {
    rolle: roller.underholdning,
    navn: "Thea Aksdal Nordgulen",
    image: "TheaAksdalNordgulen.png"
  },
  {
    rolle: roller.sosialt,
    navn: "Nora Vestavik Klingvall",
    image: null
  },
  {
    rolle: roller.teknisk,
    navn: "Kari Stamnes",
    image: "KariStamnes.png"
  }
]