import React from 'react'

export default function PlanetImage(props) {
    return (
        <div className="planet">
            <img src={props.img} id='planet_img' alt='planet' />
        </div>
    )
}

