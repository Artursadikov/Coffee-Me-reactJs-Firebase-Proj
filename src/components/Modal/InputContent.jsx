import React from 'react';
import './InputContent.css';

export default function InputContent(props) {
    return (
        <div>
            <h4 style={{ marginBottom: '30px' }} className="addToWishHeader">Name You'r Wish-Item:</h4>
            {
                props.value === '' ?
                    <small style={{ textAlign: 'center', display: 'block', color: 'ivory', backgroundColor: 'rgba(240, 22, 22, 0.349)' }}>English Only !!!</small>
                    : null
            }

            <input
                required
                pattern='[A-Za-z]'
                className="modal-input"
                type="text"
                value={props.value}
                onChange={props.handleChange} />
            <div className="wish-btn-div">
                {
                    props.value === '' ?
                        <button style={{backgroundColor: 'transparent', border: 'gold 1px solid'}} disabled onClick={props.addtowishlist} className="wishAddBtn">Disabled</button>
                        : <button onKeyDown={props.addtowishlistKeyDown} onClick={props.addtowishlist} className="wishAddBtn">Add</button>
                }

                <button onClick={props.backToCartCancelWish} className="wishBackBtn">back</button>
            </div>
        </div>
    )
}
