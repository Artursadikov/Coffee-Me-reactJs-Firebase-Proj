import React, { Component } from 'react';
import './PayMethodCss.css';
import fire from '../../Configuration/Auth'
import Wrapper from '../Wrapper';



export default class PayMethod extends Component {

    state = {
        userName: '',
        user: null,
        checkedPayPal: false,
        checkedCredit: false,
        subTotalCartPrice: 0,
        itemInTheCart: 0,
        shippingFee: 0

    }


    authListener() {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({ user: user }) : this.setState({ user: null })
        })

    }

    componentDidMount() {
        this.authListener();

        this.setState({
            subTotalCartPrice: parseFloat(localStorage.getItem('totalCartPrice')),
            itemInTheCart: localStorage.getItem('numOfCartItems'),
            shippingFee: parseFloat(localStorage.getItem('shippingFee'))

        })
    }





    creditCard = () => {
        if (this.state.checkedCredit === false) {
            this.setState({
                checkedCredit: true,
                checkedPayPal: false
            })
        } else if (this.state.checkedCredit === true) {
            this.setState({
                checkedCredit: false,
                checkedPayPal: false
            })
        }

    }

    paypal = () => {
        if (this.state.checkedPayPal === false) {
            this.setState({
                checkedCredit: false,
                checkedPayPal: true
            })
        } else if (this.state.checkedPayPal === true) {
            this.setState({
                checkedCredit: false,
                checkedPayPal: false
            })
        }

    }

    cancel = () => {

        localStorage.clear();
        this.props.history.push('/cart');

    }

    render() {

        return (
            <div className="container payMethod">
                <div className='payMethodHead'>
                    <h1 style={{ color: 'coral', textAlign: 'center', display: 'block' }}>Payment<span style={{ color: 'ivory', opacity: '0.5', fontSize: '15px' }}>(Dummy!)</span></h1>
                    <h5 style={{ color: 'ivory', textAlign: 'center', display: 'block' }}>Total Cart</h5>
                </div>
                <div className='pay-total'>
                    {
                        this.state.user ?
                            <h6 style={{ color: 'ivory', textAlign: 'center' }}>{fire.auth().currentUser.displayName}</h6>
                            :
                            <h6 style={{ color: 'ivory', textAlign: 'center' }}>Guest</h6>
                    }
                    <p style={{ color: 'ivory', marginLeft: '10px' }}>Subtotal : {this.state.subTotalCartPrice}$</p>
                    {
                        this.state.shippingFee !== 0 ?
                            <p style={{ color: 'ivory', marginLeft: '10px' }}>Shipping Fee : {this.state.shippingFee}$</p>
                            :
                            <p style={{ color: 'ivory', marginLeft: '10px' }}>Shipping Fee : You Did Not Choose The Fast Delivery</p>
                    }

                    <p style={{ color: 'ivory', marginLeft: '10px' }}>Total Items In You'r Cart : {this.state.itemInTheCart}</p>
                    <p style={{ color: 'ivory', marginLeft: '10px' }}>Total : {this.state.subTotalCartPrice + this.state.shippingFee}$</p>
                </div>
                <div className='pay-method'>
                    <h3 style={{ color: 'coral', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Payment Method</h3>
                    <div className="checkBoxDiv">
                        {
                            !this.state.checkedCredit ?
                                <div className="form-check paymethod">
                                    <small style={{ color: 'ivory', textAlign: 'center', paddingLeft: '15px' }} >PayPal</small>
                                    <input checked={this.state.checkedPayPal} onChange={this.paypal} style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                                </div>
                                :
                                <div className="form-check paymethod">
                                    <small style={{ color: 'ivory', textAlign: 'center', paddingLeft: '15px' }} >PayPal</small>
                                    <input disabled checked={this.state.checkedPayPal} onChange={this.paypal} style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                                </div>

                        }

                        {
                            !this.state.checkedPayPal ?
                                <div className="form-check paymethod">
                                    <small style={{ color: 'ivory', textAlign: 'center', padding: '0' }} >Credit Card</small>
                                    <input checked={this.state.checkedCredit} onChange={this.creditCard} style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                                </div> :
                                <div className="form-check paymethod">
                                    <small style={{ color: 'ivory', textAlign: 'center', padding: '0' }} >Credit Card</small>
                                    <input disabled checked={this.state.checkedCredit} onChange={this.creditCard} style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                                </div>
                        }

                    </div>
                    {
                        !this.state.checkedPayPal ?
                            <Wrapper>
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="Credit Card Number"></input>
                                </div>
                                <div className="form-group date">
                                    <input type="number" className="form-control month" placeholder="Month"></input>
                                    <span style={{ color: 'ivory', fontSize: '200%' }}>/</span>
                                    <input type="number" className="form-control year" placeholder="Year"></input>
                                </div>
                            </Wrapper>
                            :
                            <Wrapper>
                                <div style={{ opacity: '0.5' }} className="form-group">
                                    <input disabled type="number" className="form-control" placeholder="Credit Card Number"></input>
                                </div>
                                <div style={{ opacity: '0.5' }} className="form-group date">
                                    <input disabled type="number" className="form-control month" placeholder="Month"></input>
                                    <span style={{ color: 'ivory', fontSize: '200%' }}>/</span>
                                    <input disabled type="number" className="form-control year" placeholder="Year"></input>
                                </div>
                            </Wrapper>

                    }
                    <div className='paybtnsform'>
                        <button className="paySubmitForm" type="button">Pay</button>
                        <button onClick={this.cancel} className="cancelSubmitForm" type="button">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
