import React, { Component } from 'react';
import '../pages/kontakt/kontakt.css';

class Visitkort extends Component {

  render() {
    var epost = this.props.epost + "@dagenatifi.no";
    try {
      return (
        <div className="Visitkort">
          <div className="image-wrapper">
            <img className="round" src={require("../img/styret/" + this.props.navn.replace(/\s/g, '') + ".png")} alt="Bilde av personen" />
          </div>
          <br /><br /><b className="blue light-font">{this.props.rolle}</b>
          <br />{this.props.navn}
          <br /><a href={"mailto:" + epost}>{epost}</a>
        </div>
      );
    }
    catch (err) {
      return (
        <div className="Visitkort">
          <div className="image-wrapper">
            <img className="round" src={require("../img/styret/Placeholder.png")} alt="Manglende bilde av personen" />
          </div>
          <br /><br /><b className="blue light-font">{this.props.rolle}</b>
          <br />{this.props.navn}
          <br /><a href={"mailto:" + epost}>{epost}</a>
        </div>
      );
    }
  }
}

export default Visitkort;
