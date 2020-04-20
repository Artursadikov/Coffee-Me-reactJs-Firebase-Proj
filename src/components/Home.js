import React, { Component } from 'react';
import './Home.css';
import { withRouter } from "react-router-dom";
import GoToCartModal from './Modal/GoToCartModal';
import GoToCartDesc from './Modal/GoToCartDesc';


class Home extends Component {

  state = {
    showModal: false

  }


  toMain = () => {
    this.setState({
      showModal: true
    })
  }

  cancelModal = () => {
    this.setState({
      showModal: false
    })
  }

  goToSignUpPage = () => {
    alert('in process')
  }

  guestMode = () => {
    this.props.history.push('/main');
  }

  toAbout = () => {
    this.props.history.push('/about');
  }

  render() {

    return (

      <div className="jumbotron container">
        <GoToCartModal show={this.state.showModal}>
          <GoToCartDesc
            goToSignUpPage={this.goToSignUpPage}
            cancelModal={this.cancelModal}
            guestMode={this.guestMode} />
        </GoToCartModal>
        <h1 className="display-4">Buy coffee capsules online</h1>
        <p className="lead">Subscribe and enjoy a <strong>10%</strong> discount...</p>
        <hr className="my-4"></hr>
        <p>Now in stock 5 types of capsules and later we will update more products.</p>
        <button onClick={this.toAbout} className="aboutbtn" type="button">Contact Me...</button>
        <button onClick={this.toMain} className="shopBtn" type="button">Shop-Now!</button>
      </div>

    )
  }

};

export default withRouter(Home);