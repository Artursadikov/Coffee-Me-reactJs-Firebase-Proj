import React, { Component } from 'react';
import fire from '../Configuration/Auth';

import '../components/Signup-Signin.css'





class Signup extends Component {

    state = {
        email: '',
        password: '',
        user: null,
        errorMessage: '',
        firstName: this.props.UserFirstName,
        lastName: this.props.UserLirstName
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
            email: e.target.value,
        })
    }

    passwordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitSignUp = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            
        }).then(() => {
            this.setState({
                email: '',
                password: ''
            })


            this.props.history.push('/');


        }).catch(err => {
            console.log(err.message);
            this.setState({
                errorMessage: err.message
            })
        })
    }

    firsNameInput = (e) => {
        this.setState({
            firstName: e.target.value
        })
        console.log(this.state.firstName)
    }

    lastNameInput = (e) => {
        this.setState({
            lastName: e.target.value
        })
        console.log(this.state.lastName)
    }


    render() {
        return (
            <div style={{ overflow: 'hidden' }} className="container">
                <div className="divcontent">
                    <h2 className="createheader">Create a new <strong>Coffee Me</strong> account...</h2>
                    <form>
                        <div className="form-group">
                            <label style={{ color: 'gold', textAlign: 'center' }}>First-Name</label>
                            <input
                                required
                                placeholder="First Name"
                                type="text"
                                className="form-control"
                                name="firs-name"
                                value={this.state.firstName}
                                onChange={(e) => this.firsNameInput(e)}
                            />
                            <div className="form-group">
                                <label style={{ color: 'gold', textAlign: 'center' }}>Last-Name</label>
                                <input
                                    required
                                    placeholder="Last Name"
                                    type="text"
                                    className="form-control"
                                    name="last-name"
                                    value={this.state.lasttName}
                                    onChange={(e) => this.lastNameInput(e)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={{ color: 'gold', textAlign: 'center' }}>Email address</label>
                            <input
                                required
                                value={this.state.email}
                                onChange={(e) => this.emailHandler(e)}
                                name='email' placeholder="E-mail"
                                type="email" className="form-control"
                                aria-describedby="emailHelp" />
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
                        <div style={{ marginTop: '20px' }} className="buttonssingup">
                            {
                                this.state.email === "" || this.state.password === "" ?
                                    <button disabled onClick={(e) => this.submitSignUp(e)} type="button" className="signupbtn">Sign-Up</button>
                                    : <button onClick={(e) => this.submitSignUp(e)} type="button" className="signupbtn">Sign-Up</button>
                            }

                        </div>
                    </form>
                </div>
            </div>

        )
    }

};

export default Signup;