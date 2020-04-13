import React, { Component } from 'react';
import CartList from './CartList';
import TotalCartPrice from './TotalCartPrice';
import Spinner from '../Spinner';

import '../Cart/CartBodyCss.css';
import axios from '../../Configuration/axios-data';




export default class CartBody extends Component {



    state = {
        cart: null,
        loading: true
    }

    //remove items from cart
    remItemFromCar = (index) => {


        let data = Object.values(this.state.cart);

        data.splice(index, 1);

        this.setState({
            cart: data
        })

        axios.delete(`/cart/${index}.json`);

    }





    // update local storage after remove items
    componentWillMount() {
        axios.get("https://coffe-me.firebaseio.com/cart.json").then(res => {
            this.setState({
                cart: res.data,
                loading: false
            })
        }).catch(err => { 
            this.setState({              
                loading: false
            })
         })


    }



    render() {

        return (
            <div className="row order">

                <div className="order-description">
                    <TotalCartPrice TotalCartItemsPrice={this.state.priceTotCart} />
                </div>
                <div className="choosen-items">

                    {this.state.cart === null || this.state.loading ? <Spinner/> :
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

