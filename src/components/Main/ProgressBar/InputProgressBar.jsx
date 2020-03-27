import React, { Component } from 'react'

export default class InputProgressBar extends Component {



    render() {
        return (
            
                <div className="coffeestrength row">
                    <input onChange={this.props.handleChangeRange} value={this.props.value} type="range" className="slider" min="0" max="50" step="10" />
                </div>
            
        )
    }
}
