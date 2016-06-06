"use strict";

import React, { Component } from 'react'
import {CheckBox, RadioButton} from '../components/FormWidgets'




export default class  OptionsBox extends Component{
  constructor(props){
    super(props);
  }

    render(){
      if(!this.props.filter){
        this.props = ''
      }
      const stuff = [];
      if(this.props.checkboxlabels){
        var checkboxLabelArray = this.props.checkboxlabels.split(',');
        for(let i=0; i<checkboxLabelArray.length; i++){
          stuff.push(React.createElement('p', null, checkboxLabelArray[i]));
        }
      }



    return(
      <div >
        #{this.props.activeSelect}    filter:{this.props.filter.toString()}    title:{this.props.report}
        <hr />
        <hr />
        <p>Labels</p>
          <p>
            {this.props.checkbox.toString()}
          </p>
          <p>
            {this.props.checkboxlabels}
          </p>
        <p>{stuff}</p>
        {this.props.radiobutton.toString()}
        <hr />
        {this.props.radiobuttonlabels}
        <hr />
        {this.props.dropdown.toString()}
        <hr />
        {this.props.dropdownselection}
        <hr />
        {this.props.datestart.toString()}
        <hr />
        {this.props.dateend.toString()}
        <hr />
        {this.props.search.toString()}
        <hr />
        {this.props.textinput.toString()}
        <hr />
        <RadioButton />
        <hr />
        <CheckBox />
      </div>
    )
  }
}
