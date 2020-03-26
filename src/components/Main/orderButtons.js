import React, { Component } from 'react';


class OrderBtns extends Component {
    render() {
        return (
            <div className="orderbtns">
                <button className="orderbtn" type="button">Add to Cart</button>
                <button onClick={this.props.goToMain} className="backbtn" type="button">Back</button>
                <button className="resetbtn" type="reset">Reset</button>
            </div>

        )
    }
};


export default OrderBtns;