import React, { Component } from 'react'
import {CheckBox, RadioButton} from '../components/FormWidgets'



var divStyle = {
  background: 'grey',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

export default class  OptionsBox extends Component{
  constructor(){
    super();
  }

    render(){



    return(
      <div style={divStyle} >
        <RadioButton />
        <CheckBox />
      </div>
    )
  }
}


  // let num = parseInt(this.props.activeSelect)
  // switch (num) {
  //   case 1:
  //
  //   console.log(num);
  //   break;
  //   case 2:
  //   {this.props.showFilters}
  //   console.log(num)
  //   break;
  //   case 3:
  //   console.log(num)
  //   break;
  //   case 4:
  //   console.log(num)
  //   break;
  //   case 5:
  //   console.log(num)
  //   break;
  //   case 6:
  //   console.log(num)
  //   break;
  //   case 7:
  //   console.log(num)
  //   break;
  //   case 8:
  //   console.log(num)
  //   break;
  //   case 9:
  //   console.log(num)
  //   break;
  //   case 10:
  //   console.log(num)
  //   break;
  //   default:
  //   console.log('default')
  //   break;
  // }
