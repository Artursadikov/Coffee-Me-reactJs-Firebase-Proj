import React, { Component } from 'react';
import fire from '../Configuration/Auth';

import '../components/Signup-Signin.css'



class Signup extends Component {

    state = {
        email: '',
        password: ''
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

    submitSignUp=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            console.log(user)
        }).catch(err=>{
            console.log(err)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="divcontent">
                    <h2 className="createheader">Create a new <strong>Coffee Me</strong> account...</h2>
                    <form>
                        <div className="form-group">
                            <label>First-Name</label>
                            <input type="text" className="form-control" />
                            <div className="form-group">
                                <label>Last-Name</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                value={this.state.email}
                                onChange={(e) => this.emailHandler(e)}
                                name='email' placeholder="E-mail"
                                type="email" className="form-control"
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                value={this.state.password}
                                onChange={(e) => this.passwordHandler(e)}
                                name="password" placeholder="Password"
                                type="password" className="form-control" />
                        </div>
                        <div className="buttonssingup">
                            <button onClick={(e)=>this.submitSignUp(e)} type="button" className="signupbtn sub">Sign-Up</button>
                            <button className="signupbtn google">Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

};

export default Signup;