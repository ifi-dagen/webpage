import React, { useState } from 'react'
import styled from 'styled-components'
import BedriftKohort from '../bedrift/BedriftKohort'
import { BedriftKomponent } from '../bedrift/BedriftKomponent'
import Faglig from '../foredrag/Faglig'
import Foredrag from '../foredrag/foredrag'
import "./program.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const Program = () => {
    const [company, setCompany] = useState(null)
    const [talk, setTalk] = useState(null)
    const [selected, setSelected] = useState('timeline')
    if (selected === 'program') {
        return (
            <Container>
                <Intro>
                    <h1>ettermiddagen@IFI 2021</h1>
                    <p>
                        Cupidatat adipisicing cupidatat excepteur eiusmod Lorem
                        aliquip amet eu nisi Lorem dolor. Eiusmod adipisicing
                        mollit nisi sit non. Sunt Lorem reprehenderit do aute
                        pariatur culpa ipsum esse occaecat anim veniam aliqua.
                        Sint qui excepteur laboris exercitation incididunt ea
                        anim occaecat ut. Enim veniam aute ex sit velit
                        incididunt exercitation culpa voluptate adipisicing
                        elit. Nostrud laboris irure in nisi non enim. Officia
                        voluptate tempor incididunt ea adipisicing nulla magna
                        eu do non nisi dolore exercitation aute. Sint culpa
                        mollit nostrud nulla in consequat mollit cillum fugiat
                        minim consectetur minim. Deserunt sunt quis dolor aliqua
                        duis fugiat excepteur do in fugiat sunt consequat
                        ullamco voluptate. Non officia quis occaecat non
                        adipisicing ad dolore adipisicing consequat. Amet
                        consectetur magna adipisicing quis. In irure eu anim
                        laboris laboris cillum culpa occaecat aute est
                        adipisicing consequat irure ipsum. Amet veniam fugiat
                        quis reprehenderit velit do ipsum sint qui ut. Sunt
                        officia nulla irure cillum est elit quis ex. Qui sit ut
                        Lorem in enim esse est fugiat non. Voluptate amet ea
                        Lorem qui elit quis exercitation non qui aliquip eu
                        ullamco. Enim consectetur irure deserunt non ut quis
                        anim irure velit sit tempor velit non. Consectetur
                        consequat exercitation exercitation ad in labore aliqua
                        commodo excepteur ut labore labore ipsum. Nisi ad ea
                        esse incididunt elit enim consequat pariatur labore
                        nostrud. Minim ea qui est veniam laborum ipsum. Ullamco
                        officia do officia aliquip ad labore..
                    </p>
                </Intro>
                <Comp>
                    <h2>Bedriter</h2>
                    <BedriftKohort
                        comp1="Accenture"
                        comp2="Nav"
                        comp3="Fink"
                        comp4="Fink"
                        setSelected={setSelected}
                        company={company}
                        setCompany={setCompany}
                    />
                    <BedriftKohort
                        comp1="Kolonial"
                        comp2="Netcompany"
                        comp3="NoA Ignite"
                        comp4="NoA Ignite"
                        setSelected={setSelected}
                        company={company}
                        setCompany={setCompany}
                    />
                    <BedriftKohort
                        comp1="Bekk"
                        comp2="Cognite"
                        comp3="Cognite"
                        comp4="Cognite"
                        setSelected={setSelected}
                        company={company}
                        setCompany={setCompany}
                    />
                </Comp>
                <Faglig setSelected={setSelected} setTalk={setTalk} />
            </Container>
        )
    } else if (selected === 'bedrift') {
        console.log(selected)
        return <BedriftKomponent bedrift={company} />
    } else if (selected === 'faglig') {
        console.log(selected)
        return <Foredrag id={talk} />
    }
    else if (selected === 'timeline') {
        return (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="adjustRight"
            style={ {color: "black"}}
            contentStyle={{ background: 'rgb(33, 150, 243)', color:"black"}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="12:00"
            visible={true}
            position="right"
            iconStyle={{ background: 'rgb(33, 150, 243)'}}
          >
            <h3 className="vertical-timeline-element-title">Åningssermoni</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
            Velkommen til ettermiddagen@ifi
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="adjustRight"
            date="13:00"
            visible={true}
            position="left"
            contentStyle={{ background: 'rgb(33, 150, 243)', color:"black"}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <BedriftKohort comp1="Accenture" comp2="Nav" comp3="Fink" setCompany={setCompany} setSelected={setSelected}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="talk adjustTalk"
            date="13:30"
            visible={true}
            iconStyle={{ background: 'purple', color: '#fff' }}
            contentStyle={{ background: 'purple', color:"black"}}

            contentArrowStyle={{ borderRight: '7px solid  purple' }}
            position="right"
          >
            <h3 className="vertical-timeline-element-title">Foredrag 1</h3>
            <Faglig setSelected={setSelected} setTalk={setTalk}/>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="adjustRight"
            date="14:00"
            visible={true}
            position="left"
            contentStyle={{ background: 'rgb(33, 150, 243)', color:"black"}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <BedriftKohort comp1="Kolonial" comp2="Netcompany" comp3="NoA Ignite" setCompany={setCompany} setSelected={setSelected}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="talk adjustTalk"
            date="14:30"
            visible={true}
            iconStyle={{ background: 'purple', color: '#fff' }}
            contentStyle={{ background: 'purple', color:"black"}}

            contentArrowStyle={{ borderRight: '7px solid  purple' }}
            position="right"
          >
            <h3 className="vertical-timeline-element-title">Foredrag 2</h3>
            <Faglig setSelected={setSelected} setTalk={setTalk}/>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="adjustRight"
            date="15:00"
            visible={true}
            position="left"
            contentStyle={{ background: 'rgb(33, 150, 243)', color:"black"}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <BedriftKohort comp1="Bekk" comp2="Cognite" comp3="Cognite" setCompany={setCompany} setSelected={setSelected}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="talk adjustTalk"
            date="15:30"
            visible={true}
            iconStyle={{ background: 'purple', color: '#fff' }}
            contentStyle={{ background: 'purple', color:"black"}}

            contentArrowStyle={{ borderRight: '7px solid  purple' }}
            position="right"
          >
            <h3 className="vertical-timeline-element-title">Foredrag 3</h3>
            <Faglig setSelected={setSelected} setTalk={setTalk}/>
            
          </VerticalTimelineElement>
          
        
        </VerticalTimeline>)
    }
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 15vw 35vw 10vw 25vw 15vw;
    grid-template-areas:
        '. intro intro intro .'
        '. comp split edu .';
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
    h2  {
        display: grid;
        place-items: center;
    }
`

// const Icon = styled.div`
//     img {
//         display: block;
//         max-width: 150px;
//         max-height: 70px;
//         width: auto;
//         height: auto;
//         overflow: hidden;
//     }
// `

// const Split = styled.div`
//     grid-area: split;
//     height: 3vw;
//     font-size: 14px;
// `

export default Program
