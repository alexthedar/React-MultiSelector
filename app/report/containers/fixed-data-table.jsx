'use strict';

import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import './getData'
// Table data as a list of array.
const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
  // .... and more
];
/*
I will need the following componments in order to make this data table work:
Make the column headers
make the rows

Do i need to make the row height responsive?
Can I group things?
WIll need to make sort functionality

*/


export default class FixedDataTable extends React.Component{

	render() {
		return (
				<div
          >

          <Table
            rowHeight={50}
            rowsCount={rows.length}
            width={this.props.width}
            height={this.props.height-100}
            headerHeight={50}>
            <Column
              header={<Cell>Col 1</Cell>}
              cell={({rowIndex, ...props}) => (
                <Cell {...props}>
                  Data for column 1: {rows[rowIndex][0]}
                </Cell>
              )}
              width={this.props.width/3}
            />
            <Column
              header={<Cell>Col 2</Cell>}
              cell={({rowIndex, ...props}) => (
                <Cell {...props}>
                  Data for column 2: {rows[rowIndex][1]}
                </Cell>
              )}
              width={this.props.width/3}
            />
            <Column
              header={<Cell>Col 3</Cell>}
              cell={({rowIndex, ...props}) => (
                <Cell {...props}>
                  Data for column 3: {rows[rowIndex][2]}
                </Cell>
              )}
              width={this.props.width/3}
            />
          </Table>

				</div>
			)
		}
	}
