import React from 'react';
import '../Cart/CartBtnsCss.css';

export default function CartBtns() {
    return (
        <div className="row order-btn">
            <button className="res-btn">Reset</button>
            <button className="next-btn">Next</button>
        </div>
    )
}
