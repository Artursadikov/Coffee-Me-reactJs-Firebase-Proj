import React, { Component } from 'react';
import CartNav from './CartNav';
import CartBody from './CartBody';
import CartBtns from './CartBtns';

import '../Cart/CartCss.css';





export class Cart extends Component {

    cartClear = () => {
        localStorage.clear();
        window.location.reload(false);
    }


    render() {
        return (
            <div>
                <section className='cart-section'>
                    <CartNav  cartClear={this.cartClear} />
                    <div className="container order">
                        <CartBody />
                        <CartBtns />
                    </div>
                </section>
            </div>
        )
    }
}

export default Cart
