import React, { Component } from 'react';
import Wrapper from './Wrapper';
import fire from '../Configuration/Auth';




class Signin extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: '',
        user: {}
    }


    submitSignin = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
           this.props.history.push('/');
            this.setState({
                user: user
            })
        }).catch(err => {
            let errorMSG = "The password or the email is invalid !"
            console.log(err)
            this.setState({
                errorMessage: errorMSG,
                email: '',
                password: ''
            })
        })
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



    render() {
        return (
                <div className="container">
                    <div className="divcontent">
                        <h2 className="createheader">Login</h2>
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
                                    type="password" className="form-control"
                                />
                            </div>
                            <h5 className='errorMsg'>{this.state.errorMessage}</h5>
                            <div className="buttonssingup">
                                <Wrapper>
                                    {this.state.email === "" || this.state.password === "" ?
                                        <button disabled onClick={(e) => this.submitSignin(e)} type="button" style={{ backgroundColor: "transparent", border: "1px ivory solid" }} className="signupbtn">Login</button>
                                        :
                                        <button onClick={(e) => this.submitSignin(e)} type="button" className="signupbtn">Login</button>
                                    }
                                    <button className="signupbtn google">Login With Google</button>
                                </Wrapper>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }

};

export default Signin;