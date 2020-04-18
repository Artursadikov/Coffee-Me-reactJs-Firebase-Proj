import React from 'react';
import './BackDrop.css';

export default function BackDropWish(props) {
    return (
        props.open  ? <div className="backDrop"></div> : null 
    )
}
