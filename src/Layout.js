import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

class DropDownMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOpen: false
    }
  }
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  toggleList(){
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


function Layout(props){
  return(
      <div>
        <DropDownMenu/>
        <div id="main">
              {props.children}
        </div>
      	<div className="container-fluid col_bilde footer_bilde">
      		<div className="row">
      		</div>
      	</div>

      	<div id="footer" className="container-fluid">
      		<div className="row">

      			<div className="col-md-3">
      				<br/> dagen@ifi
      			</div>

      			<div className="col-md">
      			</div>

      			<div className="col-md-5">

      				<div className="row">

      					<div className="col-md">
      						<a href="#https://www.facebook.com/dagenatifi"><i className="fab fa-facebook-square fa-2x"></i></a>
      						<br/><a href="#https://www.facebook.com/dagenatifi">dagenatifi</a>
      					</div>
      					<div className="col-md">
      						<a href="#https://www.instagram.com/dagenatifi/"><i className="fab fa-instagram fa-2x"></i></a>
      						<br/><a href="#https://www.instagram.com/dagenatifi/">@dagenatifi</a>
      					</div>

      				</div>

      			</div>

      		</div>
      	</div>
      </div>
    );
  }


export default Layout;
