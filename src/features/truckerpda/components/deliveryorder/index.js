//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {DeliveryOrder} from "../../../../shared/models/DeliveryOrder";

class DeliveryOrderComponent extends React.Component{
  constructor(props)
  {
    super(props);
    this.deliveryOrder = new DeliveryOrder(this.props.order.id, this.props.order.product, this.props.order.distance, this.props.order.quantity, this.props.order.time, this.props.order.pay); 
  }

  render()
  {
    return  (
      <li className="deliveryOrder">
        {this.props.order.id}|{this.props.order.product}
      </li>
    );
  }
}

export default DeliveryOrderComponent;
