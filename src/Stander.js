import React, { Component } from 'react';
import './App.css';
import './stander.css';
import Modal from './components/modal.js';

export default class Stander extends Component {
  state = { show: false };

  showModal = (bedrift) => {
    this.setState({ show: true , currBedrift: bedrift});
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  bedriftpop = (e) => {
    console.log(e.target.id);
    //make everything blurry
    //make a modal appear
    this.showModal(e.target.id);

  };

    render(){
        return (
            <div className="standbase">
				        <p>Her kommer stander!</p>
                <Modal show={this.state.show} handleClose={this.hideModal} bedrift={this.state.currBedrift}/>
                <button className="btn btn-lg" id="en kul bedrift" onClick={(e)=>{this.bedriftpop(e)}}>besøk meg!</button>
                <button className="btn btn-lg" id="enda en kul bedrift" onClick={(e)=>{this.bedriftpop(e)}}>besøk meg!</button>
            </div>
        );
    }

}
