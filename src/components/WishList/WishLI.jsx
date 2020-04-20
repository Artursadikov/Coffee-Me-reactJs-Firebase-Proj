import React from 'react';
import './WishLI.css';

export default function WishLI(props) {
    return (
        <div className="liWish">
            <ul onClick={props.openWishListItem} className='wishtLi'>
                <li className="wishItemName">LIST NAME : <span style={{ color: '#343a40' }}>{props.item}</span></li>
                <h3 className="h3WishClickHere" style={{color: 'red', textAlign: 'center', marginTop: '10px', fontWeight: 'bolder'}} >To Details Click Here</h3>
            </ul>
        </div>
    )
}
