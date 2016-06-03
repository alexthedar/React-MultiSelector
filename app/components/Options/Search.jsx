import React, { Component } from 'react'

export default class SearchBox extends Component{
  constructor(){
    super();
  }

  doSearch () {
    const query=this.refs.searchInput.getDOMNode().value;
    this.props.doSearch(query);
  }

  render(){
    return (
      <input type="text" ref="searchInput" placeholder="Search" value={this.props.query} onChange={this.doSearch}/>
    )
  }
}
