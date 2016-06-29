'use strict';
import React from 'react';
import DataGrid from 'react-datagrid';
import request from 'superagent';
import Promise from 'bluebird';

var STUFF =[]
request('GET', 'http://localhost:57767/api/reports')
.then(rawData => setData(rawData.body)).then(y => STUFF = y)
function setData(raw){
	var dataSet = JSON.parse(raw)
	return dataSet.Data.map((data, index) => {
		return  {
			ID: index,
			Name: data.Name,
			Position: data.Position,
			Office: data.Office,
			Extension: data.Extension,
			StartDate: data.StartDate,
			Salary: data.Salary
		}
	})
}



export default class ReportBox extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[]
		}
	}

	componentWillMount() {
		this.setState({
			data: STUFF
		})
   }


	render() {
		var columns = [
			{ name: 'Name'},
			{ name: 'Position' },
			{ name: 'Office' },
			{ name: 'Extension' },
			{ name: 'StartDate'},
			{ name: 'Salary'}
		]
		

		return (
				<div>
					<DataGrid idProperty="ID" dataSource={this.state.data} columns={columns} />

				</div>
			);
		}
	}






// Table data as a list of array.

// "use strict";
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Table, Column, Cell} from 'fixed-data-table-2';
