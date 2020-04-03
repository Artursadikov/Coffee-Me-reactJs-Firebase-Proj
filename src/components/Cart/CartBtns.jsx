import React, {Component} from 'react';
import '../Cart/CartBtnsCss.css';
import { withRouter } from "react-router-dom";

class CartBtns extends Component {


    backToMain = () => {
        this.props.history.push('/main');
    }

    render(){
        return (
            <div className="row order-btn">
                <button onClick={this.backToMain} type="button" className="res-btn">Back</button>
                <button type="button" className="wish-li-btn">Add To Wishlist</button>
                <button type="button" className="next-btn">Next</button>
            </div>
        )
    }
    
}


export default withRouter(CartBtns);