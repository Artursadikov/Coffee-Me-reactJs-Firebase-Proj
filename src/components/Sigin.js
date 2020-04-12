import React, { Component } from 'react';


class Signin extends Component {



    


    render() {
        return (
            <div className="container">
                <div className="divcontent">
                    <h2 className="createheader">Login to you'r account... </h2>
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="buttonssingup">
                            <button type="submit" className="signupbtn sub">Sign-In</button>
                            <button className="signupbtn google">Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

};

export default Signin;