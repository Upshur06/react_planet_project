import React from 'react';
// import PlanetButtons from './PlanetButtons';
// import './PlanetDescription.css';

const PlanetDescription = (props) => {
    const overviewHandler = ()=>{
        // console.log(props.content);
        document.getElementById('info').innerText = props.content;
    }

    const internalHandler = ()=>{
        // console.log(props.content);
        document.getElementById('info').innerText = props.structure;
    }

    const surfaceHandler = ()=>{
        // console.log(props.content);
        document.getElementById('info').innerText = props.geology;
    }
   
    return (
        <div className="planet_description">
            <h1>{props.name}</h1>

            <p id='info'>{props.content}</p>
                    
            <p className='source'>Source: <a href={props.link}>Wikipedia</a></p>

            {/* <PlanetButtons /> */}

            <div className="buttons">
                <div onClick={overviewHandler} className ="button_div active"> <span>01</span> Overview </div>
                <div onClick={internalHandler} className ="button_div"> <span>02</span> Internal Structure </div>
                <div onClick={surfaceHandler} className ="button_div"> <span>03</span> Surface Geology </div>
            </div>
        </div>
    )
}

export default PlanetDescription