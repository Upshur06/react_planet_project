import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Uranus = () => {
    let planetDetails = {
        name: 'Uranus',
        info: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        link: "hhttps://en.wikipedia.org/wiki/Uranus",
        rotation: "17.2 Hours",
        revolution: "84 Years",
        radius: "25,362 KM",
        temperature: "-195°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-uranus.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} />
                </div>
            </div> 
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />            
        </div>
    )
}

export default Uranus