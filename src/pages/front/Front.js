
import React from 'react';
import styled from 'styled-components'
import Countdown from '../../components/countdown'
import Program from '../program/EttermiddagenProgram'

const Front = () => {
  return (
    <Div>
      <Container>
        <br />
        <Countdown />
        <h1>Velkommen til digital ettermiddagen@ifi</h1>
        <h2>Vi håper du tar turen innom og prater litt med de ulike  bedriftene i standområdet, de gleder seg til å møte deg! Parallellt med det digitale standområdet kjøres det ulike foredrag, og vi håper du finner noe som er interessant og relevant for deg. Vi har flere konkurranser gående iløpet av dagen, og flere av bedriftene har egne konkurranser iløpet av standtiden deres, så utnytt sjansen deres til å mingle med litt bedrifter over en lav sko i dag. 

<h3>Vi i dagen-styret ønsker deg en flott ettermiddag!</h3>
</h2>
        <br />
      </Container>


      <Program/>
      
      
    </Div >
  );
}

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

    h2{
      font-weight: 400;
    }
    @media screen and (max-width: 800px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export default Front;