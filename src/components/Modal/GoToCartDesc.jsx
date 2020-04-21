import React, { Component } from 'react';

import './GoToCartDesc.css';



export default class GoToCartDesc extends Component {

    render() {
        return (
            <div>
                <h5 className='homeHeader'>Continue As a User Or Guest ?</h5>
                <div className="home-btn-div">
                    <button className='signupHome' onClick={this.props.goToSignIpPage}>Sign-In</button>
                    <button className='cancelBtnHome' onClick={this.props.cancelModal}>Cancel</button>
                    <button className='guestBtn' onClick={this.props.guestMode} >Guest</button>
                </div>
            </div>
        )
    }


}
