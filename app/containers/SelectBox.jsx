import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap'


const stuff = Array.from(Array(10).keys());
export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      //need selected fropdown to determine option display
      //should work similar to navbar buttons except optionsbox will determin what is showed
    }
    // this.buttonClick = this.buttonClick.bind(this)
  }


  render(){
    let options = stuff.map(option => {
      return <option key={option} value="{option + 1}">{option + 1}</option>
    })
    return(
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Label for Dropdown</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            {options}
          </FormControl>
          <HelpBlock>Greyed text beneath</HelpBlock>
        </FormGroup>
        <OptionsBox />
        <br />
        <Button type="submit">
          Submit
        </Button>
      </form>
    )
  }
}
