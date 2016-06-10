import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

//fakedata functions and info
import {FAKEDATA, datalength, dataKeys, manKeys, dataObjectArray} from '../components/data';

const schema = {
  type: "object",
  properties: {}
};


const uiSchema =  {
};

let testReport = dataObjectArray;

(function (dataObjectArray){
  for(let i=0; i<dataObjectArray.length; i++){
    var props = { ...dataObjectArray[i].props}
    if(props.filter){
      if(props.checkbox){
        let labels = props.checkboxLabels.map(label => {
          return `${label}`
        })
        schema.properties.multipleChoicesList ={
          "type": "array",
          "title": "TEMP TITLE",
          "items": "string",
          "enum": labels
        }
      }
    }
  }
}(testReport[0]));

//iterate over dataobjects to set options in selection
// dataObjectArray.map(option => {
//   var props = { ...option.props}
//   return <option
//     key={option.props.id}
//     value={option.props.id}
//     data-filter={option.props.filter}
//     data-report={option.props.report}
//     data-checkbox={option.props.checkbox}
//     data-checkboxLabels={option.props.checkboxLabels}
//     data-radiobutton={option.props.radiobutton}
//     data-radiobuttonLabels={option.props.radiobuttonLabels}
//     data-dropdown={option.props.dropdown}
//     data-dropdownSelection={option.props.dropdownSelection}
//     data-dateStart={option.props.dateStart}
//     data-dateEnd={option.props.dateEnd}
//     data-search={option.props.search}
//     data-textinput={option.props.textinput}
//     >{option.props.id} - {option.props.report} - {option.props.filter.toString()}
//   </option>
// });




const MyCustomWidget = (props) => {
  return (
    <input type="text"
      className="custom"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} />
  );
};

const widgets = {
  myCustomWidget: MyCustomWidget
};

const formData = {
  title: "First task",
  done: true
};

const log = (type) => console.log.bind(console, type);
export default class Stuff extends Component{

  render(){
    return(
      <Form schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    )
  }
}
