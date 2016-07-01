'use strict';
import React from 'react';
import FixedDataTable from './getData'
// import FixedDataTable from './fixed-data-table'
import Dimensions from 'react-dimensions'


//with this on the page the stuff works  WHY?!?!?! will it not work if i move this to its own component file?
// request('GET', 'http://localhost:57767/api/reports')
// .then(rawData => setData(rawData.body)).then(y => STUFF = y)
// function setData(raw){
// 	var dataSet = JSON.parse(raw)
// 	return dataSet.Data.map((data, index) => {
// 		return  {
// 			ID: index,
// 			Name: data.Name,
// 			Position: data.Position,
// 			Office: data.Office,
// 			Extension: data.Extension,
// 			StartDate: data.StartDate,
// 			Salary: data.Salary
// 		}
// 	})
// }



class ReportBox extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 		data:[]
	// 	}
	// }
  //
	// componentWillMount() {
	// 	this.setState({
	// 		data: PatientLabs
	// 	})
  //  }

	render() {
		var containerWidth=this.props.containerWidth
		var containerHeight=this.props.containerHeight
		return (
				<div>
					<FixedDataTable width={containerWidth} height={window.innerHeight-100}/>
				</div>
			)
		}
	}

	export default Dimensions()(ReportBox)





// Table data as a list of array.

// "use strict";
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Table, Column, Cell} from 'fixed-data-table-2';
