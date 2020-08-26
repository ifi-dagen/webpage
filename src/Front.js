import React, { Component } from 'react';
import './App.css';
import Sponsor from './components/Sponsor';
import './front.css';

//for implementasjon av datafetching, sjekk ut dagen-today
class Front extends Component {
  render() {
    return (
      <div>
        <div id="banner" className="parallax">
          <div className="container">
            <div className=" text-center caption">
              <img className="front-logo" src={ require('./img/Logo_webpage_2020.svg')} alt="dagen@ifi logo" />
              <h1>Den største bedriftsdagen i Oslo</h1>
              <h2 id="demo" className="hidden">04 : 22 : 45 : 12</h2>
              <h3>24. og 25. September, digitalt</h3>
              <h3>hold deg oppdatert <a href="https://facebook.com/events/s/dagenifi-2020/775866226583870/?ti=icl"> her</a></h3>
              <a className="btn btn-lg btn-disabled" href="/program">Program kommer!</a>
            </div>
          </div>
        </div>

        <div id="info" className="container-fluid hvit-bg">
          <div className="row">
            <div className="col-md-4 offset-1 hva_er_dagen">
              <h2 className="svart_overskrift">Hva er dagen@ifi?</h2>
              <p>
                En flott arena for studenter å møte bedrifter og se hva slags muligheter man har i arbeidslivet med
                en utdannelse innen informatikk, og det er en flott arena for bedrifter å markedsføre seg selv til
                informatikkstudenter over alle trinn.
              </p>
            </div>

            <div className="col-md-4 hvor_og_naar">
              <h2 className="svart_overskrift">Hvor og når?</h2>
              <p>
                <h5>Til vanlig finner du oss på institutt for informatikk ved UiO:</h5>
                <br/>Institutt for informatikk
                <br/>Ole-Johan Dahls hus
                <br/>Gaustadalléen 23B
                <br/>0373 Oslo
              </p>
              <p>
                <h5>Torsdag 24. September
                <br/> Finner du oss på din nærmeste skjerm!
                </h5>

              </p>
            </div>

          </div>
        </div>
        <div className="hidden">
          <Sponsor/>
        </div>
      </div>
    );
  }
}

export default Front;
