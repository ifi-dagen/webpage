import React, { Component } from 'react';
import './App.css';
import Sponsor from './components/Sponsor';
import './front.css';

//for implementasjon av datafetching, sjekk ut dagen-today
class Front extends Component {
  render() {
    return (
      <div>
        <div id="banner" class="parallax">
          <div class="container">
            <div class=" text-center caption">
              <img class="front-logo" src={ require('./img/Logo_webpage_2020.svg')} alt="dagen@ifi logo" />
              <h1>Den største bedriftsdagen i Oslo</h1>
              <h2 id="demo" class="hidden">04 : 22 : 45 : 12</h2>
              <h3>24. og 25. September, Ole Johan Dahls hus</h3>
              <a class="btn btn-lg btn-disabled" href="/program">Program kommer!</a>
            </div>
          </div>
        </div>

        <div id="info" class="container-fluid hvit-bg">
          <div class="row">
            <div class="col-md-4 offset-1 hva_er_dagen">
              <h2 class="svart_overskrift">Hva er dagen@ifi?</h2>
              <p>
                En flott arena for studenter å møte bedrifter og se hva slags muligheter man har i arbeidslivet med
                en utdannelse innen informatikk, og det er en flott arena for bedrifter å markedsføre seg selv til
                informatikkstudenter over alle trinn.
              </p>
            </div>

            <div class="col-md-4 hvor_og_naar">
              <h2 class="svart_overskrift">Hvor og når?</h2>
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
        <div class="hidden">
          <Sponsor/>
        </div>
      </div>
    );
  }
}

export default Front;
