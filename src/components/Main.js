import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './Main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { withRouter } from "react-router-dom";

class Main extends Component {



    state = {
        value: 0
    }

    handleChangeRange = (event) => {
        this.setState({ value: event.target.value });
    }

    backToMain = () => {
        this.props.history.push('/');
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
                        <h3 className="amount">x 1</h3>
                    </div>
                    <h3 className="price">{this.state.value}</h3>
                    <div className="coffeestrength row">
                        <input onChange={this.handleChangeRange} value={this.state.value} type="range" className="slider" min="0" max="60" step="10" />
                    </div>
                    <ProgressBar />
                    <div className="addbtnbox">
                        <button className="remove" type='button'><FontAwesomeIcon icon={faMinus} /></button>
                        <button className="add" type='button'><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <div className="orderbtns">
                        <button className="orderbtn" type="button">Order</button>
                        <button onClick={this.backToMain} className="backbtn" type="button">Back</button>
                        <button className="resetbtn" type="reset">Reset</button>
                    </div>
                </div>
            </section>
        )
    }
};

export default withRouter(Main);