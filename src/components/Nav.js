import React, { Component } from 'react';
import './Nav.css';
import { Link, NavLink, withRouter } from "react-router-dom";
import fire from '../Configuration/Auth';
import axios from '../Configuration/axios-data';

class Nav extends Component {



    state = {
        user: null
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({ user: user }) : this.setState({ user: null })
        })
    }



    componentDidMount() {

        this.authListener();

    }


    submitalogout = (e) => {
        // e.preventDefault();
        fire.auth().signOut();
        this.setState({
            user: null
        })

        if (fire.auth().currentUser) {
            axios.delete(`/Cart.json`);
            //window.location.reload(false);
        }
        this.props.history.push('/');
    }

    homeBnt = () => {
        if (!fire.auth().currentUser) {
            axios.delete(`/Cart.json`);
            //window.location.reload(false);
        }
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
                            this.state.user ?
                                <button className='logOutBtn' onClick={(e) => this.submitalogout(e)} >Log-Out</button>
                                :
                                <li className="nav-item active">
                                    <NavLink activeStyle={{ backgroundColor: "#e73d3f" }} to='/signin' className="nav-link">Log-In</NavLink>
                                </li>
                        }
                        <li className="nav-item active">
                            <NavLink activeStyle={{ backgroundColor: "#e73d3f" }} to='/signup' className="nav-link" >Sign-Up</ NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink onClick={this.homeBnt} exact activeStyle={{ backgroundColor: "#e73d3f" }} to='/' className="nav-link home" >Home</ NavLink>
                        </li>
                        {
                            this.state.user ?
                                <button onClick={this.goToWishListBtn} style={{ backgroundColor: 'goldenrod' }} className="nav-link active">Wish-list</button>
                                : null
                        }
                    </ul>
                </div>
            </nav>
        )
    }
};

export default withRouter(Nav);