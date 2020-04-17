import React, { Component } from 'react';
import './Nav.css';
import { Link, NavLink } from "react-router-dom";


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
                            <NavLink activeStyle={{ backgroundColor: "#e73d3f" }} to='/signin' className="nav-link">Sign-In</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink activeStyle={{ backgroundColor: "#e73d3f" }} to='/signup' className="nav-link" >Sign-Up</ NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink exact activeStyle={{ backgroundColor: "#e73d3f" }} to='/' className="nav-link home" >Home</ NavLink>
                        </li>
                        {/*   <li className="nav-item">
                            <Link className="nav-link disabled " aria-disabled="true">Logout</Link>
                        </li>
                   */}
                    </ul>
                </div>
            </nav>

        )
    }
};

export default Nav;