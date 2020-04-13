import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";



export default class CartBtn extends Component {

    render() {
        return (

            <div className="btncart row">
                {
                    this.props.itemsInTheCart > 0 ?
                        <h6 className="cart-items-num">{this.props.itemsInTheCart}</h6> :
                        <h6 style={{ backgroundColor: 'transparent', color: 'transparent' }} className="cart-items-num">{this.props.itemsInTheCart}</h6>
                }
                <button onClick={this.props.toCart} className="cartbtn" type="button"><FontAwesomeIcon style={{ fontSize: '30px', marginRight: '4px', marginTop: '3px' }} icon={faCartPlus} /></button>
            </div>

        )
    }


}
