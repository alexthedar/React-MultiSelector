'use strict'
import React, { Component } from 'react'
import PrimaryFilter from './PrimaryFilter'

export default class FilterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      filterNameArray: []
    }
  }
  buildFilterNameArray(primaryFilters){
    let initialFilters = primaryFilters.map((filter,index) => {
      return filter.Name
    })
    this.setState({
      filterNameArray:initialFilters
    })
  }

  addFilterToArray(newFilter){
    var newArray = this.state.filterNameArray.concat(newFilter)
    this.setState({
      filterNameArray: newArray
    })
  }

  getPrimaryFilterArray(primaryFilters){
    return primaryFilters.map((filter, index) => {
      return <PrimaryFilter
                key={'primary'+filter.Name+index}
                ref={'primary'+filter.Name+index}
                filter={filter}
                name={filter.Name}
                isMulti={filter.isMulti}
                options={filter.options}
                selected={this.props.selectedArray}
                filterNameArray={this.state.filterNameArray}
                addFilterToArray={this.addFilterToArray}
              />
    })
  }

  componentWillMount(){
    this.buildFilterNameArray(this.props.primaryFilters)
  }
  render(){
    let filtersArray = this.getPrimaryFilterArray(this.props.primaryFilters);
    return(
      <div>
        {filtersArray}
        {this.state.filterNameArray}
      </div>
    )
  }
}
