import React, { Component } from 'react';
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class AddBtns extends Component {
    render() {
        return (
            <div className="addbtnbox">
                <button onClick={this.props.removeItem} className="remove" type='button'><FontAwesomeIcon icon={faMinus} /></button>
                <button onClick={this.props.addItem} className="add" type='button'><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        )
    }
};


export default AddBtns;