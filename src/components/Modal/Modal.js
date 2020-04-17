import React from 'react';
import './Modal.css';

export default function Modal(props) {
    return (
        <div
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
         className="Modal">
            {props.children}
        </div>
    )
}
