import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Mars = () => {
    let planetDetails = {
        name: 'Mars',
        info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
        link: "https://en.wikipedia.org/wiki/Mars",
        rotation: "1.03 Days",
        revolution: "1.88 Years",
        radius: "3,389.5 KM",
        temperature: "-28°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-mars.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} />  
                </div>
            </div> 
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />           
        </div>
    )
}

export default Mars