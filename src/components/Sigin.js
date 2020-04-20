import React, { Component } from 'react';
import fire from '../Configuration/Auth';


class Signin extends Component {

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

    submitSignin=(e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            console.log(user)
        }).catch(err=>{
            console.log(err)
        })
    }

    submitalogout =(e)=>{
        e.preventDefault();
        fire.auth().signOut();
    }




    render() {
        return (
            <div className="container">
                <div className="divcontent">
                    <h2 className="createheader">Login to you'r account... </h2>
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                value={this.state.email}
                                onChange={(e) => this.emailHandler(e)}
                                name='email' placeholder="E-mail"
                                type="email" className="form-control"
                                aria-describedby="emailHelp"
                            />
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
                            <button onClick={(e)=>this.submitSignin(e)} type="button" className="signupbtn sub">Sign-In</button>
                            <button onClick={(e)=>this.submitalogout(e)} type="button" className="signupbtn sub">Log-Out</button>
                            <button className="signupbtn google">Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

};

export default Signin;