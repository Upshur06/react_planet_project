import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div className='rotationDiv'>
                <p>Rotation Time</p>
                <h1 id="rotation">{props.rotation}</h1>
            </div>
            <div className='revolutionDiv'>
                <p>Revolution Time</p>
                <h1 id="revolution">{props.revolution}</h1>
            </div>
            <div className='radiusDiv'>
                <p>Radius</p>
                <h1 id="radius">{props.radius}</h1>
            </div>
            <div className='tempuratureDiv'>
                <p>Average Temp.</p>
                <h1 id="average">{props.temperature}</h1>
            </div>
        </footer>
    )
}

export default Footer