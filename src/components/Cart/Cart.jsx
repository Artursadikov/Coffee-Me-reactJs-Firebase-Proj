import React, { Component } from 'react';
import CartNav from './CartNav';
import CartBody from './CartBody';
import CartBtns from './CartBtns';
import axios from '../../Configuration/axios-data';
import Modal from '../Modal/Modal';
import ModalWishList from '../Modal/ModalWishList';
import { withRouter } from "react-router-dom";
import '../Cart/CartCss.css';
import ModalInput from '../Modal/ModalInput';
import InputContent from '../Modal/InputContent';
import fire from '../../Configuration/Auth';

class Cart extends Component {

    state = {
        wishList: false,
        modalanimation: false,
        openInput: false,
        value : ''
    }



    // to wishList btn
    goToWishList = () => {
        this.props.history.push('/wish');
    }


    // clear the cart && database 
    cartClear = () => {
        axios.delete(`/Cart.json`).then(() => {
            this.props.history.push('/main');
        });

    }

    // btn open the wishlist modal
    addWishModal = () => {
        this.setState({
            wishList: true,
            modalanimation: true
        })
    }

    

    onOpenInputModal = () => {
       this.setState({
           openInput: true,
           modalanimation: false
    
       })
    }

    //button close the wishlist modal
    onBackToCart = () => {
        this.setState({
            wishList: false,
            modalanimation: false,
            openInput: false
        })
    }

    handleChange=(e)=>{
        let value = e.target.value
            value = value.replace(/[^A-Za-z]/ig, '')
        this.setState({
            value: value.toUpperCase()
        });
    }

// button add to wishlist and clear the cart list && database
onAddToWishList = () => {
   
    axios.get(`/Cart.json`).then(res => {
        let items = Object.values(res.data).map((items) => {
            return items
        })

        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        axios.post(`/wishlist/${this.state.value + '  At ' + new Date().toLocaleDateString("en-US", options)}.json`, items).then(() => {
            axios.delete(`/Cart.json`).then(res => {
                this.props.history.push('/wish');
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
                    <CartNav goToWishList={this.goToWishList} cartClear={this.cartClear} />
                    <div className="container order">
                        <Modal show={this.state.modalanimation} >
                            <ModalWishList backToCartCancelWish={this.onBackToCart} addtowishlist={this.onOpenInputModal} />
                        </Modal>
                        <ModalInput show={this.state.openInput}>
                            <InputContent handleChange={(e)=>this.handleChange(e)} value={this.state.value} backToCartCancelWish={this.onBackToCart} addtowishlistKeyDown={this.onAddToWishList} addtowishlist={this.onAddToWishList}/>
                        </ModalInput>
                        <CartBody />
                        <CartBtns addToWishList={this.addWishModal} />
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Cart)



