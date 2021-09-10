import React from 'react'
import PlanetImage from './PlanetImage'
import PlanetDescription from './PlanetDescription'
import Footer from './Footer'

export default function Mercury(){
    let planetDetails = {
        name: 'Murcury',
        content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        structure: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        geology: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
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
                    <PlanetDescription name={planetDetails.name} content={planetDetails.content} structure={planetDetails.structure} geology={planetDetails.geology} link={planetDetails.link} />  
                </div>
            </div>   
            <Footer rotation={planetDetails.rotation} revolution={planetDetails.revolution} radius={planetDetails.radius} temperature={planetDetails.temperature} />        
        </div>
    )
}
