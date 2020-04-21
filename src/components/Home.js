import React, { Component } from 'react';
import './Home.css';
import { withRouter } from "react-router-dom";
import GoToCartModal from './Modal/GoToCartModal';
import GoToCartDesc from './Modal/GoToCartDesc';
import fire from '../Configuration/Auth';

class Home extends Component {

  state = {
    showModal: false,
    user: null

  }

  _isMounted = true;

  authListenet = () => {
    fire.auth().onAuthStateChanged((user) => {
      user ? this.setState({ user }) : this.setState({ user: null })
      console.log(this.state.user, "home component")
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

  toMain = () => {
    if (this.state.user) {
      this.props.history.push('/main');
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
    if(!this.state.user)
    {
      this.props.history.push('/signin');
    }
    
  }

  guestMode = (e) => {
    e.preventDefault();

    fire.auth().signOut().then(() => {
      this.props.history.push('/main');
    }).catch(err => {
      alert(err)
    });

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