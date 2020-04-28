import React, { Component } from 'react';
import './TotalCartPriceCss.css';


export default class TotalCartPrice extends Component {

    render() {
        return (
            <div>
                <h4 className="totpriceheader">Total Price : <span className="totpriceitem">{this.props.TotalCartItemsPrice}</span>$</h4>
                <h6 className="totnumofcartitems">Items In The Cart :  <span className="totcartitems">   {this.props.items}</span></h6>
            </div>
        )
    }
}
