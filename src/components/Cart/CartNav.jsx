import React from 'react';
import './CartNavCss.css';


export default function CartNav(props) {
    
    return (
        <nav className='cart-nav'>
            <ul className="cart-ul">
                <h3 className="userNameDisplay">LOGO</h3>
                <button onClick={props.cartClear} type="button" className="empty-cart">Empty Cart</button>
            </ul>
        </nav>
    )
}
