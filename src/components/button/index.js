//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

class ButtonComponent extends React.Component{
  constructor(props)
  {
    super(props);
    this.label = props.label;
  }

  testFunction = () =>
  {
    if('alt' in window)
    {

    }else console.log("No se está ejecutando con ALT:V");
    console.log(":D");
  }

  render()
  {
    return  (
      <div className="ButtonComponent">
        <button className="btn btn-success" onClick={this.testFunction}>{this.label}</button>
      </div>
    );
  }
}

export default ButtonComponent;
