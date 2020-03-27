import React, { Component } from 'react';
import OrderBtns from '../Main/orderButtons';
import AddBtns from '../Main/AddBtns';
import ProgressBarBody from './ProgressBar/ProgressBarBody.jsx';

import '../Main/Main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";



class Main extends Component {

    backToMain = () => {
        this.props.history.push('/');
    }

    state = {
        value: 0,
        price: 0,
        capsuleAmount: 1
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
            capsuleAmount: prevState.capsuleAmount + 1
        }))
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
                        <h3 className="amount">x {this.state.capsuleAmount}</h3>
                    </div>
                    <h3 className="price">{this.state.price}$</h3>
                    <ProgressBarBody />
                    <AddBtns addItem={this.addItem} removeItem={this.removeItem} />
                    <OrderBtns goToMain={this.backToMain} />
                </div>
            </section>
        )
    }
};

export default withRouter(Main);