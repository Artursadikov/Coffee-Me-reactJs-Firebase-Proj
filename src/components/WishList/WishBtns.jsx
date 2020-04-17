import React from 'react';

import './WishBtns.css';

export default function WishBtns(props) {
    return (
        <div className="wish-btns">
            <button onClick={props.backToShop} className="backFromWishBtn">Back To Shop</button>
            <button onClick={props.clearWishList} className="clearWishList">Clear</button>
        </div>
    )
}
