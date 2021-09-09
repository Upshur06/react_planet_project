import React from 'react';
import './PlanetButtons.css';

const PlanetButtons = () => {
    return (
        <div className="buttons">
            <div onclick="change(this.id);activate(this)" className ="button_div active"> <span>01</span> Overview </div>
            <div onclick="change(this.id);activate(this)" className ="button_div"> <span>02</span> Internal Structure </div>
            <div onclick="change(this.id);activate(this)" className ="button_div"> <span>03</span> Surface Geology </div>
        </div>
    )
}

export default PlanetButtons