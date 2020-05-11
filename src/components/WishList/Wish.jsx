import React, { Component } from 'react'
import WishNav from './WishNav';
import WishBody from './WishBody';
import WishBtns from './WishBtns';
import { withRouter } from "react-router-dom";
import './Wish.css';
//import axios from '../../Configuration/axios-data';
import fire from '../../Configuration/Auth';



class Wish extends Component {

    state = {
        user: null,
        dbUser: ''
    }

    authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({
                user: user,
                dbUser: fire.auth().currentUser.displayName
            }) : this.setState({
                user: null,
                dbUser: 'Guest'
            })

        })

    }
      

    componentDidMount(){
        this.authListener(); 
      
    }


    // back to shop page
    backToShop = () => {
        this.props.history.push('/main');
    }

   

    render() {

        
        return (
            <div className="wish">
                <WishNav />
                <WishBody />
                <WishBtns backToShop={this.backToShop} clearWishList={this.clearWishList} />
            </div>
        )
    }
}

export default withRouter(Wish)