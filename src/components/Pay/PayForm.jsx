import React, { Component } from 'react';
import './PayFormCss.css';
import fire from '../../Configuration/Auth';
import Wrapper from '../Wrapper';



export default class PayForm extends Component {


    state = {
        user: null,
        _firstName: '',
        _lastName: '',
        _email: '',
        _dispName: '',
        checkboxChecked: true
    }


    authListener() {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({ user: user }) : this.setState({ user: null })
        })
    }

    shippingMethod = () => {
        if (this.state.checkboxChecked === true) {
            this.setState({
                checkboxChecked: false
            })
        } else if (this.state.checkboxChecked === false) {
            this.setState({
                checkboxChecked: true
            })
        }

    }


    componentDidMount() {
        this.authListener();

    }


    toPayMethod = () => {
        if (this.state.checkboxChecked === true) {
            localStorage.setItem('shippingFee', 1.5)
        } else {
            localStorage.setItem('shippingFee', 0)
        }
        this.props.history.push('/paymethod');
    }

    cancel = () => {
        localStorage.clear();
        this.props.history.goBack()
    }

    render() {



        return (
            <div className='container fdeliveryForm'>
                <div className='payFormHead'>
                    <h1 style={{ color: 'coral', textAlign: 'center', display: 'block' }}>Customer Details</h1>
                    <p style={{ color: 'ivory', textAlign: 'center', display: 'block' }}>To Delivery Fill The Form</p>
                </div>
                <div className='fdeliveryForm'>
                    <form>
                        {
                            !this.state.user ?
                                <Wrapper>
                                    <div className="form-group pay">
                                        <input type="text" className="form-control" placeholder="First Name"></input>
                                    </div>
                                    <div className="form-group pay">
                                        <input type="text" className="form-control" placeholder="Last Name"></input>
                                    </div>
                                    <div className="form-group pay">
                                        <input type="email" className="form-control" placeholder="@-Email"></input>
                                    </div>

                                </Wrapper>
                                :
                                <Wrapper>
                                    <div className="form-group pay">
                                        <input style={{ color: 'ivory', backgroundColor: 'transparent', textTransform: 'capitalize' }} disabled type="text" className="form-control" placeholder={this.state.user.displayName}></input>
                                    </div>
                                    <div className="form-group pay">
                                        <input style={{ color: 'ivory', backgroundColor: 'transparent', textTransform: 'capitalize' }} disabled type="email" className="form-control" placeholder={this.state.user.email}></input>
                                    </div>
                                </Wrapper>
                        }

                        <div className="form-group pay">
                            <input type="text" className="form-control" placeholder="Full Address"></input>
                        </div>
                        <div className="form-group pay">
                            <input type="tel" className="form-control" placeholder="Phone Number"></input>
                        </div>
                        <div className="form-check">
                            <label style={{ color: 'ivory', textAlign: 'center' }}>For Fast Delivery</label>
                            <small style={{ color: 'ivory', textAlign: 'center', display: 'block' }}>The Price For Faster Delivery Is <big>1.5$</big></small>
                            <small style={{ color: 'ivory', textAlign: 'center', display: 'block' }}>24 Hours Delivery</small>
                            <input checked={this.state.checkboxChecked} onChange={this.shippingMethod} className="form-check-input position-static pay" type="checkbox" value="option1"></input>
                        </div>
                    </form>
                </div>
                <div className='paybtnsform'>
                    <button onClick={this.toPayMethod} className="paySubmitForm" type="button">Submit</button>
                    <button onClick={this.cancel} className="cancelSubmitForm" type="button">Cancel</button>
                </div>
            </div>
        )
    }
}
