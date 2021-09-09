import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Jupiter = () => {
    let planetDetails = {
        name: 'Jupiter',
        info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        link: "https://en.wikipedia.org/wiki/Jupiter",
        rotation: "9.93 Hours",
        revolution: "11.86 Years",
        radius: "69,911 KM",
        temperature: "-108°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-jupiter.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} />  
                </div>
            </div>   
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />         
        </div>
    )
}

export default Jupiter