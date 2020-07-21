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
    console.log(e.target.id);
    console.log(stand_info["dag1"][e.target.id]);
    //make everything blurry
    //make a modal appear
    this.showModal(stand_info["dag1"][e.target.id]);
  };

  render(){
      return (
          <div className="standbase">
			        <p>Her kommer stander!</p>
              <Modal show={this.state.show} handleClose={this.hideModal} bedrift={this.state.currBedrift}/>
              <button className="btn btn-lg" id="0" onClick={(e)=>{this.bedriftpop(e)}}>besøk meg!</button>
              <button className="btn btn-lg" id="1" onClick={(e)=>{this.bedriftpop(e)}}>besøk meg!</button>
          </div>
      );
  }
}
