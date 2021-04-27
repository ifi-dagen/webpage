
import React from 'react';
import styled from 'styled-components'
import Program from '../program/EttermiddagenProgram'

const Front = () => {
  return (
    <Div>
      <Container>
        <br />
        <h1>Velkommen til digital ettermiddagen@ifi</h1>
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
    @media screen and (max-width: 800px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export default Front;