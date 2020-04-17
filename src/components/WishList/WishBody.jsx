import React, { Component } from 'react';
import axios from '../../Configuration/axios-data';
import WishLI from './WishLI';

import './WishBody.css';

export default class WishBody extends Component {

    state = {
        wishData: null
    }




    componentWillMount() {
        axios.get('https://coffe-me.firebaseio.com/wishlist.json').then(res => {
            this.setState({
                wishData: res.data
            })
            console.log(res.data)
        })
    }


    render() {

        let list = this.state.wishData !== null ? Object.values(this.state.wishData).map((item, index) => {
            return (
                <WishLI
                    key={index}
                    wishName={item.wishName}
                    totalPr={item.totalPr}
                />
            )
        }) : <h1 style={{
            textAlign: 'center',
            color: '#fa713d',
            fontFamily: "'Indie Flower', cursive",
            fontWeight: 'bolder'
        }}>You'r Wish-List Is Empty...</h1>



        return (
            <div className='wish-body'>
                {list}
            </div>
        )
    }
}
