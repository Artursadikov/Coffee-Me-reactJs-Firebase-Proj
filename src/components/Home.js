import React, { Component } from 'react';
import './Home.css';
import { withRouter } from "react-router-dom";



class Home extends Component {

  toMain = () => {
    this.props.history.push('/main');
  }

  toAbout = () => {
    this.props.history.push('/about');
  }

  render() {

    return (

      <div className="jumbotron container">
        <h1 className="display-4">Buy coffee capsules online</h1>
        <p className="lead">Subscribe and enjoy a <strong>10%</strong> discount...</p>
        <hr className="my-4"></hr>
        <p>Now in stock 5 types of capsules and later we will update more products.</p>
        <button onClick={this.toAbout} className="aboutbtn" type="button">About us</button>
        <button onClick={this.toMain} className="aboutbtn shop" type="button">Shop-Now!</button>
      </div>

    )
  }

};

export default withRouter(Home);