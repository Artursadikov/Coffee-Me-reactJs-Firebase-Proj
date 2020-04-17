import React from 'react';
import './ModalWishList.css';

export default function ModalWishList(props) {
    return (
        <div>
            <h3 className="addToWishHeader">Add to Wish-List ?</h3>
            <small className="wishSmall">The cart will be emptied...</small>
            <div className="wish-btn-div">
                <button onClick={props.addtowishlist} className="wishAddBtn">Add</button>
                <button className="wishBackBtn">back</button>
            </div>
        </div>
    )
}
