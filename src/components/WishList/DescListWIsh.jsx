import React from 'react'

export default function DescListWIsh(props) {
    return (
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.amount}</li>
                <li>{props.price}</li>
                <li>{props.totalPr}</li>
            </ul>
        </div>
    )
}
