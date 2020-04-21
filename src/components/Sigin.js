import React, { Component } from 'react';
import fire from '../Configuration/Auth';
import Wrapper from './Wrapper';
import { Redirect } from 'react-router-dom';

class Signin extends Component {

    state = {
        email: '',
        password: '',
        user: null,
        errorMessage: ""
    }


    authListenet = () => {
        fire.auth().onAuthStateChanged((user) => {
            user ? this.setState({ user }) : this.setState({ user: null })
            
        })
    }

    componentWillMount() {

            this.authListenet();
        
    }



    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    passwordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitSignin = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            this.setState({
                user: user
            })

            console.log(user)
        }).catch(err => {
            let errorMSG = "The password or the email is invalid"
            this.setState({
                errorMessage: errorMSG
            })
        })
    }

    




    render() {
        return (
            <div className="container">
                <div className="divcontent">
                    {
                        !this.state.user ? <h2 className="createheader">Sign-In to you'r account... </h2> :
                            <h2 style={{ textTransform: 'capitalize', fontSize: '25px' }} className="createheader">Welcome Back {this.state.user.email} !</h2>
                    }

                    <form>
                                    <div className="form-group">
                                        <label style={{ color: 'gold', textAlign: 'center' }}>Email address</label>
                                        <input
                                        required
                                            value={this.state.email}
                                            onChange={(e) => this.emailHandler(e)}
                                            name='email' placeholder="E-mail"
                                            type="email" className="form-control"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ color: 'gold', textAlign: 'center' }}>Password</label>
                                        <input
                                        required
                                            value={this.state.password}
                                            onChange={(e) => this.passwordHandler(e)}
                                            name="password" placeholder="Password"
                                            type="password" className="form-control" />
                                    </div>
                                    {
                                        this.state.errorMessage ? <h5 className='errorMsg'>{this.state.errorMessage}</h5>
                                            :
                                            null
                                    }
                        <div className="buttonssingup">

                            {this.state.user ?
                                 <Redirect to= "/" />
                                :
                                <Wrapper>
                                    {
                                        this.state.email === '' || this.state.password === '' ?
                                            <button disabled onClick={(e) => this.submitSignin(e)} type="button" className="signupbtn">Sign-In</button>
                                            : <button onClick={(e) => this.submitSignin(e)} type="button" className="signupbtn">Sign-In</button>
                                    }
                                    <button className="signupbtn google">Login with Google</button>
                                </Wrapper>
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }

};

export default Signin;