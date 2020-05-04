import React, { Component } from 'react';
import OrderBtns from '../Main/orderButtons';
import AddBtns from '../Main/AddBtns';
import CartBtn from '../Cart/CartBtn';
import axios from '../../Configuration/axios-data';
import fire from '../../Configuration/Auth';
import '../Main/Main.css';

import capsule1 from '../../pic/capsule1.png';
import capsule2 from '../../pic/capsule2.png';
import capsule3 from '../../pic/capsule3.png';
import capsule4 from '../../pic/capsule4.png';
import capsule5 from '../../pic/capsule5.png';
import capsules from '../../pic/coffee3.jpg';
import { withRouter } from "react-router-dom";




class Main extends Component {


    state = {
        value: 0,
        price: 0,
        totalPriceProduct: 0,
        capsuleAmount: 1,
        show: true,
        showSlider: true,
        capsula: capsules,
        progBarcolor: { width: '0%' },
        progBarClass: "",
        capsulaName: "",
        itemsInTheCart: 0,
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


    backToMain = () => {
        if (fire.auth().currentUser) {
            this.props.history.push('/');
        } else {
            axios.delete(`/Cart/${this.state.dbUser}.json`).then(() => {
                this.props.history.push('/');
            });
        }

    }


    goToCartComponent = () => {
        this.props.history.push('/cart');
    }




    componentDidMount() {

        axios.get(`/Cart/${this.state.dbUser}.json`).then(res => {
            if (res.data !== null) {
                this.setState({
                    itemsInTheCart: Object.values(res.data).length
                })
            }

        })

        this.setState({
            show: false,
        })

        this.authListener();


       

    }



    // item minus
    removeItem = () => {
        if (this.state.capsuleAmount > 1) {
            this.setState((prevState) => ({
                capsuleAmount: prevState.capsuleAmount - 1,
                totalPriceProduct: prevState.totalPriceProduct - this.state.price
            }))
        }
    }

    // item plus
    addItem = () => {
        this.setState((prevState) => ({
            capsuleAmount: prevState.capsuleAmount + 1,
            totalPriceProduct: this.state.capsuleAmount * this.state.price,
            show: true
        }))
    }



    // add to cart
    addToCart = () => {
        if (this.state.capsuleAmount > 1) {
            const cartArrItem = {
                price: this.state.price.toFixed(2),
                totalPr: this.state.totalPriceProduct.toFixed(2),
                amount: this.state.capsuleAmount - 1,
                name: this.state.capsulaName
            }

            axios.post(`/Cart/${this.state.dbUser}.json`, cartArrItem).then(res => {
                axios.get(`/Cart/${this.state.dbUser}.json`).then(res => {
                    if (res.data !== null) {
                        this.setState({
                            itemsInTheCart: Object.values(res.data).length
                        })
                    }
                })
            })
        }
    }


    // reset the cart
    resetCart = () => {
        axios.delete(`/Cart/${this.state.dbUser}.json`).then(() => {
            window.location.reload(false);
        });
    }


    // display changes
    handleChangeRange = (event) => {
        this.setState({
            value: event.target.value
        });




        switch (event.target.value) {
            case "10":
                this.setState({
                    price: 4.5,
                    totalPriceProduct: 0,
                    capsuleAmount: 1,
                    capsula: capsule1,
                    progBarcolor: { width: '12%' },
                    progBarClass: "progress-bar progress-bar-striped bg-warning progress-bar-animated",
                    showSlider: false,
                    capsulaName: "VANILLA"
                })
                break;
            case "20":
                this.setState({
                    price: 4.5,
                    totalPriceProduct: 0,
                    capsuleAmount: 1,
                    capsula: capsule2,
                    progBarcolor: { width: '25%' },
                    progBarClass: "progress-bar progress-bar-striped bg-success progress-bar-animated",
                    showSlider: false,
                    capsulaName: "CARAMEL"
                })
                break;
            case "30":
                this.setState({
                    price: 3.5,
                    totalPriceProduct: 0,
                    capsuleAmount: 1,
                    capsula: capsule3,
                    progBarcolor: { width: '50%' },
                    progBarClass: "progress-bar progress-bar-striped bg-info progress-bar-animated",
                    showSlider: false,
                    capsulaName: "CUBA"
                })
                break;
            case "40":
                this.setState({
                    price: 3.7, totalPriceProduct: 0,
                    capsuleAmount: 1,
                    capsula: capsule4,
                    progBarcolor: { width: '75%' },
                    progBarClass: "progress-bar progress-bar-striped  progress-bar-animated",
                    showSlider: false,
                    capsulaName: "ITALY"

                })
                break;
            case "50":
                this.setState({
                    price: 3.5,
                    totalPriceProduct: 0,
                    capsuleAmount: 1,
                    capsula: capsule5,
                    progBarcolor: { width: '100%' },
                    progBarClass: "progress-bar progress-bar-striped bg-danger progress-bar-animated",
                    showSlider: false,
                    capsulaName: "AFRICA"
                })
                break;

            default:
                this.setState({
                    price: 0,
                    totalPriceProduct: 0,
                    capsuleAmount: 1,
                    show: false,
                    capsula: capsules,
                    showSlider: true,
                    progBarcolor: { width: '0%' },
                    progBarClass: "",
                    capsulaName: ""
                })
        }
    }




    render() {
       
        
        return (
            <section>
                <div className="container main">
                    <CartBtn itemsInTheCart={this.state.itemsInTheCart} toCart={this.goToCartComponent} />
                    <div className="imgbox row">

                        {
                            this.state.show && this.state.capsuleAmount > 1 ?
                                <div className="price-content">
                                    <h3 className="price-per-product"> <span className="num-span">{this.state.totalPriceProduct.toFixed(2)}</span><em>$<small>Total</small></em></h3>
                                    <h3 className="amount"><em>x</em><span className="num-span">{this.state.capsuleAmount - 1}</span></h3>
                                </div> : null
                        }

                        <img className="capsule-img" alt="capsule" src={this.state.capsula} />
                    </div>
                    {
                        this.state.price > 0 ?
                            <h3 className="price"><span className="tot-price-span">{this.state.capsulaName}</span> <span className="num-span">{this.state.price}</span><em>$</em></h3>
                            : <h3 className="price">Swipe Right To Start...</h3>
                    }
                    <div className="coffeestrength row">
                        <input onChange={this.handleChangeRange} value={this.state.value} type="range" className="slider" min="0" max="50" step="10" />
                    </div>
                    <div className="coffeeamountbox row">
                        <div className="graph col-10">
                            {
                                this.state.showSlider ?
                                    <div className="coffee-str-header-div">
                                        <h2 className="coffee-str-header">Choose your preferred coffee flavor <br></br>---> <span className="blink">Slide Right</span></h2>
                                    </div> :
                                    <div className="progress">
                                        <div className={this.state.progBarClass} role="progressbar"
                                            style={this.state.progBarcolor} ></div>
                                    </div>
                            }
                        </div>
                    </div>
                    {this.state.value >= 10 ?
                        <AddBtns addItem={this.addItem} removeItem={this.removeItem} /> :
                        <AddBtns />
                    }
                    <OrderBtns resetCart={this.resetCart} addToCart={this.addToCart} goToMain={this.backToMain} />
                </div>
            </section>
        )
    }
};

export default withRouter(Main);