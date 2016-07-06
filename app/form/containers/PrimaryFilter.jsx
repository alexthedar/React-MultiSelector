'use strict'
import React, { Component } from 'react'
import { getSecondaryOptions } from '../utilities/FilterUtil'
import { filterSwitch } from '../utilities/FilterSwitch'

export default class PrimaryFilter extends Component{
  constructor(props){
    super(props);
    this.state={
      selected: this.props.selected

    }
  }

  getFilter(filter){
    if(filter.props.options !== null){
      this.prepareSecondaryFilters(filter)
    }
    return filterSwitch(filter.props.name, filter.props.options, filter.props.isMulti)
  }

  prepareSecondaryFilters(filter){
    let secondaryFilterArray = getSecondaryOptions(filter.props.options)
    secondaryFilterArray.map((value, index) => {
      if(filter.props.filterNameArray.indexOf(value) === -1){
        filter.props.addFilterToArray(value)
      }
    })
  }

  render(){

    let filter=this.getFilter(this)
    this.filter = this.renderfilter
    return(
      <fieldset>
        {filter}
        <br />
      </fieldset>
    )
  }
}

{/*<legend htmlFor={this.props.filterInfo.name}>
  {this.props.filterInfo.name}
</legend>*/}
