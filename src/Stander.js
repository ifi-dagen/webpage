import React, { Component } from 'react';
import './App.css';
import './stander.css';
import Modal from './components/modal.js';
import StengeBanner from './components/stengeBanner.js';
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

  stander = (dag,open,closed_message) => {

    return stand_info[dag].map((bedrift, index) => {
      return (
        <div className="button-card-container"
             id={index} key={index}>
          <button className="button-card"
                  id={index} key={index}
                  onClick={open? (e)=>{this.bedriftpop(e)}: ()=>{}}>
            <img id={index}
                 className="button-img"
                 src={ require("./img/logoer/"+bedrift.logonavn) }
                 alt={bedrift.bedriftnavn}
                 />
          </button>
        </div>)
    })
  }

  display = (now) => {
    console.log(now);
    //for testing: edit the following variables as you please!
    const stand_start = new Date(2020, 6, 24, 11, 20, 0, 0);
    const stand_stop = new Date(2020, 6, 24, 11, 30, 0, 0);
    const stand_start2 = new Date(2020, 6, 24, 11, 40, 0, 0);
    const stand_stop2 = new Date(2020, 6, 24, 11, 50, 0, 0);
    let display = (<div>displaied</div>);
    if (now <stand_start){
      display = (<div>Ikke begynt</div>);
    } else if (now <stand_stop){
      display = (this.stander("dag1",true));
    } else if (now <stand_start2){
      const useStyles = ({
            root: {
              position: 'absolute',
            },
            backdrop: {
              position: 'absolute',
            },
          });
      const classes = useStyles;

      display = (<div>
                  <StengeBanner className={classes.root} disablePortal fullwidth melding="Pause frem til kl 13:00, se foredrag!"/>
                  <div className="stand-container">
                    {this.stander("dag1",false)}
                  </div>
                </div>);
    } else if (now <stand_stop2){
      display = (this.stander("dag2",true," "));
    } else {
      display = (<div>Ferdig</div>);
    }
    return(
      display
    )
  }

  render(){
      return (
          <div className="standbase">
			        <p>Her kommer stander!</p>
              <Modal show={this.state.show} handleClose={this.hideModal} bedrift={this.state.currBedrift}/>
              {this.display(new Date())}
          </div>
      );
  }
}
