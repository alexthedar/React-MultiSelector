'use strict'

import React, { Component } from 'react'
import {CheckBoxWrapper, RadioButtonWrapper, DropDownWrapper} from '../components/FilterWrappers'

export default class AllFilters extends Component{
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
  }

  getFiltersArray(filters){
    return filters.map(filter => {
      var filterInfo = { ...filter}
      return  (filter.multi) ? <MultiSelectFilter key={filter.name} ref={filter.name} filterInfo={filterInfo} value={this.props.value} /> : <SingleSelectFilter key={filter.name} ref={filter.name} filterInfo={filterInfo} value={this.props.value} />;
    })
  }
  render(){

    var filtersArray = this.getFiltersArray(this.props.reportInfo.primary_filters);
    return(
      <div>
        {filtersArray}
      </div>
    )
  }
}

export class MultiSelectFilter extends Component{
  constructor(props){
    super(props);
    this.state={
      value: this.props.value
    }
  }
  render(){
    let filter=getFilter(this)
    return(
      <div>{filter}</div>
    )
  }
}
export class SingleSelectFilter extends Component{
  constructor(props){
    super(props);
    this.state={
      value: this.props.value
    }
  }
  render(){
    let filter= getFilter(this)
    return(
      <div>{filter}</div>
    )
  }
}

function getFilter(data){
    var filter;
    var options = data.props.filterInfo.options
    var type = data.props.filterInfo.type
    if(type === 'date'){filter = <div>Date</div>}
    switch (options.length) {
      case 1:
      case 2:
        filter = <RadioButtonWrapper  {...data.props} />
        break;
      case 3:
      case 4:
      case 5:
      filter = <CheckBoxWrapper  {...data.props} />
        break;
      case 6:
        break;
      default:
      filter = <DropDownWrapper  {...data.props}/>
    }
    return filter;
  }
