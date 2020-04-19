import React from 'react';
import './DescListWIsh.css'

export default function DescListWIsh(props) {
    return (
        <div>
            <ul className="modUL">
                <li className="modLI">Poduct Name: <span style={{color: 'red'}}>{props.name}</span></li>
                <li className="modLI">Amount Of Capsule Sleeves: <span style={{color: 'grey'}}>{props.amount}</span></li>
                <li className="modLI">Price Per Sleeve: <span style={{color: 'grey'}}>{props.price}$</span></li>
                <li className="modLI">Total Price For: <span style={{color: 'red'}}>{props.name}</span> <span style={{color: 'grey'}}>{props.totalPr}$</span></li>
            </ul>
        </div>
    )
}
