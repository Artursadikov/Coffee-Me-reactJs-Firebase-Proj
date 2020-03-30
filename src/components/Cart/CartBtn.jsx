import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


export default function CartBtn(props) {
    return (
        
            <div className="btncart row">
                <button onClick={props.toCart} className="cartbtn" type="button"><FontAwesomeIcon icon={faCoffee} /></button>
            </div>
        
    )
}
