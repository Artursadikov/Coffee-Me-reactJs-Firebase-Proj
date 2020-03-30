import React from 'react'
import './CartNavCss.css';
import { Link } from 'react-router-dom';

export default function CartNav(props) {
    return (
        <nav className='cart-nav'>
            <ul className="cart-ul">
                <h3 className="userNameDisplay">LOGO</h3>
                <Link to='/main' className="cart-li">Back-to-Shop</Link>
                <Link to='/wishlist' className="cart-li">Add-to-Wishlist</Link>
                <li className="your-cart">You'r Cart (Items<span>( )</span>)</li>
            </ul>
        </nav>
    )
}
