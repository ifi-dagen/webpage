
import React from 'react';
import styled from 'styled-components'


const Program = () => {
    return( 
    <Container>
        <Intro>
            <h1>ettermiddagen@IFI 2021</h1>
            <p>Cupidatat adipisicing cupidatat excepteur eiusmod Lorem aliquip amet eu nisi Lorem dolor. Eiusmod adipisicing mollit nisi sit non. Sunt Lorem reprehenderit do aute pariatur culpa ipsum esse occaecat anim veniam aliqua. Sint qui excepteur laboris exercitation incididunt ea anim occaecat ut. Enim veniam aute ex sit velit incididunt exercitation culpa voluptate adipisicing elit.

Nostrud laboris irure in nisi non enim. Officia voluptate tempor incididunt ea adipisicing nulla magna eu do non nisi dolore exercitation aute. Sint culpa mollit nostrud nulla in consequat mollit cillum fugiat minim consectetur minim. Deserunt sunt quis dolor aliqua duis fugiat excepteur do in fugiat sunt consequat ullamco voluptate. Non officia quis occaecat non adipisicing ad dolore adipisicing consequat. Amet consectetur magna adipisicing quis.

In irure eu anim laboris laboris cillum culpa occaecat aute est adipisicing consequat irure ipsum. Amet veniam fugiat quis reprehenderit velit do ipsum sint qui ut. Sunt officia nulla irure cillum est elit quis ex. Qui sit ut Lorem in enim esse est fugiat non. Voluptate amet ea Lorem qui elit quis exercitation non qui aliquip eu ullamco.

Enim consectetur irure deserunt non ut quis anim irure velit sit tempor velit non. Consectetur consequat exercitation exercitation ad in labore aliqua commodo excepteur ut labore labore ipsum. Nisi ad ea esse incididunt elit enim consequat pariatur labore nostrud. Minim ea qui est veniam laborum ipsum. Ullamco officia do officia aliquip ad labore..</p>
        </Intro>
        <Comp>
            <h2>Bedriter</h2>
            <InnerContainerComp>
                <Time>12:00-13:00<img src={require("./curlyboi.png")}></img></Time>
                <Comp1><img src={require("../../img/logoer/Bekk.png")}></img></Comp1>
                <Comp2><img src={require("../../img/logoer/ABB.png")}></img></Comp2>
                <Comp3><img src={require("../../img/logoer/Accenture.png")}></img></Comp3>
                <Comp4><img src={require("../../img/logoer/Bouvet.png")}></img></Comp4>
            </InnerContainerComp>
            <InnerContainerComp>
                <Time>13:00-14:00<img src={require("./curlyboi.png")}></img></Time>
                <Comp1><img src={require("../../img/logoer/Bredvid.png")}></img></Comp1>
                <Comp2><img src={require("../../img/logoer/capgemini.png")}></img></Comp2>
                <Comp3><img src={require("../../img/logoer/cgi.png")}></img></Comp3>
                <Comp4><img src={require("../../img/logoer/ciber_experis.png")}></img></Comp4>
            </InnerContainerComp>
            <InnerContainerComp>
                <Time>14:00-15:00<img src={require("./curlyboi.png")}></img></Time>
                <Comp1><img src={require("../../img/logoer/Cisco.png")}></img></Comp1>
                <Comp2><img src={require("../../img/logoer/clave.png")}></img></Comp2>
                <Comp3><img src={require("../../img/logoer/cognite.png")}></img></Comp3>
                <Comp4><img src={require("../../img/logoer/Creuna.png")}></img></Comp4>

            </InnerContainerComp>
        </Comp>
        <Edu>
            <h2>Faglig</h2>
            <InnerContainerEdu>
                <Talk>Blablabla</Talk>
                <TalkComp><img src={require("../../img/logoer/Creuna.png")}></img></TalkComp>
            </InnerContainerEdu>
        </Edu>
    </Container>)
}



const Border = styled.div`
    border: 2px;
    border-style: solid;
    border-color: purple;
    padding: 1em;
    border-radius: 5px;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 15vw 35vw 10vw 25vw 15vw;
    grid-template-areas:
    ". intro intro intro ."
    ". comp . edu ."
`


const Intro = styled.div`
    p {
        padding: 1em;
    }
    grid-area: intro;
    display: grid;
    place-items: center;
`

const Comp = styled.div`
    grid-area: comp;
    h2 {
        display: grid;
        place-items: center;
         
    }
 
`

const Icon = styled.div`
border: 2px;
border-style: solid;
border-color: red;
padding: 1em;
border-radius: 5px;

`

const Edu = styled.div`
    grid-area: edu;  
`



const InnerContainerComp = styled.div`
    display: grid;
  
    grid-template-areas:
    "time c1 c2"
    "time c3 c4";
    padding: 1em;
    height:20vw;
    width: 30vw;
    img {
        max-width:100%;
        height:auto;
         display: grid;
        place-items: center;
    }   
`


const Comp1 = styled.div`
    grid-area: c1;
    
`

const Comp2 = styled.div`
    grid-area: c2;
    
    
`
const Comp3 = styled.div`
    grid-area: c3;
    
`
const Comp4 = styled.div`
    grid-area: c4;

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
    font-size: 30px;
`



const InnerContainerEdu = styled.div`
    grid-area: edu;
    border: 2px;
    display: grid
    grid-template-columns: 15 vw 10vw;
    grid-template-areas: 
    "title company"
`
const Talk = styled.div`
    grid-area: title;

`

const TalkComp = styled.div`
    grid-area: company
    img {
        max-width:100%;
        height:auto;
        display: grid;
        place-items: center;
    }   
`



export default Program