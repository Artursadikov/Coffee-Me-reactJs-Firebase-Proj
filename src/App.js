import React from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Signin from './components/Sigin';
import Home from './components/Home';
import './App.css';
import Main from './components/Main/Main';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import About from './components/About';



function App() {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />>
                    <Route path='/about' component={About} />
                    <Route path='/main' component={Main} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} />
                </Switch>
            </div >
        </Router>
    );
}

export default App;