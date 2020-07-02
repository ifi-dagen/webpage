import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import Footer from './footer';

class DropDownMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false
    }
  }
  handleClickOutside() {
    this.setState({
      listOpen: false
    })
  }
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{listOpen} = this.state;
    return(
      <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">

        <a className="navbar-brand" href="/index">
          <img className="navbar-logo" src={ require("./img/white_logo.png")} alt="Dagen@ifi logo"/>
        </a>
        <button type="button" className="navbar-toggler-button" data-toggle="collapse" data-target="#navbarResponsive" onClick={() => this.toggleList()}>
          <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>


        {listOpen && <ul className="collapse navbar-collapse navbar-nav ml-auto" id="navbarResponsive">
              <li className="nav-item">
                <Link className="nav-link" to="/program">Program</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dagenifjor">Dagen@ifi i fjor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bedrift">For bedrifter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/frivillig">Bli frivillig</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontakt">Kontakt / om oss</Link>
              </li>
          </ul>}
      </div>
      <div className="navbar-shadow">
        <a className="navbar-brand" href="/index">
          <img className="navbar-logo" src={ require("./img/white_logo.png")} alt="Dagen@ifi logo"/>
        </a>
        <button type="button" className="navbar-toggler-button" data-toggle="collapse" data-target="#navbarResponsive" onClick={() => this.toggleList()}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      </div>
    );
  }

}

function Layout(props) {
  return (
    <div>
      <DropDownMenu />
      <div id="main"> {props.children} </div>
      <div class="container-fluid col_bilde footer_bilde"></div>
      <Footer className="Footer" />
    </div>
  );
}

export default Layout;
