import React from 'react';
import './DescListWIsh.css'

export default function DescListWIsh(props) {
    return (
        <div>
            <ul className="modUL">
                <li className="modLI">Poduct Name: {props.name}</li>
                <li className="modLI">Amount Of Capsule Sleeves: {props.amount}</li>
                <li className="modLI">Price Per Sleeve: {props.price}$</li>
                <li className="modLI">Total Price For {props.name}: {props.totalPr}$</li>
            </ul>
           
        </div>
    )
}
