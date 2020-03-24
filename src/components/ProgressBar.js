import React, { Component } from 'react';


class ProgressBar extends Component {
    render(){

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

        return(
            
            <div className="coffeeamountbox row">
            <div className="graph col-10">
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                     style={color1} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" 
                    style={color2} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" 
                    style={color3} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar"
                     style={color4} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar"
                     style={color5} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        )
    }
};


export default ProgressBar;