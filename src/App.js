import React from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Signin from './components/Sigin';
import Home from './components/Home';
import './App.css';
import Main from './components/Main';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />>
                    <Route path='/main' component={Main} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} />
                </Switch>
            </div >
        </Router>
    );
}

export default App;