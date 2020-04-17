import React from 'react';
import './WishLI.css';

export default function WishLI(props) {
    return (
        <div>
            <ul className='wishtLi'>
                <li className="wishItemName">Item Creation Date : {props.wishName}</li>
                <h4 className="wishDetails">Click <em style={{color: 'red'}}>HERE</em> for details</h4>
            </ul>
        </div>
    )
}
