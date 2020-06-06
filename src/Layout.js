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
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">

        <a class="navbar-brand" href="/index">
          <img class="navbar-logo" src={ require("./img/white_logo.png")} alt="Dagen@ifi logo"/>
        </a>
        <button type="button" class="navbar-toggler-button" data-toggle="collapse" data-target="#navbarResponsive" onClick={() => this.toggleList()}>
          <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>


        {listOpen && <ul className="collapse navbar-collapse navbar-nav ml-auto" id="navbarResponsive">
              <li class="nav-item">
                <Link class="nav-link" to="/program">Program</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dagenifjor">Dagen@ifi i fjor</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/bedrift">For bedrifter</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/frivillig">Bli frivillig</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/kontakt">Kontakt / om oss</Link>
              </li>
          </ul>}
      </div>
      <div class="navbar-shadow">
        <a class="navbar-brand" href="/index">
          <img class="navbar-logo" src={ require("./img/white_logo.png")} alt="Dagen@ifi logo"/>
        </a>
        <button type="button" class="navbar-toggler-button" data-toggle="collapse" data-target="#navbarResponsive" onClick={() => this.toggleList()}>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
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
      	<div class="container-fluid col_bilde footer_bilde">
      		<div class="row">
      		</div>
      	</div>

      	<div id="footer" class="container-fluid">
      		<div class="row">

      			<div class="col-md-3">
      				<br/> dagen@ifi
      			</div>

      			<div class="col-md">
      			</div>

      			<div class="col-md-5">

      				<div class="row">

      					<div class="col-md">
      						<a href="#https://www.facebook.com/dagenatifi"><i class="fab fa-facebook-square fa-2x"></i></a>
      						<br/><a href="#https://www.facebook.com/dagenatifi">dagenatifi</a>
      					</div>
      					<div class="col-md">
      						<a href="#https://www.instagram.com/dagenatifi/"><i class="fab fa-instagram fa-2x"></i></a>
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
