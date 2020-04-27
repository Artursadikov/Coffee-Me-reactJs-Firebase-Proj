import React, { Component } from 'react'


export default class CartList extends Component {
    render() {
        return (
            <div>
                <ul className="cartUL">
                    <li className='cartLi' >Capsula type :  <span className="itemname"><em>{this.props.name},</em></span>
                        <br></br>Sleeve Price :  <span className="nums">{this.props.price} $</span> , <br></br>Total for <span className="itemname">{this.props.name}</span> : <span className="nums">{this.props.totalPr} $</span> ,
                      <br></br>Capsule Sleeves :  <span className="nums">{this.props.amount}.</span></li>
                </ul>
            </div>
        )
    }
}
