'use strict';
import React from 'react';
import PatientLabs from './PatientLabs'
import {Table, Column, Cell} from 'fixed-data-table-2';
import lodash from 'lodash'
export default

function makeSingleRow(obj){
  var row = [];
  for (var item in obj){
    row.push(obj[item])
  }
  return row
}

var t = PatientLabs[0]
makeSingleRow(t)
console.log(PatientLabs)

const fullNameCell = ({rowIndex, data, col, ...props}) => (
  <Cell >
    {col}
  </Cell>
);


export default class FixedDataTable extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      dataList: PatientLabs
    };
  }
  render() {
  var {dataList} = this.state;
  // debugger
  // console.log(lodash.get(dataList, 0).fullName)
  return (
    <div>
      <Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={dataList.length}
        {...this.props}>
        <Column
          cell={<Cell>Not working yet</Cell>}
          fixed={true}
          width={this.props.width}
        />
      </Table>
    </div>
      )
    }
  }


  //  {/*{rowIndex}, {col},*/}
  //  {/*{data[rowIndex].col}*/}
  //  {/*{lodash.get(data, rowIndex, `${col}`)}*/}
