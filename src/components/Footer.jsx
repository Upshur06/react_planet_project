import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div className='rotationDiv'>
                <p>Rotation Time</p>
                <h2 id="rotation">{props.rotation}</h2>
            </div>
            <div className='revolutionDiv'>
                <p>Revolution Time</p>
                <h2 id="revolution">{props.revolution}</h2>
            </div>
            <div className='radiusDiv'>
                <p>Radius</p>
                <h2 id="radius">{props.radius}</h2>
            </div>
            <div className='tempuratureDiv'>
                <p>Average Temp.</p>
                <h2 id="average">{props.temperature}</h2>
            </div>
        </footer>
    )
}

export default Footer