import React, { Component } from 'react';
import '../Cart/CartBtnsCss.css';
import axios from '../../Configuration/axios-data';
import { withRouter } from "react-router-dom";

class CartBtns extends Component {



    addToWishList = () => {

        axios.get('/cart.json').then(res => {
            axios.post('/wishlist.json', res.data).then(() => {
                axios.delete('/cart.json').then(res => {
                    window.location.reload(false);
                }).then(()=>{
                    alert("Added to wish list")
                }).catch(err => {
                    console.log(err)
                })
            })
        })

    }


    backToMain = () => {
        this.props.history.goBack();
    }

    render() {



        return (
            <div className="row order-btn">
                <button onClick={this.backToMain} type="button" className="res-btn">Back</button>
                <button onClick={this.addToWishList} type="button" className="wish-li-btn">Add To Wishlist</button>
                <button type="button" className="next-btn">Pay</button>
            </div>
        )
    }

}


export default withRouter(CartBtns);