import React from "react";
import styled from "styled-components";
import HvaEr from "./hvaer";
import Digitalt from "./digitalt";
import bilde from "../../img/ettermidagen_at_ifi-0480.jpg";
import { peepsInfo } from "./peeps";

const Front = () => {
    return (
        <Div>
            <Container>
                <h1>Velkommen til digital ettermiddagen@ifi.</h1>
                <h3>
                    Vi gleder oss til å arrangere vårsemesterets digitale
                    karrieredag for dere! For øyeblikket er nettsiden under litt
                    oppussing, men følg oss på sosiale medier og ikke nøl med å
                    ta kontakt med styret om det er noe du lurer på.
                </h3>
                <DateParagraph />
                <h3>
                    Vil du være med i dagen@ifi som intern?{" "}
                    <a href="https://forms.gle/JLYYu7rds4MNifKq9">Søk her!</a>
                </h3>
            </Container>

            <GridContainerWrapper>
                <ErGrid>
                    <HvaEr />
                    <Digitalt />
                </ErGrid>

                <Img
                    src={bilde}
                    style={{ width: "100%" }}
                    alt="Bilde av mennesker utenfor ifi"
                />
                <h1>Si hei til det nye styret 2021-2022!</h1>
                <PeepsGrid>
                    {peepsInfo.map((peep, index) => (
                        <Visitkort2 peep={peep} key={peep.navn} />
                    ))}
                </PeepsGrid>
            </GridContainerWrapper>
        </Div>
    );
};

const DateParagraph = () => {
    const Paragraph = styled.h2`
        padding: 1rem;
        color: deepskyblue;
    `;

    return (
        <Paragraph>
            <i className="fas fa-calendar"></i> 30. April
        </Paragraph>
    );
};

const Visitkort2 = ({ peep }) => {
    return (
        <Peep key={peep.navn}>
            <VisitkortImage path={peep.image} />
            <p>
                <b>{peep.navn}</b>
            </p>
            <p>{peep.rolle.tittel}</p>
            <p>{peep.rolle.epost}@dagenatifi.no</p>
        </Peep>
    );
};

const VisitkortImage = ({ path }) => {
    try {
        const bilde = require("../../img/styret/" + path);
        return <img src={bilde} alt="Bilde av styremedlem" />;
    } catch {
        return (
            <img
                className="round"
                src={require("../../img/styret/Placeholder.png")}
                alt="Manglende bilde av personen"
            />
        );
    }
};

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
`;

const PeepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
`;

const Img = styled.img`
    display: block;
    border-radius: 1rem;
`;

const GridContainerWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-gap: 1rem;
    max-width: 900px;
    margin: auto;
    padding: 1rem;
`;

const Div = styled.div`
    max-width: 1000px;
    margin: auto;
`;

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
`;

/*
const Nav = () => {
  return (
    <NavContainer>
      <NavButton to="/program">
        <i className="fas fa-stream"></i>
        <br />
        Digitalt program
      </NavButton>
      <NavButton to="/for-bedrift">
        <i className="fas fa-at"></i>
        <br />
          For bedrifter
      </NavButton>
      <NavButton to="/studenter">
        <i className="fas fa-user-graduate"></i>
        <br />
          For studenter
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

const NavButton = styled(Link)`
  text-align: center;
  background-color: deepskyblue;
  padding: .8rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.25s;

  :hover{
    background: dodgerblue;
  }
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
*/

const ErGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`;

export default Front;
