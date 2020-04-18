import React from 'react';
import Wrapper from '../Wrapper';
import './WishModal.css';
import BackDropWish from './BackDropWish';

export default function WishModal(props) {
    return (
        <Wrapper>
            <BackDropWish open={props.open}/>
            <div onLoadStart={props.modalContent}
                style={{
                    transform: props.open ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.open ? '1' : '0'
                }}
                className="ModalWish">
                {props.children}
            </div>
        </Wrapper>

    )
}