import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Venus = () => {
    let planetDetails = {
        name: 'Venus',
        content: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        structure: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        geology: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        link: "https://en.wikipedia.org/wiki/Venus",
        rotation: "243 Days",
        revolution: "224.7 Days",
        radius: "6,051.8 KM",
        temperature: "471°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <div className='planet_core'>
                    <PlanetImage img='/assets/planet-venus.svg' />
                    <div className="planet_desc">
                        <PlanetDescription name={planetDetails.name} content={planetDetails.content} structure={planetDetails.structure} geology={planetDetails.geology} link={planetDetails.link} />  
                    </div>
                </div>
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />          
            </div>   
        </div>
    )
}

export default Venus