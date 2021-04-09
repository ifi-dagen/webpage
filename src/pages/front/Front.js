
import React from 'react';
import styled from 'styled-components'

const Front = () => {
  return (
    <Div>
      <Container>
        <h1>Velkommen til digital ettermiddagen@ifi.</h1>
        <h3 >Vil du være med i dagen@ifi som intern? <a href="https://forms.gle/JLYYu7rds4MNifKq9">Søk her!</a></h3>
      </Container>

      
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