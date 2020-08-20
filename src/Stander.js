import React, { Component } from 'react';
import './App.css';
import './stander.css';
import Modal from './components/modal.js';
import stand_info from './data/stand_info.js'

export default class Stander extends Component {
  state = { show: false, active_stand: false };

  showModal = (bedrift) => {
    this.setState({ show: true , currBedrift: bedrift});
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  active_stand = () => {
    if (!this.state.active_stand)
      this.setState({ active_stand: true });

  };

  deactive_stand = () => {
    if (this.state.active_stand)
      this.setState({ active_stand: false });
  };


  bedriftpop = (e, dag) => {
    console.log(stand_info);
    console.log(e.target);
    console.log(stand_info[dag][e.target.id]);
    //make everything blurry
    //make a modal appear

    this.showModal(stand_info[dag][e.target.id]);
  };

  stander = (dag) => {
    return stand_info[dag].map((bedrift, index) => {
      const link="/stander/"+index;
      return (
        <div className="button-card-container"
             id={index} key={index}>
          <a className="button-card"
                  id={index} key={index}
                  href={link}>
            <img id={index}
                 className="button-img"
                 src={ require("./img/logoer/"+bedrift.logonavn) }
                 alt={bedrift.bedriftnavn}/>
             </a>
        </div>)
    })
  }

  display = (now) => {
    console.log(now);
    //for testing: edit the following variables as you please!
    const stand_start = new Date(2019, 9, 24, 12, 0, 0, 0); //før: melding om at stander åpner "24.09 klxx:xx"
    const stand_stop = new Date(2019, 9, 24, 14, 0, 0, 0); //før: stander
    const stand_start2 = new Date(2020, 9, 25, 12, 0, 0, 0); //før: stand kort med video istede for zoom-link
    const stand_stop2 = new Date(2020, 9, 25, 14, 0, 0, 0); //før: Stander
                                                            //etter: takk for i år!
    let display = (<div>displaied</div>);
    if (now < stand_start){
      display = (<div>Ikke begynt</div>);
    } else if (now < stand_stop){
      this.active_stand();
      display = (this.stander("dag1",true));
    } else if (now < stand_start2){
      this.deactive_stand();
      display = (<div className="stand-container">
                    <p>Denne siden vil være tilgjengelig hele tiden, selv om zoomrommene ikke er åpne.</p>
                    {this.stander("dag1")}
                 </div>);
    } else if (now < stand_stop2){
      this.active_stand();
      display = (this.stander("dag2"));
    } else {
      this.deactive_stand();
      display = (<div className="melding">Takk for i år &lt;3 </div>);
    }
    return(
      display
    )
  }

  render(){
      return (
          <div className="standbase">
			        <p>Her kommer stander! (foreløpig innhold er bare eksempler, med noen lånte logoer)</p>

            <Modal show={this.state.show} handleClose={this.hideModal} bedrift={this.state.currBedrift} active={this.state.active_stand}/>
              {this.display(new Date())}
          </div>
      );
  }
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/xnub-hwu4dU?loop=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

}
