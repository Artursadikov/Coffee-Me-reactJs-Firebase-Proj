import React from 'react';
import './WishLI.css';

export default function WishLI(props) {
    return (
        <div className="liWish">
            <ul onClick={props.openWishListItem} className='wishtLi'>
                <li className="wishItemName">Items name: <span style={{ color: '#343a40' }}>-{props.name}-</span></li>
                <li className="wishItemName">Amount: <span style={{ color: 'red' }}>{props.amount}</span></li>
                <li className="wishItemName">Price: <span style={{ color: 'red' }}>{props.price}</span>$</li>
                <li className="wishItemName">Total Sleeves Price: <span style={{ color: 'red' }}>{props.totalPr}</span>$</li>
                <div className="wishBtnDiv">
                    <button className="continue">Payment</button>
                    <button className="delWish">Delete</button>
                </div>
            </ul>
        </div>
    )
}
