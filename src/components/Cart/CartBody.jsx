import React, { Component } from 'react';
import CartList from './CartList';

import '../Cart/CartBodyCss.css';


export default class CartBody extends Component {



    state = {
        data: localStorage.getItem("newCartArr") !== "" || localStorage.getItem("newCartArr") === [] ? localStorage.getItem("newCartArr") : null

    }

    remItemFromCar = (index) => {

        let _data = JSON.parse(this.state.data);
        _data.splice(index, 1);

        this.setState({
            data: JSON.stringify(_data)
        })
    }

    componentDidUpdate() {
        localStorage.setItem("newCartArr", this.state.data)

    }

    render() {

        return (
            <div className="row order">
                
                <div className="order-description">
                    <h2>hello</h2>
                </div>
                <div className="choosen-items">
                    {this.state.data === null ? <h1 className="empty-cart-h1">The cart is empty</h1> :
                        JSON.parse(this.state.data).map((item, index) => {
                            return (
                                <CartList key={index}
                                    price={item.price.toFixed(2)}
                                    amount={item.amount}
                                    name={item.name}
                                    totalPr={item.totalPr.toFixed(2)}
                                    click={() => this.remItemFromCar(index)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

