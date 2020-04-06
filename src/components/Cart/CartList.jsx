import React, { Component } from 'react'
import { FaMinus } from 'react-icons/fa';

export default class CartList extends Component {
    render() {
        return (
            <div>
            <li className='cartLi' ><FaMinus className="remmoveFromCartItem" onClick={this.props.click} />Capsula type : <br></br> <span className="itemname">*{this.props.name}*</span>
             <br></br>Price for sleeve :  <span className="nums">{this.props.price}</span>$ <br></br>Total for <span className="itemname2">{this.props.name}</span>: <span className="nums">{this.props.totalPr}</span>$
            <br></br>Amount :  <span className="nums">{this.props.amount}</span></li>
        </div>
        )
    }
}
