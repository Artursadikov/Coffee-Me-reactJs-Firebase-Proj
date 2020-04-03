import React, { Component } from 'react';


class OrderBtns extends Component {
    render() {
        return (
            <div className="orderbtns">
                <button onClick={this.props.addToCart} className="orderbtn" type="button">Add to Cart</button>
                <button onClick={this.props.goToMain} className="backbtn" type="button">Back</button>
                <button onClick={this.props.resetCart} className="resetbtn" type="reset">Reset Cart</button>
            </div>

        )
    }
};


export default OrderBtns;