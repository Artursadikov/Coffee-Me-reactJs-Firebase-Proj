import React, { Component } from 'react';
import './CartNavCss.css';
import fire from '../../Configuration/Auth';

export default class CartNav extends Component {

    state = {
        user: null
    }

    authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            user ? this.setState({ user: user }) : this.setState({ user: null })
        })

    }

    componentDidMount() {
        this.authListener();
    }

    render() {
        return (
            <nav className='cart-nav'>
                <ul className="cart-ul">
                    {
                        this.state.user ?
                        <h3 className="userNameDisplay">* Welcome * <br/> {this.state.user.displayName}</h3>
                        :
                        <h3 className="userNameDisplay">Guest<br/>Mode</h3>
                    }
                    
                    <button onClick={this.props.cartClear} type="button" className="empty-cart">Reset The Cart</button>
                    {
                        this.state.user ?
                        <button onClick={this.props.goToWishList} type="button" className="wishlist">Wish-List</button>
                        :
                        <button disabled style={{backgroundColor: "transparent" , color: 'ivory', border: '1px solid ivory'}} onClick={this.props.goToWishList} type="button" className="wishlist">Wish-List</button>
                    }
                    
                </ul>
            </nav>
        )
    }
}
