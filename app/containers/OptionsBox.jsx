"use strict";

import React, { Component } from 'react'
import {CheckBox, RadioButton} from '../components/FormWidgets'




export default class  OptionsBox extends Component{
  constructor(){
    super();
  }

    render(){



    return(
      <div >
        <RadioButton />
        <CheckBox />
      </div>
    )
  }
}
