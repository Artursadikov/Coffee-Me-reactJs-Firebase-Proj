import React, { Component } from 'react';
import OrderBtns from '../Main/orderButtons';
import AddBtns from '../Main/AddBtns';
import ProgressBar from './ProgressBar'

import '../Main/Main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";



class Main extends Component {

    backToMain = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        this.setState({
            show: false
        })
    }

    state = {
        value: 0,
        progBarStyle: {
            color1: { width: '10%' },
            color2: { width: '25%' },
            color3: { width: '50%' },
            color4: { width: '75%' },
            color5: { width: '100%' }
        },
        price: 0,
        totalPriceProduct: 0,
        capsuleAmount: 1,
        show: true
    }



    removeItem = () => {
        if (this.state.capsuleAmount > 1) {
            this.setState((prevState) => ({
                capsuleAmount: prevState.capsuleAmount - 1
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

        if (event.target.value === "10") {
            this.setState({
                price: 15,
                totalPriceProduct: 0,
                capsuleAmount: 1
            })
        } else if (event.target.value === "20") {
            this.setState({
                price: 22,
                totalPriceProduct: 0,
                capsuleAmount: 1
            })
        } else if (event.target.value === "30") {
            this.setState({
                price: 20,
                totalPriceProduct: 0,
                capsuleAmount: 1
            })
        } else if (event.target.value === "40") {
            this.setState({
                price: 15, totalPriceProduct: 0,
                capsuleAmount: 1

            })
        } else if (event.target.value === "50") {
            this.setState({
                price: 25,
                totalPriceProduct: 0,
                capsuleAmount: 1
            })
        } else {
            this.setState({
                price: 0,
                totalPriceProduct: 0,
                capsuleAmount: 1,
                show: false
            })
        }

        console.log(this.state.value)
    }



    progressBarHandler = () => {

        switch (this.state.value) {
            case '10':
                return <ProgressBar classnm="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    color={this.state.progBarStyle.color1} />
            case '20':
                return <ProgressBar classnm="progress-bar progress-bar-striped bg-success progress-bar-animated"
                    color={this.state.progBarStyle.color2} />

            case '30':
                return <ProgressBar classnm="progress-bar progress-bar-striped bg-info progress-bar-animated"
                    color={this.state.progBarStyle.color3} />

            case '40':
                return <ProgressBar classnm="progress-bar progress-bar-striped  progress-bar-animated"
                    color={this.state.progBarStyle.color4} />

            case '50':
                return <ProgressBar classnm="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    color={this.state.progBarStyle.color5} />

            default:
                return <div className="coffee-str-header-div">
                    <h2 className="coffee-str-header">Choose your preferred coffee strength <br></br>---> <span className="blink">Slide Right</span></h2>
                </div>

        }

    }



    render() {


        return (
            <section>
                <div className="container main">
                    <div className="btncart row">
                        <button className="cartbtn" type="button"><FontAwesomeIcon icon={faCoffee} /></button>
                    </div>
                    <div className="imgbox row">
                        <h1 className="imgholder">IMG Placeholder</h1>
                        <div className="price-content">
                            <h3 className="price-per-product"> {this.state.price}$ </h3>
                            {this.state.show && this.state.value >= 10 ? <h3 className="amount">x {this.state.capsuleAmount - 1}</h3> : null}
                        </div>
                    </div>
                    <h3 className="price"><span>Total items Price:</span> {this.state.totalPriceProduct}$ </h3>
                    <div className="coffeestrength row">
                        <input onChange={this.handleChangeRange} value={this.state.value} type="range" className="slider" min="0" max="50" step="10" />
                    </div>
                    <div className="coffeeamountbox row">
                        <div className="graph col-10">
                            {this.progressBarHandler()}
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