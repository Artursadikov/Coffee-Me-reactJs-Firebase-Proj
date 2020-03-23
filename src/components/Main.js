import React, { Component } from 'react';

import './Main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { withRouter } from "react-router-dom";

class Main extends Component {

    backToMain = () =>{
        this.props.history.push('/');
    }


    render() {

        let color1 = {
            width: '10%'
        };
        let color2 = {
            width: '25%'
        };
        let color3 = {
            width: '50%'
        };
        let color4 = {
            width: '75%'
        };
        let color5 = {
            width: '100%'
        };



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
                    <h3 className="price">Price: 15$</h3>
                    <div className="coffeestrength row">
                        <input type="range" className="slider" min="0" max="5" step="0.5" id="customRange3" />
                    </div>

                    <div className="coffeeamountbox row">
                        <div className="graph col-10">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={color1} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={color2} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={color3} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={color4} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={color5} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
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