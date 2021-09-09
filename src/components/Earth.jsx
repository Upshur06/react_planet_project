import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Earth = () => {
    let planetDetails = {
        name: 'Earth',
        info: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        link: "https://en.wikipedia.org/wiki/Earth",
        rotation: "0.99 Days",
        revolution: "365.26 Days",
        radius: "6,371 KM",
        temperature: "16°c"
    }
    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-earth.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} /> 
                </div>
            </div> 
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />           
        </div>
    )
}

export default Earth