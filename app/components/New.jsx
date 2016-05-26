import React, { Component } from 'react'
import PersonRow from './PersonRow'

export default class New extends Component {
  constructor(props){
    super(props)

  }

  render(){
    const stuff = this.props.data.map(p => {
      return <PersonRow key={p.id} rowData={p} />
    })
    return (
      <table>
        <tbody>
          {stuff}
        </tbody>
      </table>
    );
  }
}
