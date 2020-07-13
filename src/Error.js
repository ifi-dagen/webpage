import React, { Component } from 'react';
import './App.css';
import './Error.css';


export default class Error extends Component {

    render(){
        return (
            <div className="feilmelding">
              <h2>Her skjedde det noe gitt! </h2>
              <h4>siden {this.props.location.pathname} finnes ikke ...enda ;) </h4>
            </div>
        );
    }

}
