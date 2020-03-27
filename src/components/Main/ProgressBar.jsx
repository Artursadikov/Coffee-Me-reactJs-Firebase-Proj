import React from 'react'

export default function ProgressBar(props) {

    return (
        
            <div className="progress">
                <div className={props.classnm} role="progressbar"
                    style={props.color} ></div>
            </div>
        
    )
}

