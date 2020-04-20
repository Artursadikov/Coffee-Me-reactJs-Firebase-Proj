import React, { Component } from 'react';
import fire from '../../Configuration/Auth';

import './GoToCartDesc.css';



export default class GoToCartDesc extends Component {


    state = {
        user: {}
    }

    authListenet = () => {
        fire.auth().onAuthStateChanged((user) => {
            user ? this.setState({ user }) : this.setState({ user: null })
            console.log(this.state.user)
        })
    }

    componentDidMount() {
        this.authListenet();
    }


    render() {
        return (
            <div>
                <h5 className='homeHeader'>Continue As a User Or Guest ?</h5>
                <div className="home-btn-div">
                    {
                        this.state.user ? <button className='signupHome' onClick={this.props.goToSignUpPage}>Log-In</button> :
                        <button className='signupHome' onClick={this.props.goToSignUpPage}>Sign-up</button>
                    }
                    <button className='cancelBtnHome' onClick={this.props.cancelModal}>Cancel</button>
                    <button className='guestBtn' onClick={this.props.guestMode} >Guest</button>
                </div>
            </div>
        )
    }


}
