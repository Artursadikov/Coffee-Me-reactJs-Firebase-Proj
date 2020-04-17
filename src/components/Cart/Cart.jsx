import React, { Component } from 'react';
import CartNav from './CartNav';
import CartBody from './CartBody';
import CartBtns from './CartBtns';
import axios from '../../Configuration/axios-data';
import Modal from '../Modal/Modal';
import ModalWishList from '../Modal/ModalWishList';

import '../Cart/CartCss.css';





export class Cart extends Component {

    state = {
        wishList: false,
        modalanimation: false
    }



    cartClear = () => {
        axios.delete('/cart.json').then(() => {
            window.location.reload(false);
        });

    }

    addWishModal = () => {
        this.setState({
            wishList: true,
            modalanimation: true
        })
    }

    onAddToWishList = () => {
        axios.get('/cart.json').then(res => {
            axios.post('/wishlist.json', res.data).then(() => {
                axios.delete('/cart.json').then(res => {
                    window.location.reload(false);
                }).catch(err => {
                    console.log(err)
                })
            })
        })


    }


    render() {
        return (
            <div>
                <section className='cart-section'>
                    <CartNav cartClear={this.cartClear} />
                    <div className="container order">
                        <Modal show={this.state.modalanimation} >
                            <ModalWishList addtowishlist={this.onAddToWishList} />
                        </Modal>
                        <CartBody />
                        <CartBtns addToWishList={this.addWishModal} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Cart
