import React, { Component } from 'react';
import CartNav from './CartNav';
import CartBody from './CartBody';
import CartBtns from './CartBtns';
import axios from '../../Configuration/axios-data';
import Modal from '../Modal/Modal';
import ModalWishList from '../Modal/ModalWishList';
import { withRouter } from "react-router-dom";
import '../Cart/CartCss.css';

class Cart extends Component {

    state = {
        wishList: false,
        modalanimation: false
    }

    // to wishList btn
    goToWishList = () => {
        this.props.history.push('/wish');
    }


    // clear the cart && database 
    cartClear = () => {
        axios.delete('/cart.json').then(() => {
            window.location.reload(false);
        });

    }

    // btn open the wishlist modal
    addWishModal = () => {
        this.setState({
            wishList: true,
            modalanimation: true
        })
    }

    // button add to wishlist and clear the cart list && database
    onAddToWishList = () => {
        axios.get('/cart.json').then(res => {
            let items = Object.values(res.data).map((items, index) => {
                return items
            })
            
            axios.post('/wishlist.json', items).then(() => {
                axios.delete('/cart.json').then(res => {
                    window.location.reload(false);
                }).catch(err => {
                    console.log(err)
                })
            })
        })
    }

    //button close the wishlist modal
    onBackToCart = () => {
        this.setState({
            wishList: false,
            modalanimation: false
        })
    }


    render() {
        return (
            <div>
                <section className='cart-section'>
                    <CartNav goToWishList={this.goToWishList} cartClear={this.cartClear} />
                    <div className="container order">
                        <Modal show={this.state.modalanimation} >
                            <ModalWishList backToCartCancelWish={this.onBackToCart} addtowishlist={this.onAddToWishList} />
                        </Modal>
                        <CartBody />
                        <CartBtns addToWishList={this.addWishModal} />
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Cart)
