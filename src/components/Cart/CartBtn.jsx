import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


export default class CartBtn extends  Component{

    render(){
            return (
        
            <div className="btncart row">
                <h6 className="cart-items-num">1</h6>
                <button onClick={this.props.toCart} className="cartbtn" type="button"><FontAwesomeIcon style={{fontSize: '30px', marginRight: '4px', marginTop: '3px'}} icon={faCartPlus} /></button>
            </div>
        
    )
    }


}