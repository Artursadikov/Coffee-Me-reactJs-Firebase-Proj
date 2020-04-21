import React, { Component } from 'react';
import CartList from './CartList';
import TotalCartPrice from './TotalCartPrice';
import Spinner from '../Spinner';

import '../Cart/CartBodyCss.css';
import axios from '../../Configuration/axios-data';
import fire from '../../Configuration/Auth';




export default class CartBody extends Component {



    state = {
        cart: null,
        loading: true,
        totalCartPrice: 0,
        cartItems: 0,
        user: null,
        uid: 'guest'
    }

    

    authListenet = () => {
        fire.auth().onAuthStateChanged((user) => {
            user ? this.setState({ user: user, uid: user.uid }) : this.setState({ user: null })
            
        })
    }

    componentWillMount() {

        axios.get(`/Cart/${this.state.uid}.json`).then(res => {
         
            this.setState({
                cart: res.data,
                loading: false
            })
            console.log(this.state.cart) 
        }).catch(err => {
            this.setState({
                loading: false
            })

        })
        this.authListenet();
    }

  


    // total price calc
    componentDidMount() {

        axios.get(`/Cart/${this.state.uid}.json`).then(res => {
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
                        totalCartPrice: price.toFixed(2),
                        cartItems: newArr.length
                    })
                }
            }
        })
    }






    render() {

        return (
            <div className="row order">

                <div className="order-description">
                    <TotalCartPrice items={this.state.cartItems} TotalCartItemsPrice={this.state.totalCartPrice} />
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
                                />
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

