import React, { Component } from 'react';
import styled from 'styled-components'

class Error extends Component {
  render(){
    return (
      <Feilmelding>
        <h2>Her skjedde det noe gitt! </h2>
        <h4>siden {this.props.location.pathname} finnes ikke ...enda ;) </h4>
      </Feilmelding>
    );
  }
}

const Feilmelding = styled.div`
  display: grid;
  place-items: center;
`

export default Error;
