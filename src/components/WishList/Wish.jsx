import React, { Component } from 'react'
import WishNav from './WishNav';
import WishBody from './WishBody';
import WishBtns from './WishBtns';
import { withRouter } from "react-router-dom";

import './Wish.css';
import axios from '../../Configuration/axios-data';



 class Wish extends Component {


    // back to shop page
    backToShop = () => {
        this.props.history.push('/main');
    }

    // wishlist empty & database
    clearWishList = () => {

        axios.delete('/wishlist.json').then(() => {
            window.location.reload(false);
        })
    }




    render() {
        return (
            <div className="wish">
                <WishNav />
                <WishBody />
                <WishBtns backToShop={this.backToShop} clearWishList={this.clearWishList} />
            </div>
        )
    }
}

export default withRouter(Wish)