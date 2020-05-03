import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper';
import BackDrop from './BackDrop';

export default class PayBtnModal extends Component {
    render() {
        return (
            <Wrapper>
            <BackDrop show={this.props.show}/>
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
