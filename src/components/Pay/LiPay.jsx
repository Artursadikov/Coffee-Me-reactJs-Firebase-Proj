import React from 'react'

export default function LiPay(props) {
    return (
        <div style={{ borderBottom: '1px solid coral', marginBottom: '10px', paddingBottom: '10px' }}>
            <ul style={{marginLeft: '15px'}} className='cartContent'>
                <li>{props.name}</li>
                <li>Amount: {props.amount}</li>
                <li>Price Per Sleev: {props.price}$</li>
                <li>Total: {props.totalPr}$</li>
            </ul>
        </div>
    )
}
