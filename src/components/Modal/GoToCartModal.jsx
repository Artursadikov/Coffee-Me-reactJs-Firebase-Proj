import React from 'react';
import Wrapper from '../Wrapper';
import './WishModal.css';
import BackDrop from './BackDrop';
import { Component } from 'react';

export default class GoToCartModal extends Component {

    render() {
        return (
            <Wrapper>
                <BackDrop show={this.props.show} />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className="Modal">
                    {this.props.children}
                </div>
            </Wrapper>

        )

    }


}
