import React from 'react'

export default function ProgressBar(props) {

    return (
        
            <div className="progress">
                <div className={props.classnm} role="progressbar"
                    style={props.color} ></div>
            </div>
        
    )
}


{/**

            progBarStyle: {
            color1: ,
            color2: { width: '25%' },
            color3: { width: '50%' },
            color4: { width: '75%' },
            color5: { width: '100%'}
        },


         switch (this.state.value) {
            case '10':
                return  <ProgressBar classnm="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                color={this.state.product.capsuleType1.color} />
            case '20':
                return <ProgressBar classnm="progress-bar progress-bar-striped bg-success progress-bar-animated"
                color={this.state.progBarStyle.color2} />

            case '30':
                return <ProgressBar classnm="progress-bar progress-bar-striped bg-info progress-bar-animated"
                color={this.state.progBarStyle.color3} />

            case '40':
                return <ProgressBar classnm="progress-bar progress-bar-striped  progress-bar-animated"
                color={this.state.progBarStyle.color4} />

            case '50':
                return <ProgressBar classnm="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                color={this.state.progBarStyle.color5} />

            default:
                return <div className="coffee-str-header-div">
                <h2 className="coffee-str-header">Choose your preferred coffee strength <br></br>---> <span className="blink">Slide Right</span></h2>
            </div>

        }

    }
*/}