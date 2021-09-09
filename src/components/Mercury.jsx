import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

export default function Mercury(){
    let planetDetails = {
        name: 'Murcury',
        info: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        link: "https://en.wikipedia.org/wiki/Mercury_(planet)",
        rotation: "58.6 Days",
        revolution: "87.97 Days",
        radius: "2,439.7 KM",
        temperature: "430°c"
    }
    
    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-mercury.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} />  
                </div>
            </div>   
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />        
        </div>
    )
}
