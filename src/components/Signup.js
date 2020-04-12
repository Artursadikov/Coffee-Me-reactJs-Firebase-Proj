import React, { Component } from 'react';

import '../components/Signup-Signin.css'
import fire from '../Configuration/fire';


class Signup extends Component {



    state = {
        email: "",
        password: ""
    }

    Signup = (e) => {
       
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u)
            }).catch(err => {
                console.log(err)
            })
    }


    handelChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
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
                            <input name='email' onChange={(e)=>this.handelChange(e)} value={this.state.email} type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" onChange={(e)=>this.handelChange(e)} value={this.state.password} type="password" className="form-control" />
                        </div>
                        <div className="buttonssingup">
                            <button type="submit" onClick={(e)=>this.Signup(e)} className="signupbtn sub">Sign-Up</button>
                            <button className="signupbtn google">Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

};

export default Signup;