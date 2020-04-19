import React from 'react';
import './InputContent.css';

export default function InputContent(props) {
    return (
        <div>
            <h4 className="addToWishHeader">Name You'r Wish-Item:</h4>
            <input className="modal-input" type="text" />
            <div className="wish-btn-div">
                <button onClick={props.addtowishlist} className="wishAddBtn">Add</button>
                <button onClick={props.backToCartCancelWish} className="wishBackBtn">back</button>
            </div>
        </div>
    )
}
