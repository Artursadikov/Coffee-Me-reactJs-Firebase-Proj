import React, { Component } from 'react';
import '../Cart/CartBtnsCss.css';

import { withRouter } from "react-router-dom";

class CartBtns extends Component {



    backToMain = () => {
        this.props.history.goBack();
    }

    render() {



        return (
            <div className="row order-btn">
                <button onClick={this.backToMain} type="button" className="res-btn">Back</button>
                <button onClick={this.props.addToWishList} type="button" className="wish-li-btn">Add To Wishlist</button>
                <button type="button" className="next-btn">Pay</button>
            </div>
        )
    }

}


export default withRouter(CartBtns);

 