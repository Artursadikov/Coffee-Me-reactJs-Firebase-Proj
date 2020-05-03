import React, { Component } from 'react'

export default class PayBtnContent extends Component {
    render() {
        return (
            <div>
                <div>
                    <h5 style={{ marginBottom: '60px', color: 'black', textAlign: 'center' }} >Did You Want To Subscribe Befor Payment And Enjoy Members Discount?</h5>
                    <div className="home-btn-div">
                        <button className='signupHome' onClick={this.props.goToSignIpPage}>Log-In</button>
                        <button className='cancelBtnHome' onClick={this.props.cancelModal}>Cancel</button>
                        <button className='guestBtn' onClick={this.props.guestMode} >Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}
