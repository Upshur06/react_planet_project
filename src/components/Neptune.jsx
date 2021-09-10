import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Neptune = () => {
    let planetDetails = {
        name: 'Neptune',
        content: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        structure: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
        geology: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
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
                    <PlanetDescription name={planetDetails.name} content={planetDetails.content} structure={planetDetails.structure} geology={planetDetails.geology} link={planetDetails.link} />  
                </div>
            </div>      
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />       
        </div>
    )
}

export default Neptune