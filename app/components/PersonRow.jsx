import React, { Component } from 'react'

export default class PersonRow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <tr>
        <td>{this.props.rowData.id}</td>
        <td>{this.props.rowData.email}</td>
        <td>{this.props.rowData.gender}</td>
      </tr>

    );
  }
}
