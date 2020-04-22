import React, { Component} from 'react'
import fire from '../../Configuration/Auth';


export const UserAuthContext = React.createContext({ 
    user: null 
});

export default class AuthContext extends Component {

    state = {
        user: null
    };

    componentDidMount() {
        fire.auth().onAuthStateChanged((user) => {
            user ? this.setState({ user: user }) : this.setState({ user: null })
        })
    }




render() {
    return (

        <UserAuthContext.Provider value={this.state.user}>
            {this.props.children}
        </UserAuthContext.Provider>
    )
}
}



