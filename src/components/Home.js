import React, { Component } from 'react';
import './Home.css';
import { withRouter } from "react-router-dom";
import GoToCartModal from './Modal/GoToCartModal';
import GoToCartDesc from './Modal/GoToCartDesc';
import fire from '../Configuration/Auth';
import Wrapper from './Wrapper';

class Home extends Component {


  state = {
    showModal: false,
    user: null
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      user ? this.setState({ user: user }) : this.setState({ user: null })
      console.log(this.state.user, "home")

    })

  }

  componentDidMount() {
    this.authListener();
  }


  toMain = () => {
    if (this.state.user) {
      this.props.history.push('/main')
    } else {
      this.setState({
        showModal: true
      })
    }


  }

  cancelModal = () => {
    this.setState({
      showModal: false
    })
  }

  goToSignIpPage = () => {
    this.props.history.push('/Signin')
  }

  guestMode = (e) => {
    e.preventDefault();
    this.props.history.push('/main')
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
        {
          !this.state.user ?
            <p className="lead">Subscribe and enjoy a <strong>10%</strong> discount...</p>
            : null
        }

        <hr className="my-4"></hr>
        {
          this.state.user ?
            <Wrapper>
              <h4>Welcome {this.state.user.displayName} !</h4>
              <p>Enjoy 10% discount!</p>
            </Wrapper>
            :
            <h4>Hello Guest...</h4>
        }
        <p>Now in stock 5 types of capsules and later we will update more products.</p>
        <button onClick={this.toAbout} className="aboutbtn" type="button">To Contact Me</button>
        <button onClick={this.toMain} className="shopBtn" type="button">Shop-Now!</button>
      </div>

    )
  }

};

export default withRouter(Home);