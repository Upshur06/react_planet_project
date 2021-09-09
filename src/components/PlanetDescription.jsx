import React from 'react';
import PlanetButtons from './PlanetButtons';
import './PlanetDescription.css';

const PlanetDescription = (props) => {
   
    return (
        <div className="planet_description">
            <h1>{props.name}</h1>

            <p>{props.info}</p>
                    
            <p className='source'>Source: <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">Wikipedia</a></p>

            <PlanetButtons />
        </div>
    )
}

export default PlanetDescription