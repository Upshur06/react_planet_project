import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Neptune = () => {
    let planetDetails = {
        name: 'Neptune',
        info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        link: "https://en.wikipedia.org/wiki/Neptune",
        rotation: "16.08 Hours",
        revolution: "164.79 Years",
        radius: "24,622 KM",
        temperature: "-201°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-neptune.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} /> 
                </div>
            </div>      
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />       
        </div>
    )
}

export default Neptune