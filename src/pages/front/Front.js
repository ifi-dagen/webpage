import React from 'react';
import styled from 'styled-components'
import Hovedsponsor from '../Sponsor';
import Stander from '../../Stander';
import './front.css';
import '../../App.css';

const Front = () => {
  return (
    <div>
      <div className=" text-center caption">
        <img className="front-logo" src={require('../../img/Logo_webpage_2020.svg')} alt="dagen@ifi logo" />
        <h1>Vi arrangerer den største bedriftsdagen for IT studenter i Oslo</h1>
        <h2 id="demo" className="hidden ">04 : 22 : 45 : 12</h2>
        <h3>Gjør deg klar for to digitale bedriftsdager: 24. og 25. september</h3>
        <h3>Fortell oss at du kommer på Facebook arrangementet <a href="https://facebook.com/events/s/dagenifi-2020/775866226583870/?ti=icl"> her</a></h3>
        <a className="btn btn-lg btn-disabled" href="/program">Program kommer!</a>
      </div>
      <Stander testmode={false} />

      <Hovedsponsor />

      <div id="info" className="container-fluid hvit-bg">
        <div className="row">
          <div className="col-md-4 offset-1 hva_er_dagen">
            <Hvaer />
          </div>

          <div className="col-md-4 hvor_og_naar">
            <Aarets />
          </div>

        </div>
      </div>
    </div >
  );
}


const Hvaer = () => {
  return (
    <Wrapper>
      <h2 className="svart_overskrift blue">Hva er dagen@ifi?</h2>
      <Text>
        På dagen@ifi får du som student møte bedrifter
        og se hva slags muligheter du har i arbeidslivet med en utdanning innen informatikk.
        Dette er en flott arena for bedrifter synliggjøre seg, og for å komme i kontakt
        med informatikkstudenter over alle trinn.
      </Text>
    </Wrapper>
  )
}

const Aarets = () => {
  return (
    <Wrapper>
      <h2 className="svart_overskrift blue">dagen@ifi 2020</h2>
      <Text>
        Bedriftsdagen i år blir heldigital og skjer over 2 dager.
        På denne nettsiden kommer det snart en oversikt over alle bedrifter som deltar.
        Hver bedrift vil ha sitt eget zoom rom som du kan besøke,
        hvor de har egne opplegg og konkurranser, samt aktuelle stillingsannonser.
      </Text>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background: none;
  text-align: left;
`

const Text = styled.p`
  color: black;
  text-align: left;
`


export default Front;