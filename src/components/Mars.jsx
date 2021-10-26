import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Mars = () => {
    let planetDetails = {
        name: 'Mars',
        content: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
        structure: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        geology: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
        link: "https://en.wikipedia.org/wiki/Mars",
        rotation: "1.03 Days",
        revolution: "1.88 Years",
        radius: "3,389.5 KM",
        temperature: "-28°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <div className='planet_core'>
                    <PlanetImage img='/assets/planet-mars.svg' />
                    <div className="planet_desc">
                        <PlanetDescription name={planetDetails.name} content={planetDetails.content} structure={planetDetails.structure} geology={planetDetails.geology} link={planetDetails.link} />  
                    </div>
                </div>
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />           
            </div> 
        </div>
    )
}

export default Mars