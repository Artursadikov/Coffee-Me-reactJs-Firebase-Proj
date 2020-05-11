import React, { Component } from 'react';
import './PayContentCss.css';
import axios from '../../Configuration/axios-data';
import fire from '../../Configuration/Auth';
import LiPay from '../Pay/LiPay';

export default class PayContent extends Component {


    state = {
        user: null,
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        adress: '',
        userDisp: null,
        invoice: '',
        totalPrice: '',
        shippingFee: 0,
        data: '',


    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({ user: user, userDisp: fire.auth().currentUser.displayName }) : this.setState({ user: null, userDisp: 'Guest' })
        })

    }

    rendNumInvoice = () => {
        let num = Math.floor((Math.random() * 10000000000));

        this.setState({
            invoice: num
        })

    }

    async componentDidMount() {
        await this.authListener();
        this.rendNumInvoice();
        this.setState({
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            tel: localStorage.getItem('tel'),
            email: localStorage.getItem('email'),
            adress: localStorage.getItem('adress'),
            totalPrice: parseInt(localStorage.getItem('totalCartPrice')),
            shippingFee: parseFloat(localStorage.getItem('shippingFee'))

        })

        axios.get(`/Cart/${this.state.userDisp}.json`).then(res => {
            console.log(res)
            this.setState({
                data: res.data
            })
        })

        //console.log(this.state.data)

    }


    payingAndBackToHome = () => {

        axios.delete(`/Cart/${this.state.userDisp}.json`).then(() => {
            localStorage.clear();


        }).then(() => {
            window.location.href = '/'
        })

    }




    render() {

        let discount = this.state.shippingFee !== 0 ? ((this.state.shippingFee + this.state.totalPrice) * 10) / 100 :
            (this.state.totalPrice * 10) / 100;


        return (
            <div>
                <div style={{ borderBottom: '1px solid coral', marginBottom: '10px' }} className="payContentHeader">
                    <h2 style={{ textAlign: 'center', }}>You'r Bill</h2>
                </div>
                <div style={{ borderBottom: '1px solid coral', marginBottom: '10px' }} className="billBody">
                    <p style={{ fontWeight: 'bolder' }}>Invoice Number: <span style={{ fontWeight: 'normal' }}>{this.state.invoice}</span> </p>
                    <p style={{ fontWeight: 'bolder' }}>Total Price: <span style={{ fontWeight: 'normal' }}>{this.state.shippingFee !== 0 ? this.state.shippingFee + this.state.totalPrice : this.state.totalPrice}$</span> </p>
                    <p style={{ fontWeight: 'bolder' }}>Shipping Method: <span style={{ fontWeight: 'normal' }}>{this.state.shippingFee !== 0 ? 'Fast(24h)' : '4-6 Days'}</span> </p>
                    {
                        this.state.user ?
                            <p style={{ fontWeight: 'bolder' }}>Total Discount For Club Member: <span style={{ fontWeight: 'normal' }}>{this.state.shippingFee !== 0 ? (this.state.shippingFee + this.state.totalPrice) - discount : (this.state.totalPrice - discount)}$</span> </p>
                            :
                            null
                    }
                </div>
                <div style={{ borderBottom: '1px solid coral', marginBottom: '10px' }} className="customerDetail">
                    <p style={{ fontWeight: 'bolder' }}>Customer Name:  <span style={{ fontWeight: 'normal' }}>{!this.state.user ? this.state.firstName : this.state.userDisp}</span></p>
                    <p style={{ fontWeight: 'bolder' }}>Tel: <span style={{ fontWeight: 'normal' }}>{this.state.tel}</span></p>
                    <p style={{ fontWeight: 'bolder' }}>Email: <span style={{ fontWeight: 'normal' }}>{!this.state.user ? this.state.email : this.state.user.email}</span></p>
                    <p style={{ fontWeight: 'bolder' }}>Address: <span style={{ fontWeight: 'normal' }}>{this.state.adress}</span></p>
                </div>

                {this.state.data !== null ?
                    Object.values(this.state.data).map((item, index) => {
                        return (
                            <LiPay key={index}
                                price={item.price}
                                amount={item.amount}
                                name={item.name}
                                totalPr={item.totalPr}
                            />
                        )
                    })
                    : null
                }
                {/* <li style={{ fontWeight: 'bolder', marginLeft: '15px' }}><span style={{fontWeight: 'normal'}}></span></li> */}

                <h4 className='thankYouPay' style={{ borderBottom: '1px solid coral', marginBottom: '10px', paddingBottom: '10px', textAlign: 'center' }}>Thank You For Buying , Wish To See You Soon !</h4>
                <small style={{ borderBottom: '1px solid coral', marginBottom: '10px', paddingBottom: '10px', textAlign: 'center' }}>A Copy Was Sent To The Email You Signed Up With</small>
                <div style={{ marginBottom: '10px' }} className="home-btn-div">
                    <button onClick={this.payingAndBackToHome} className='guestBtn'>Close</button>
                </div>
            </div>
        )
    }
}
