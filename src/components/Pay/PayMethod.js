import React, { Component } from 'react';
import './PayMethodCss.css';
import fire from '../../Configuration/Auth'

export default class PayMethod extends Component {

    state = {
        userName: '',
        user: null,
        paypal: true,
        creditCard: true
    }


    authListener() {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({ user: user }) : this.setState({ user: null })
        })

    }

    componentDidMount() {
        this.authListener();

    }

    creditCard = () => {
        this.setState({
            paypal: false,
            creditCard: true
        })
    }

    paypal = () => {
        this.setState({
            paypal: true,
            creditCard: false
        })
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
                    <p style={{ color: 'ivory', marginLeft: '10px' }}>Subtotal :</p>
                    <p style={{ color: 'ivory', marginLeft: '10px' }}>Shipping Fee :</p>
                    <p style={{ color: 'ivory', marginLeft: '10px' }}>Total :</p>
                </div>
                <div className='pay-method'>
                    <h3 style={{ color: 'coral', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Payment Method</h3>
                    <div className="checkBoxDiv">
                        <div className="form-check paymethod">
                            <small style={{ color: 'ivory', textAlign: 'center', paddingLeft: '15px' }} >PayPal</small>
                            {
                                this.state.paypal ?
                                <input onChange={this.paypal} style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                                :
                                <input disabled  style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                            }
                            
                        </div>
                        <div className="form-check paymethod">
                            <small style={{ color: 'ivory', textAlign: 'center', padding: '0' }} >Credit Card</small>
                            {
                                this.state.creditCard ?
                                <input onChange={this.creditCard} style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                                :
                                <input disabled  style={{ display: 'block', width: '25px', height: '25px', marginLeft: 'auto', marginRight: 'auto', padding: '0' }} className="form-check-input position-static" type="checkbox" name="blankRadio" value="option1" aria-label="..."></input>
                            }
                          
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Credit Card Number"></input>
                    </div>
                    <div className="form-group date">
                        <input type="number" className="form-control month" placeholder="Month"></input>
                        <span style={{ color: 'ivory', fontSize: '200%' }}>/</span>
                        <input type="number" className="form-control year" placeholder="Year"></input>
                    </div>
                    <div className='paybtnsform'>
                        <button className="paySubmitForm" type="button">Pay</button>
                        <button onClick={() => this.props.history.goBack()} className="cancelSubmitForm" type="button">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
