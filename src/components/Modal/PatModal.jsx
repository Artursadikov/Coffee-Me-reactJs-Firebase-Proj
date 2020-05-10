import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import BackDrop from './BackDrop';
import '../Modal/PayModalCss.css';


export default class PatModal extends Component {
    render() {
        return (
            <Wrapper>
            <BackDrop show={this.props.show}/>
            <div
                style={{
                    transform: this.props.show? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show? '1' : '0'
                }}
                className="ModalPay">
                {this.props.children}
            </div>
        </Wrapper>
        )
    }
}
