import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap'

//fakedata functions and info
import {FAKEDATA, datalength, dataKeys, manKeys, schema, dataObjectArray} from '../components/data'


// const stuff = Object.keys(FAKEDATA);

export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      showFilters: true,
      activeSelect: '22'
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
  }
  dropdownSelect(e){
    e.preventDefault();
    let value = e.currentTarget.value;
    let filter = e.target.options[e.target.selectedIndex].dataset.filter;
    let filterVal = (filter === "true");
    this.setState({ showFilters: filterVal,
                    activeSelect: value});
  }

  render(){
    let options = dataObjectArray.map(option => {
      return <option key={option.props.id} value={option.props.id} data-filter={option.props.filter}>{option.props.id} - {option.props.report} - {option.props.filter.toString()}</option>
    });


    return(
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Label for Dropdown</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={this.dropdownSelect} >
            {options}
          </FormControl>
          <HelpBlock>Grey text: {this.state.activeSelect} - {this.state.showFilters.toString()}</HelpBlock>
        </FormGroup>
        
        {(this.state.showFilters === true)? <OptionsBox  activeSelect={this.state.activeSelect}/> : ''}

        <br />
        <Button type="submit">
          Submit
        </Button>
      </form>

    )
  }
}
