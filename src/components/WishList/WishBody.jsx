import React, { Component } from 'react';
import axios from '../../Configuration/axios-data';

import './WishBody.css';
import WishModal from '../Modal/WishModal';
import WishModDescription from '../Modal/WishModDescription';
import WishLI from './WishLI';

export default class WishBody extends Component {

    state = {
        wishData: null,
        openModal: false
    }




    componentWillMount() {
        axios.get('/wishlist.json').then(res => {
            this.setState({
                wishData: res.data
            })
        })
    }

    openWishListItem = () => {

        this.setState({
            openModal: true
        })

    }




    render() {

        let list = this.state.wishData !== null ? Object.values(this.state.wishData).map((item, index) => {
            return (
                item.map((item, index) => {
                    return (
                        <WishLI
                            key={index}
                            name={item.name}
                            amount={item.amount}
                            price={item.price}
                            totalPr={item.totalPr}
                        />
                    )
                })
            )
        }) : <h1 style={{
            textAlign: 'center',
            color: '#fa713d',
            fontFamily: "'Indie Flower', cursive",
            fontWeight: 'bolder'
        }}>You'r Wish-List Is Empty...</h1>



        return (
            <div className='wish-body'>
                <WishModal open={this.state.openModal}>
                    <WishModDescription />
                </WishModal>
                {list}
            </div>
        )
    }
}
