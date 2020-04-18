import React, { Component } from 'react';

import '../components/Signup-Signin.css'



class Signup extends Component {



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
                            <input name='email'  type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" className="form-control" />
                        </div>
                        <div className="buttonssingup">
                            <button type="submit" className="signupbtn sub">Sign-Up</button>
                            <button className="signupbtn google">Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

};

export default Signup;