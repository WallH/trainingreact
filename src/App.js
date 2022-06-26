import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ButtonComponent } from "./components/index";
import DeliveryOrderListComponent from './features/truckerpda/components/deliveryorderlist';
import { DeliveryOrder } from './shared/models/DeliveryOrder';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.elementTest = [
      new DeliveryOrder(1, "Test", 20, 2, new Date(), 20),
      new DeliveryOrder(2, "Test", 20, 2, new Date(), 20),
      new DeliveryOrder(3, "Test", 20, 2, new Date(), 20),
      new DeliveryOrder(4, "Test", 20, 2, new Date(), 20),
      new DeliveryOrder(5, "Test", 20, 2, new Date(), 20),
      new DeliveryOrder(6, "Test", 20, 2, new Date(), 20),
      new DeliveryOrder(7, "Test", 20, 2, new Date(), 20),
      new DeliveryOrder(8, "Test", 20, 2, new Date(), 20)
    ]
  }



  render()
  {
    return ( 
      <DeliveryOrderListComponent orders={this.elementTest}></DeliveryOrderListComponent>
    )
    /*return  (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ButtonComponent label="Hello World"></ButtonComponent>

        </header>
      </div>
    );*/
  }
}

export default App;
