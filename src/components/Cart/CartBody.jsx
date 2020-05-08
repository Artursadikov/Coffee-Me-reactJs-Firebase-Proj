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
        dbUser: ''

    }

    authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({
                user: user,
                dbUser: fire.auth().currentUser.displayName
            }) : this.setState({
                user: null,
                dbUser: 'Guest'
            })

        })

    }




    componentWillMount() {
        this.authListener();
        axios.get(`/Cart/${this.state.dbUser}.json`).then(res => {

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

    // total price calc
    componentDidMount() {

        axios.get(`/Cart/${this.state.dbUser}.json`).then(res => {

            let totalCartPriceArr = Object.values(res.data).map((item) => {
                return Object.values(item)
            })

            let arr = Object.values(totalCartPriceArr);

            let priceItems = arr.map(item => {
                return Object.values(item).map(item => {
                    return parseFloat(Object.values(item)[3])
                })
            })

            for (let pr of priceItems) {

                let price = pr.reduce((res, val) => {
                    return res + val
                })

                this.setState({
                    totalCartPrice: price.toFixed(2)
                })
            }

            for (let item of arr) {
                this.setState({
                    cartItems: item.length
                })
            }
        }).then(() => {
            // localStorage.setItem('numOfCartItems', this.state.cartItems);
            // localStorage.setItem('totalCartPrice', this.state.totalCartPrice);
        })


    }


    componentDidUpdate() {
        localStorage.setItem('numOfCartItems', this.state.cartItems);
        localStorage.setItem('totalCartPrice', this.state.totalCartPrice);
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
                                Object.values(item).map((item, index) => {
                                    return (
                                        <CartList key={index}
                                            price={item.price}
                                            amount={item.amount}
                                            name={item.name}
                                            totalPr={item.totalPr}
                                        />
                                    )
                                })
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

