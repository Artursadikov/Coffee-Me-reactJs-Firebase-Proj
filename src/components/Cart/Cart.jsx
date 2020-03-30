import React, { Component } from 'react';
import CartNav from './CartNav';
import CartBody from './CartBody';
import CartBtns from './CartBtns';

import '../Cart/CartCss.css';





export class Cart extends Component {
    render() {
        return (
            <div>
              <section className='cart-section'>
                 <CartNav/>
                 <div className="container order">
                    <CartBody/>
                     <CartBtns/>
                 </div>
              </section>
            </div>
        )
    }
}

export default Cart
