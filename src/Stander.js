import React, { Component } from 'react';
import './App.css';
import './stander.css';
import Modal from './components/modal.js';
import stand_info from './data/stand_info.js'

export default class Stander extends Component {
  state = { show: false };

  showModal = (bedrift) => {
    this.setState({ show: true , currBedrift: bedrift});
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  bedriftpop = (e) => {
    console.log(stand_info);
    console.log(e.target);
    console.log(stand_info["dag1"][e.target.id]);
    //make everything blurry
    //make a modal appear
    this.showModal(stand_info["dag1"][e.target.id]);
  };

  stander = (stand_info) => {
    //TODO: differansier basert på hvilke dager det er
    return stand_info["dag1"].map((bedrift, index) => {
      return (
        <div className="button-card-container">
          <button className="button-card"
                  id={index} key={index}
                  onClick={(e)=>{this.bedriftpop(e)}}>
            <img id={index}
                 src={ require("./img/logoer/"+bedrift.logonavn) }
                 alt={bedrift.bedriftnavn}/>
          </button>
        </div>)
    })
  }

  render(){
      return (
          <div className="standbase">
			        <p>Her kommer stander!</p>
              <Modal show={this.state.show} handleClose={this.hideModal} bedrift={this.state.currBedrift}/>
              {this.stander(stand_info)}
          </div>
      );
  }
}
