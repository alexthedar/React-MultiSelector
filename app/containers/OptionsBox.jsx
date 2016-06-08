"use strict";

import React, { Component } from 'react'
import {CheckBox, RadioButton, Dropdown, Datepick, TextInput } from '../components/FormWidgets'


export default class  OptionsBox extends Component{
  constructor(props){
    super(props);
  }
    render(){
      var checkbox, radiobutton, dropdown, datestart, dateend, search, textinput;

      if(this.props.checkbox){
        checkbox= <CheckBox checkboxlabels={this.props.checkboxlabels}></CheckBox>
      }

      if(this.props.radiobutton){
        radiobutton= <RadioButton radiobuttonlabels={this.props.radiobuttonlabels}></RadioButton>
      }

      if(this.props.dropdown){
        dropdown= <Dropdown />
      }

      if(this.props.datestart){
        datestart= <Datepick />
      }

      if(this.props.dateend){
        dateend= <Datepick />
      }

      if(this.props.search){
        search= <TextInput />
      }

      if(this.props.textinput){
        textinput= <TextInput />
      }






    return(
      <div >
        {checkbox}
        <hr />
        {radiobutton}
        <hr />
        {dropdown}
        <hr />
        {datestart}
        {dateend}
        <hr />
        {search}
        <hr />
        {textinput}
      </div>
    )
  }
}


// {/*<CheckBox />
// <RadioButton />
// <Dropdown />
// <Datepick />
// <TextInput />*/}
