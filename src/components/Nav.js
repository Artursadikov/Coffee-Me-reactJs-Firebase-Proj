import React, { Component } from 'react';
import './Nav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">Coffee Me</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='./signin' className="nav-link">Sign-In</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/signup' className="nav-link" >Sign-Up</ Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled"  aria-disabled="true">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Nav;