import React, { Component } from 'react';
import CartNav from './CartNav';
import '../Cart/CartCss.css';



export class Cart extends Component {
    render() {
        return (
            <div>
              <section className='cart-section'>
                 <CartNav/>
              </section>
            </div>
        )
    }
}

export default Cart
