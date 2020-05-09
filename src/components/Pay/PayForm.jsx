import React, { Component } from 'react';
import './PayFormCss.css';
import fire from '../../Configuration/Auth';
import Wrapper from '../Wrapper';



export default class PayForm extends Component {


    state = {
        user: null,
        email: '',
        firstName: '',
        lastName: '',
        tel: '',
        adress: '',
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

        if (this.state.user === null) {
            localStorage.setItem('firstName', this.state.firstName)
            localStorage.setItem('lastName', this.state.lastName)
            localStorage.setItem("email", this.state.email)
            localStorage.setItem('tel', this.state.tel)
            localStorage.setItem('adress', this.state.adress)
        } else {
            localStorage.setItem('tel', this.state.tel)
            localStorage.setItem('adress', this.state.adress)
        }


        this.props.history.push('/paymethod');
    }



    cancel = () => {
        localStorage.clear();
        this.props.history.goBack()
    }




    telInput = (e) => {
        this.setState({
            tel: e.target.value
        })
    }

    adressInput = (e) => {
        this.setState({
            adress: e.target.value
        })
    }

    firstNameInput = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    lastNameInput = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    emailInput = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render(e) {


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
                                        <input onChange={(e) => this.firstNameInput(e)} value={this.state.firstName} type="text" className="form-control" placeholder="First Name"></input>
                                    </div>
                                    <div className="form-group pay">
                                        <input onChange={(e) => this.lastNameInput(e)} value={this.state.lastName} type="text" className="form-control" placeholder="Last Name"></input>
                                    </div>
                                    <div className="form-group pay">
                                        <input onChange={(e) => this.emailInput(e)} value={this.state.email} type="email" className="form-control" placeholder="@-Email"></input>
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
                            <input onChange={(e) => this.adressInput(e)} value={this.state.adress} type="text" className="form-control" placeholder="Full Address"></input>
                        </div>
                        <div className="form-group pay">
                            <input onChange={(e) => this.telInput(e)} value={this.state.tel} type="tel" className="form-control" placeholder="Phone Number"></input>
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

                    {
                        !this.state.user ?
                            this.state.firstName === '' || this.state.lastName === '' || this.state.email === "" || (this.state.tel === "" || this.state.tel.length < 6 || isNaN(this.state.tel)) || (this.state.adress === "" || this.state.adress < 5) ?
                                <button style={{ color: 'ivory', backgroundColor: 'transparent', border: '1px solid ivory' }} disabled className="paySubmitForm" type="button">Submit</button>
                                :
                                <button onClick={this.toPayMethod} className="paySubmitForm" type="button">Submit</button>
                            :
                            (this.state.tel === "" || this.state.tel.length < 6 || isNaN(this.state.tel)) || (this.state.adress === "" || this.state.adress < 5) ?
                                <button style={{ color: 'ivory', backgroundColor: 'transparent', border: '1px solid ivory' }} disabled className="paySubmitForm" type="button">Submit</button>
                                :
                                <button onClick={this.toPayMethod} className="paySubmitForm" type="button">Submit</button>
                    }

                    <button onClick={this.cancel} className="cancelSubmitForm" type="button">Cancel</button>
                </div>
            </div>
        )
    }
}
