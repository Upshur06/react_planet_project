import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Saturn = () => {
    let planetDetails = {
        name: 'Saturn',
        info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        link: "https://en.wikipedia.org/wiki/Saturn",
        rotation: "10.8 Hours",
        revolution: "29.46 Years",
        radius: "58,232 KM",
        temperature: "-138°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-saturn.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} />
                </div>
            </div>  
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />            
        </div>
    )
}

export default Saturn