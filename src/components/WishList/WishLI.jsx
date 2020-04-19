import React from 'react';
import './WishLI.css';

export default function WishLI(props) {
    return (
        <div className="liWish">
            <ul onClick={props.openWishListItem} className='wishtLi'>
                <li className="wishItemName">Items name: <span style={{ color: '#343a40' }}>{props.item}</span></li>
                <h3>To detailes click here</h3>
            </ul>
        </div>
    )
}
