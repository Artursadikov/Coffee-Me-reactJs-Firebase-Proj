import React, { Component } from 'react';
import OrderBtns from '../Main/orderButtons';
import AddBtns from '../Main/AddBtns';

import '../Main/Main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";


class Main extends Component {



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
        capsuleAmount: 0
    }

    handleChangeRange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    backToMain = () => {
        this.props.history.push('/');
    }

    progressBarHandler = () => {

        switch (this.state.value) {
            case '10':
                return <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        style={this.state.progBarStyle.color1} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

            case '20':
                return <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                        style={this.state.progBarStyle.color2} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


            case '30':
                return <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar"
                        style={this.state.progBarStyle.color3} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


            case '40':
                return <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar"
                        style={this.state.progBarStyle.color4} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


            case '50':
                return <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar"
                        style={this.state.progBarStyle.color5} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


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
                        <h3 className="amount">x 1</h3>
                    </div>
                    <h3 className="price">{this.state.value}</h3>
                    <div className="coffeestrength row">
                        <input onChange={this.handleChangeRange} value={this.state.value} type="range" className="slider" min="0" max="50" step="10" />
                    </div>
                    <div className="coffeeamountbox row">
                        <div className="graph col-10">
                            {this.progressBarHandler()}
                        </div>
                    </div>
                    <AddBtns />
                    <OrderBtns goToMain={this.backToMain} />
                </div>
            </section>
        )
    }
};

export default withRouter(Main);