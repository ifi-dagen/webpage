import React, { Component } from 'react';
import Stander from './Stander';


export default class AlleStander extends Component {
  render(){
    return(
      <div>
        <Stander testmode={false} dag="dag1"/>
        <Stander testmode={false} dag="dag2"/>
      </div>
    )
  }
}
