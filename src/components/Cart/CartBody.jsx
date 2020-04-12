import React, { Component } from 'react';
import CartList from './CartList';
import TotalCartPrice from './TotalCartPrice';

import '../Cart/CartBodyCss.css';
import axios from '../../Configuration/axios-data';




export default class CartBody extends Component {



    state = {
        cart: null,
        priceTotCart: 0
    }

    //remove items from cart
    remItemFromCar = (index) => {

        let _data = Object.values(this.state.cart);
        _data.splice(index, 1);

        this.setState({
            cart: _data
        })

        
    }





    // update local storage after remove items
    componentWillMount() {
        axios.get("https://coffe-me.firebaseio.com/cart.json").then(res => {
            this.setState({
                cart: res.data
            })
        }).catch(err => { console.log(err) })


    }



    render() {

        return (
            <div className="row order">

                <div className="order-description">
                    <TotalCartPrice TotalCartItemsPrice={this.state.priceTotCart} />
                </div>
                <div className="choosen-items">

                    {this.state.cart === null ? <h1 className="empty-cart-h1">The cart is empty</h1> :
                        Object.values(this.state.cart).map((item, index) => {
                            return (
                                <CartList key={index}
                                    price={item.price}
                                    amount={item.amount}
                                    name={item.name}
                                    totalPr={item.totalPr}
                                    click={() => this.remItemFromCar(index)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

