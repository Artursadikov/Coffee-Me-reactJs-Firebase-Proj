import React from 'react';
import './WishModDescription.css';

export default function WishModDescription(props) {
    return (
        <div>
            {props.children}
            <div className="modBTN">
                <button className="modPAY">Payment</button>
                <button onClick={props.cancel} className="modCAN">Cancel</button>
                <button className="modDEL">Delete</button>
            </div>
        </div>
    )
}
