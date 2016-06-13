import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

//fakedata functions and info
import {FAKEDATA, datalength, dataKeys, manKeys, dataObjectArray} from '../components/data';


let reportTitles = dataObjectArray.map(data => {
  var props = { ...data.props};
  return `${props.id} - ${props.report} - ${props.filter.toString()}`
})

let testReportData = dataObjectArray[0];


function MultipleChoicesList(data){

}


const schema = {
  "definitions": {
    "reportTitles":{
      "type": "string",
      "enum": reportTitles
    }
  },
  type: "object",
  properties: {
    "Reports": {
      "$ref": "#/definitions/reportTitles"
    }
  }
};



const uiSchema =  {
};


// (function(data){
//   const props = { ...data.props};
//
//   if(props.filter){
//     console.log('filters')
//     if(props.checkbox){
//       console.log(props.checkboxLabels)
//     }
//     if(props.dropdown){
//       console.log(props.dropdownSelection)
//     }
//     if(props.radiobutton){
//       console.log(props.radiobuttonLabels)
//     }
//     if(props.dateStart)(
//       console.log('dateStart')
//     )
//     if(props.dateEnd){
//       console.log('dateEnd')
//     }
//     if(props.search){
//       console.log('search')
//     }
//     if(props.textinput){
//       console.log('textinput')
//     }
//   } else {
//     console.log('no filter')
//   }
// }(testReportData))


// (function (data){
//   for(let i=0; i<data.length; i++){
//     var props = { ...data[i].props}
//     if(props.filter){
//       if(props.checkbox){
//         let labels = props.checkboxLabels.map(label => {
//           return `${label}`
//         })
//         schema.properties.multipleChoicesList ={
//           "type": "array",
//           "title": "TEMP TITLE",
//           "items": "string",
//           "enum": labels
//         }
//       }
//     }
//   }
// }(testReportData[0]));






// const MyCustomWidget = (props) => {
//   return (
//     <input type="text"
//       className="custom"
//       value={props.value}
//       required={props.required}
//       onChange={(event) => props.onChange(event.target.value)} />
//   );
// };
//
// const widgets = {
//   myCustomWidget: MyCustomWidget
// };
const onSubmit = ({formData}) => console.log("yay I'm valid!");
const onChange = ({formData}) => console.log(formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

const log = (type) => console.log.bind(console, type);
export default class Stuff extends Component{

  render(){
    return(
      <Form schema={schema}
        uiSchema={uiSchema}

        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} />
    )
  }
}
