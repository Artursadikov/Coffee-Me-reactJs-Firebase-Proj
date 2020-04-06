import React, { Component } from 'react'
import { FaMinus } from 'react-icons/fa';

export default class CartList extends Component {
    render() {
        return (
            <div>
                <ul className="cartUL">
                    <li className='cartLi' ><FaMinus className="remmoveFromCartItem" onClick={this.props.click} />Capsula type :  <span className="itemname">*{this.props.name}*</span>
                        <br></br>Price for sleeve :  <span className="nums">{this.props.price}</span>$ <br></br>Total for <span className="itemname">{this.props.name}</span> : <span className="nums">{this.props.totalPr}</span>$
                      <br></br>Amount of capsule sleeves :  <span className="nums">{this.props.amount}</span></li>
                </ul>

            </div>
        )
    }
}
