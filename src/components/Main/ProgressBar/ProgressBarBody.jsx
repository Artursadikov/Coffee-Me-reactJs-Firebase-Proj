import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
import InputProgressBar from "./InputProgressBar";
import Wrapper from '../../Wrapper';

export default class ProgressBarBody extends Component {

    handleChangeRange = (event) => {
        this.setState({
            value: event.target.value

        });
    }


    state = {
        value: 0,
        progBarStyle: {
            color1: { width: '10%' },
            color2: { width: '25%' },
            color3: { width: '50%' },
            color4: { width: '75%' },
            color5: { width: '100%' }
        }
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
            <Wrapper>
                <InputProgressBar handleChangeRange={this.handleChangeRange} value={this.state.value} />
                <div className="coffeeamountbox row">
                    <div className="graph col-10">
                        {this.progressBarHandler()}
                    </div>
                </div>
            </Wrapper>
        )
    }
}
