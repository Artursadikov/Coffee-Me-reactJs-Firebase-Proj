import React, { Component } from 'react';
import './Nav.css';
import { Link, NavLink, withRouter } from "react-router-dom";
import fire from '../Configuration/Auth';

class Nav extends Component {

    state= {
        user: null
    }
   

    _isMounted = true;

    authListenet = () => {
        fire.auth().onAuthStateChanged((user) => {
            user ? this.setState({ user }) : this.setState({ user: null })
            console.log(this.state.user, "nav")
        })
    }

    componentWillMount() {

        if (this._isMounted) {
            this.authListenet();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    submitalogout = (e) => {
        e.preventDefault();
        fire.auth().signOut();

    }


    goToWishListBtn = () => {
        this.props.history.push('/wish');
    }

    render() {



        return (

            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">Coffee Me</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            !this.state.user ? 
                            <li className="nav-item active">
                            <NavLink activeStyle={{ backgroundColor: "#e73d3f" }} to='/signin' className="nav-link">Sign-In</NavLink>
                        </li>
                        : <button className='logOutBtn' onClick={(e)=>this.submitalogout(e)} >Log-Out</button>
                        }
                        
                        <li className="nav-item active">
                            <NavLink activeStyle={{ backgroundColor: "#e73d3f" }} to='/signup' className="nav-link" >Sign-Up</ NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink exact activeStyle={{ backgroundColor: "#e73d3f" }} to='/' className="nav-link home" >Home</ NavLink>
                        </li>
                        <button onClick={this.goToWishListBtn} style={{ backgroundColor: 'goldenrod' }} className="nav-link active">
                            Wish-list
                        </button>

                    </ul>
                </div>
            </nav>

        )
    }
};

export default withRouter(Nav);