import React, { Component } from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Signin from './components/Sigin';
import Home from './components/Home';
import './App.css';
import Main from './components/Main/Main';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import About from './components/About';
import Cart from './components/Cart/Cart';
import Wish from './components/WishList/Wish';
import PayForm from './components/Pay/PayForm';
import PayMethod from './components/Pay/PayMethod';


class App extends Component {

    history = createBrowserHistory();

    render() {
        return (
            <Router history={this.history}>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/main' component={Main} />
                        <Route path='/' exact component={Home} />
                        <Route path='/Signin' component={Signin} />
                        <Route path='/wish' component={Wish} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/payForm' component={PayForm} />
                        <Route path='/paymethod' component={PayMethod} />
                    </Switch>
                </div >
            </Router >
        );
    }
}


export default App;