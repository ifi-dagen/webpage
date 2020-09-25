import React from 'react'
import styled from 'styled-components'


const Etter = () => {
    return (
        <Wrapper>
            <h1>dagen@ifi er over, vi sees i 2021.</h1>
            <h3>Vi vil gjerne høre hva du synes om årets karrieredag!</h3>
            <Evaluering />
              <a href="/stander"><h3>Gikk du glipp av dagen@ifi? se her!</h3></a>
        </Wrapper>
    )
}


const Evaluering = () => {
    return (
        <Link href="https://forms.gle/5aAKjrjzH2yDWue1A">
            <Icon className="fas fa-heart"> </Icon>
            <br />
            Gå til evaluering
        </Link>
    )
}


const Link = styled.a`
align-items: center;
padding: 1em;
`

const Icon = styled.i`
font-size: 10em;
color: deepskyblue;
transition: color 0.30s;
cursor: pointer;

${Link}:hover & {
  color: dodgerblue;
}
`

const Wrapper = styled.div`
    display: grid;
    text-align: center;
    padding: 2em;

    h1 {
        color: black;
    }

`

export default Etter;
