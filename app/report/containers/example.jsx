// import React from 'react'
// import Tabelify from 'react-tabelify'
//
//
// export default class Page extends React.Component {
//     constructor(){
//         super();
//         this.onChangeGrid = this.onChangeGrid.bind(this);
//         this.state={
//         tableConfig: {
//                 columnMetadata: [
//                     {
//                         "columnName": "cgpa",
//                         "displayName": "CGPA",
//                     },
//                     {
//                         "columnName": "name",
//                         "displayName": "Name"
//                     },
//                 ],
//                 currentPage: 1,
//                 showCheckbox:true,
//                 data:
//                 [
//                     {
//                         "cgpa":5.2,
//                         "name": "Rishabh",
//                     }
//                 ],
//                 onChangeGrid: this.onChangeGrid,
//                 selectedRows: {},
//                 onRowClick: this.onRowClick,
//                 resultsPerPage: 10,
//                 // CustomRow: require('./CustomRow.js')
//                 // CustomHeader: require('./CustomHeader')
//                 // showHeader:false,
//                 // showFooter: false
//                 localSearch: true
//                 // fixedHeight:100,
//                 // width: '1000px'
//             }
//     }
//     }
//
//     onChangeGrid(event, data) {
//         var tableConfig = this.state.tableConfig;
//         lodash.extend(tableConfig, data);
//         this.setState({
//             tableConfig: tableConfig
//         });
//     }
//
// 	render(){
// 		return <div>
// 			<Tabelify style={{margin:'30px'}} {...this.state.tableConfig}/>
// 		</div>
// 	}
// }
