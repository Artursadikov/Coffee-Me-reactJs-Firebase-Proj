import React, { Component } from 'react';
import axios from '../../Configuration/axios-data';

import './WishBody.css';
import WishModal from '../Modal/WishModal';
import WishModDescription from '../Modal/WishModDescription';
import WishLI from './WishLI';
import DescListWIsh from './DescListWIsh';
import Spinner from '../Spinner';

export default class WishBody extends Component {

    state = {
        wishData: null,
        openModal: false,
        item: null,
        elementFromDB: null
    }



    componentWillMount() {
        axios.get('/wishlist.json').then(res => {
            this.setState({
                wishData: res.data
            })
        })
    }

    cancelModalClose = () => {
        this.setState({
            openModal: false
        })
    }

    deleteItemFromWishList = () => {
       axios.delete(`/wishlist/${this.state.elementFromDB}.json`).then(()=>{
        axios.get('/wishlist.json').then(res => {
            this.setState({
                wishData: res.data,
                openModal: false
            })
        })
       })
    }

    openWishListItem = (e) => {
        let div = e.target.closest('div');
        let elementFromDB = div.children[0].children[0].children[0].textContent;

        axios.get(`/wishlist/${elementFromDB}.json`).then(res => {
            Object.values(res.data).map(items => {
                return this.setState({
                    openModal: true,
                    item: items,
                    elementFromDB: elementFromDB
                })
            })
        })
    }




    render() {

        let list = this.state.wishData !== null ? Object.entries(this.state.wishData).map((item, index) => {
            return (
                <WishLI key={index} item={item[0]} openWishListItem={(e) => this.openWishListItem(e)} />
            )
        }) : <h1 style={{
            textAlign: 'center',
            color: '#fa713d',
            fontFamily: "'Indie Flower', cursive",
            fontWeight: 'bolder'
        }}>You'r Wish-List Is Empty...</h1>

        let wishDesc = this.state.item !== null ? Object.values(this.state.item).map((item, index) => {
            return <DescListWIsh
                key={index}
                name={item.name}
                amount={item.amount}
                price={item.price}
                totalPr={item.totalPr}
            />
        }) : <Spinner />

        return (
            <div className='wish-body'>
                <WishModal open={this.state.openModal}>
                    <WishModDescription
                        deleteItemFromWishList={this.deleteItemFromWishList}
                        listNameHeader={this.state.elementFromDB}
                        cancel={this.cancelModalClose} >
                        {wishDesc}
                    </WishModDescription>
                </WishModal>
                {list}
            </div>
        )
    }
}
