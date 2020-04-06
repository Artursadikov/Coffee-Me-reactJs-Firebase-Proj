import React, { Component } from 'react';
import '../Cart/CartBodyCss.css';

export default class CartBody extends Component {



    state = {
        data: localStorage.getItem("newCartArr") !== "" ? localStorage.getItem("newCartArr") : null
    }

    componentDidMount() {
        console.log(JSON.parse(this.state.data));
    }


    render() {

        return (
            <div className="row order">
                <div className="order-description">
                    <h4>order id</h4>
                    <h1>total price</h1>
                    <h2>user name</h2>
                </div>
                <div className="choosen-items">
                    {this.state.data === null ? <h1>the cart is empty...</h1> :
                        JSON.parse(this.state.data).map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li >Capsula type:  {item.name} , <br></br>Price for sleeve:  {item.price}$, <br></br>Amount:  {item.amount}</li>
                                    {/* <li key={item.totalPr}>{item.totalPr}</li>*/}
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
