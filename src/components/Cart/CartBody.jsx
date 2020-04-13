import React, { Component } from 'react';
import CartList from './CartList';
import TotalCartPrice from './TotalCartPrice';
import Spinner from '../Spinner';

import '../Cart/CartBodyCss.css';
import axios from '../../Configuration/axios-data';




export default class CartBody extends Component {



    state = {
        cart: null,
        loading: true,
        totalCartPrice: 0
    }



    //remove items from cart
    remItemFromCar = (index) => {
        let data = Object.values(this.state.cart);
        data.splice(index, 1);

        this.setState({
            cart: data,
            totalCartPrice: 0
        })


    }


    componentDidMount() {

        axios.get("https://coffe-me.firebaseio.com/cart.json").then(res => {
            if (this.state.cart !== null) {
                let totalCartPriceArr = Object.values(res.data).map((item) => {
                    return Object.values(item)
                })

                let arr = Object.values(totalCartPriceArr);
                let newArr = [];

                for (let item of arr) {
                    let values = item[item.length - 1];
                    let value = parseFloat(values)
                    newArr.push(value);
                    let price = newArr.reduce((res, val) => {
                        return res + val
                    })

                    this.setState({
                        totalCartPrice: price
                    })
                    console.log(price)
                }
            }

        })
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

            console.log(err)
        })


    }



    render() {

        return (
            <div className="row order">

                <div className="order-description">
                    <TotalCartPrice TotalCartItemsPrice={this.state.totalCartPrice} />
                </div>
                <div className="choosen-items">

                    {this.state.cart === null || this.state.loading ? <Spinner /> :
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

