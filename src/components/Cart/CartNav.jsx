import React from 'react'
import './CartNavCss.css';

export default function CartNav() {
    return (
        <nav className='cart-nav'>
            <ul className="cart-ul">
                <h3 className="userNameDisplay">Hello user</h3>
                <li className="cart-li">Back-to-Shop</li>
                <li className="cart-li">Add-to-Wishlist</li>
                <li className="your-cart">You'r Cart (Items<span>( )</span>)</li>
            </ul>
        </nav>
    )
}
