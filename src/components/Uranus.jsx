import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

const Uranus = () => {
    let planetDetails = {
        name: 'Uranus',
        content: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        structure: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        geology: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        link: "https://en.wikipedia.org/wiki/Uranus",
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
                    <PlanetDescription name={planetDetails.name} content={planetDetails.content} structure={planetDetails.structure} geology={planetDetails.geology} link={planetDetails.link} />  
                </div>
            </div> 
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />            
        </div>
    )
}

export default Uranus