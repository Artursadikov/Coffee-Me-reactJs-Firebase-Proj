import React from 'react'

export default function LiPay(props) {
    return (
        <div style={{ borderBottom: '1px solid coral', marginBottom: '10px', paddingBottom: '10px' }}>
            <ol style={{marginLeft: '15px'}} className='cartContent'>
                <li>{props.name}</li>
                <li>{props.amount}</li>
                <li>{props.price}$</li>
                <li>{props.totalPr}$</li>
            </ol>
        </div>
    )
}
