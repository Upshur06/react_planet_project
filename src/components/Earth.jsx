import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Earth = () => {
    let planetDetails = {
        name: 'Earth',
        content: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        structure: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        geology: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        link: "https://en.wikipedia.org/wiki/Earth",
        rotation: "0.99 Days",
        revolution: "365.26 Days",
        radius: "6,371 KM",
        temperature: "16°c"
    }
    return (
        <div className='main'>
            <div className='planet_overview'>
                <div className='planet_core'>
                    <PlanetImage img='/assets/planet-earth.svg' />
                    <div className="planet_desc">
                        <PlanetDescription name={planetDetails.name} content={planetDetails.content} structure={planetDetails.structure} geology={planetDetails.geology} link={planetDetails.link} />  
                    </div>
                </div>
                <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />           
            </div> 
        </div>
    )
}

export default Earth