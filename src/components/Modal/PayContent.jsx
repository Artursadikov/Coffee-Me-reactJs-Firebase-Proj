import React, { Component } from 'react';
import './PayContentCss.css';
import axios from '../../Configuration/axios-data';
import fire from '../../Configuration/Auth';


export default class PayContent extends Component {


    state = {
        user: null
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({ user: user, userDisp: fire.auth().currentUser.displayName }) : this.setState({ user: null, userDisp: 'Guest' })
        })

    }

    componentDidMount() {
        this.authListener();

    }


    payingAndBackToHome = () => {

        axios.delete(`/Cart/${this.state.userDisp}.json`).then(() => {
            localStorage.clear();
            
           
        }).then(()=>{
            window.location.href = '/'
        })

    }




    render() {


        return (
            <div>
                <div style={{ borderBottom: '1px solid coral', marginBottom: '10px' }} className="payContentHeader">
                    <h2 style={{ textAlign: 'center', }}>You'r Bill</h2>
                </div>
                <div style={{ borderBottom: '1px solid coral', marginBottom: '10px' }} className="billBody">
                    <p>Payment Method: </p>
                    <p>Invoice Number: </p>
                    <p>Total Price: </p>
                    <p>Shipping Method: </p>
                </div>
                <div style={{ borderBottom: '1px solid coral', marginBottom: '10px' }} className="customerDetail">
                    <p>Customer Name:</p>
                    <p>Tel: </p>
                    <p>Email: </p>
                    <p>Address: </p>
                </div>
                <ol style={{ borderBottom: '1px solid coral', marginBottom: '10px', paddingBottom: '10px' }} className='cartContent'>
                    <li></li>
                </ol>
                <h4 className='thankYouPay' style={{ borderBottom: '1px solid coral', marginBottom: '10px', paddingBottom: '10px', textAlign: 'center' }}>Thank You For Buying , Wish To See You Soon !</h4>
                <small style={{ borderBottom: '1px solid coral', marginBottom: '10px', paddingBottom: '10px', textAlign: 'center' }}>A Copy Was Sent To The Email You Signed Up With</small>
                <div style={{ marginBottom: '10px' }} className="home-btn-div">
                    <button onClick={this.payingAndBackToHome} className='guestBtn'>Home</button>
                </div>
            </div>
        )
    }
}
