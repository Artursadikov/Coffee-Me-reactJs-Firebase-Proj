import React from 'react';
import './WishModDescription.css';

export default function WishModDescription(props) {
    return (
        <div>
            <h4 style={{color: 'black'}}>{props.listNameHeader}</h4>
            {props.children}
            <div className="modBTN">
                <button onClick={props.paymentBtn} className="modPAY">Payment</button>
                <button onClick={props.cancel} className="modCAN">Cancel</button>
                <button onClick={props.deleteItemFromWishList} className="modDEL">Delete</button>
            </div>
        </div>
    )
}
