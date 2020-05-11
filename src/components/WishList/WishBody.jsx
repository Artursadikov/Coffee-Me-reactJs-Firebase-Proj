import React, { Component } from 'react';
import axios from '../../Configuration/axios-data';

import './WishBody.css';
import WishModal from '../Modal/WishModal';
import WishModDescription from '../Modal/WishModDescription';
import WishLI from './WishLI';
import Spinner from '../Spinner';
import DescListWIsh from './DescListWIsh';
import fire from '../../Configuration/Auth';



export default class WishBody extends Component {

    state = {
        wishData: null,
        openModal: false,
        item: null,
        elementFromDB: null,
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

    async componentDidMount() {
        this.authListener();
        await axios.get(`/wishlist/${fire.auth().currentUser.displayName}.json`).then(res => {
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
        axios.delete(`/wishlist/${fire.auth().currentUser.displayName}/${this.state.elementFromDB}.json`).then(() => {
            axios.get(`/wishlist/${fire.auth().currentUser.displayName}.json`).then(res => {
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


        axios.get(`/wishlist/${fire.auth().currentUser.displayName}/${elementFromDB}.json`).then(res => {
            Object.values(res.data).map(items => {
                return this.setState({
                    openModal: true,
                    item: items,
                    elementFromDB: elementFromDB
                })
            })
        })
    }

    paymentBtn=()=>{
       
        axios.get(`/wishlist/${this.state.dbUser}/${this.state.elementFromDB}.json`).then(res=>{
            Object.values(res.data).map(items => {
                return (
                    axios.put(`/Cart/${this.state.dbUser}.json`, items)
                )
            })
        }).then(()=>{
            window.location.href = '/cart'
        }).then(()=>{
            this.deleteItemFromWishList();
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
                        paymentBtn={this.paymentBtn}
                        cancel={this.cancelModalClose} >
                        {wishDesc}
                    </WishModDescription>
                </WishModal>
                {list}
            </div>
        )
    }
}
