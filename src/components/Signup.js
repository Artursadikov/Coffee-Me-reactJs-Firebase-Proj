import React, { Component } from 'react';
import '../components/Signup-Signin.css'
import fire from '../Configuration/Auth'




class Signup extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: '',
        user: false,
        firstName: '',
        lastName: ''
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

     actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: 'https://aqueous-chamber-01649.herokuapp.com/',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'https://aqueous-chamber-01649.herokuapp.com/'
        },
        android: {
          packageName: 'https://aqueous-chamber-01649.herokuapp.com/',
          installApp: true,
          minimumVersion: '7'
        },
        dynamicLinkDomain: 'https://aqueous-chamber-01649.herokuapp.com/'
      };

    submitSignUp = (e) => {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((userCredentials) => {
            if (userCredentials.user) {
                userCredentials.user.updateProfile({
                    displayName: this.state.firstName + ' ' + this.state.lastName
                }).then((s) => {
                    this.props.history.push('/');
                })
            }

            this.setState({
                user: userCredentials.user
            })


        }).catch(err => {
            this.setState({
                errorMessage: err.message,
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            })
        })

    }





    firsNameInput = (e) => {
        let value = e.target.value
            value = value.replace(/[^A-Za-z]/ig, '')
        this.setState({
            firstName: value.charAt(0).toUpperCase() + value.slice(1)
        })
    }

    lastNameInput = (e) => {
        let value = e.target.value
            value = value.replace(/[^A-Za-z]/ig, '')
        this.setState({
            lastName: value.charAt(0).toUpperCase() + value.slice(1)
        })

    }


    render() {
        return (
            <div style={{ overflow: 'hidden' }} className="container">
                <div className="divcontent">
                    <h2 className="createheader">Create <strong>Coffee Me</strong> Account</h2>
                    <form>
                        <div className="form-group">
                            <label style={{ color: 'gold', textAlign: 'center' }}>First-Name</label>
                            <input
                                required
                                pattern='[A-Za-z]'
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
                                    pattern='[A-Za-z]'
                                    placeholder="Last Name"
                                    type="text"
                                    className="form-control"
                                    name="last-name"
                                    value={this.state.lastName}
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
                                this.state.email === "" || this.state.password.length < 6 || this.state.lastName === "" || this.state.firstName === "" ?
                                    <button disabled style={{ backgroundColor: "transparent", border: "1px ivory solid" }} onClick={(e) => this.submitSignUp(e)} type="button" className="signupbtn">Sign-Up</button>
                                    : <button style={{backgroundColor: 'coral', color: 'ivory'}} onClick={(e) => this.submitSignUp(e)} type="button" className="signupbtn">Sign-Up</button>
                            }
                        </div>
                    </form>
                </div>
            </div>

        )
    }

};

export default Signup;