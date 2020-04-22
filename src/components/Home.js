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
   

  }

  cancelModal = () => {
    this.setState({
      showModal: false
    })
  }

  goToSignIpPage = () => {
   
  }

  guestMode = (e) => {
    e.preventDefault();



  }

  toAbout = () => {
    this.props.history.push('/about');
  }

  render() {

    return (

      <div className="jumbotron container">
        <GoToCartModal show={this.state.showModal}>
          <GoToCartDesc
            goToSignIpPage={this.goToSignIpPage}
            cancelModal={this.cancelModal}
            guestMode={(e) => this.guestMode(e)} />
        </GoToCartModal>
        <h1 className="display-4">Buy coffee capsules online</h1>
        <p className="lead">Subscribe and enjoy a <strong>10%</strong> discount...</p>
        <hr className="my-4"></hr>
        <p>Now in stock 5 types of capsules and later we will update more products.</p>
        <button onClick={this.toAbout} className="aboutbtn" type="button">To Contact Me</button>
        <button onClick={this.toMain} className="shopBtn" type="button">Shop-Now!</button>
      </div>

    )
  }

};

export default withRouter(Home);