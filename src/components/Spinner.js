import React from 'react';
import '../components/Spinner.css';

export default function Spinner() {
    return (
        <div>
            <div className="loader">Loading...</div>
            <h2 style={{
                textAlign: 'center',
                color: '#fa713d',
                fontFamily: "'Indie Flower', cursive",
                fontWeight: 'bolder'
            }}>The Cart Is Empty...</h2>
        </div>
    )
}
