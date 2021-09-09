import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Venus = () => {
    let planetDetails = {
        name: 'Venus',
        info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        link: "https://en.wikipedia.org/wiki/Venus",
        rotation: "243 Days",
        revolution: "224.7 Days",
        radius: "6,051.8 KM",
        temperature: "471°c"
    }

    return (
        <div className='main'>
            <div className='planet_overview'>
                <PlanetImage img='/assets/planet-venus.svg' />
                <div className="planet_desc">
                    <PlanetDescription name={planetDetails.name} info={planetDetails.info} link={planetDetails.link} />
                </div>
            </div>   
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />          
        </div>
    )
}

export default Venus