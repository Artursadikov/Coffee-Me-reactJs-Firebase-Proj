import React, { Component } from 'react';
import './TotalCartPriceCss.css';


export default class TotalCartPrice extends Component {
    render() {
        return (
            <div>
                <h4 className="totpriceheader">Total products Price :<span className="totpriceitem">{this.props.TotalCartItemsPrice}$</span></h4>
            </div>
        )
    }
}
