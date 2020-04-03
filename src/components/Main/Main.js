import React, { Component } from 'react';
import OrderBtns from '../Main/orderButtons';
import AddBtns from '../Main/AddBtns';
import CartBtn from '../Cart/CartBtn';

import '../Main/Main.css';
import capsule1 from '../../pic/capsule1.png';
import capsule2 from '../../pic/capsule2.png';
import capsule3 from '../../pic/capsule3.png';
import capsule4 from '../../pic/capsule4.png';
import capsule5 from '../../pic/capsule5.png';
import capsules from '../../pic/coffee3.jpg';

import { withRouter } from "react-router-dom";



class Main extends Component {

    backToMain = () => {
        this.props.history.push('/');
        
    }

    goToCartComponent = () => {
        this.props.history.push('/cart');
    }

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
        capsulaName:""
    }



    componentDidMount() {
        this.setState({
            show: false
        })
    }

    removeItem = () => {
        if (this.state.capsuleAmount > 1) {
            this.setState((prevState) => ({
                capsuleAmount: prevState.capsuleAmount - 1,
                totalPriceProduct: prevState.totalPriceProduct - this.state.price
            }))
        }
    }

    addItem = () => {
        this.setState((prevState) => ({
            capsuleAmount: prevState.capsuleAmount + 1,
            totalPriceProduct: this.state.capsuleAmount * this.state.price,
            show: true
        }))
    }



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
                    capsulaName: "ITALY"
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
                    capsulaName: "CUBA"

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
                    <CartBtn toCart={this.goToCartComponent} />
                    <div className="imgbox row">

                        <div className="price-content">
                            <h3 className="price-per-product"> <span className="num-span">{this.state.totalPriceProduct}</span><em>$<small>Total</small></em></h3>
                            {this.state.show && this.state.value >= 10 ? <h3 className="amount"><em>x</em><span className="num-span">{this.state.capsuleAmount - 1}</span></h3> : null}
                        </div>
                        <img className="capsule-img" alt="capsule" src={this.state.capsula} />
                    </div>
        <h3 className="price"><span className="tot-price-span">{this.state.capsulaName}</span> <span className="num-span">{this.state.price}</span><em>$</em></h3>
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
                    <AddBtns addItem={this.addItem} removeItem={this.removeItem} />
                    <OrderBtns goToMain={this.backToMain} />
                </div>
            </section>
        )
    }
};

export default withRouter(Main);