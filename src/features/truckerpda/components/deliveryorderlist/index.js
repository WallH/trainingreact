//import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {DeliveryOrder} from "../../../../shared/models/DeliveryOrder";
import DeliveryOrderComponent from '../deliveryorder';


class DeliveryOrderListComponent extends React.Component{
  constructor(props)
  {
    super(props);
    this.deliveryOrders = this.props.orders; 
    this.state = 
    {
      page: 0
    }
    this.backPage = this.backPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    
  }

  backPage()
  {
    this.state.page--;
    this.setState(prevState => ({
      page: this.state.page
    }));
  }

  nextPage()
  {
    this.state.page ++;
    this.setState(prevState => ({
      page: this.state.page
    }));
  }
  /* test in altv */
  testFunction = () =>
  {
    if('alt' in window)
    {

    }else console.log("No se está ejecutando con ALT:V");
    console.log(":D");
  }

  render()
  {
    return (
        <React.Fragment>
            <ul>
                {this.deliveryOrders.slice(0+(this.state.page*5), 5*(this.state.page+1)).map((order, index) =>  
                    <DeliveryOrderComponent order={order} key={index}></DeliveryOrderComponent>
                )}
            </ul>
            <button onClick={this.backPage}>Back</button>
            <button onClick={this.nextPage}>Next</button>
        </React.Fragment>
    );
  }
}

export default DeliveryOrderListComponent;
