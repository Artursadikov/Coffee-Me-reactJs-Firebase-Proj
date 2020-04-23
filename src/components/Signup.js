import React, { Component } from 'react';
import '../components/Signup-Signin.css'
import fire from '../Configuration/Auth'




class Signup extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: '',
        user: false
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
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            this.setState({
                user: user
            })

            this.props.history.push('/');
        }).catch(err=>{
            this.setState({
                errorMessage: err.message,
                email: '',
                password: '' 
            })
        })

    }

 //   firsNameInput = (e) => {
 //       this.setState({
 //           firstName: e.target.value
 //       })
//    }

  //  lastNameInput = (e) => {
  //      this.setState({
  //          lastName: e.target.value
  //      })
      
 //   }


    render() {
        return (
            <div style={{ overflow: 'hidden' }} className="container">
                <div className="divcontent">
                    <h2 className="createheader">Create <strong>Coffee Me</strong> Account</h2>
                    <form>
                        {/*   <div className="form-group">
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
                        </div>*/}
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