import React from 'react';
import '../Cart/CartBodyCss.css';

export default function CartBody() {
    return (
        <div className="row order">
            <div className="order-description">
                <h4>order id</h4>
                <h1>total price</h1>
                <h2>user name</h2>
            </div>
            <div className="choosen-items">
                <ul>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
            </div>
        </div>
    )
}
