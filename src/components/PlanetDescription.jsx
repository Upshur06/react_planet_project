import React, { useState } from 'react';

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

    const [isActive, setIsActive] = useState(false);

    const selectButtonHandler = (e)=>{
        // let selectBtn = document.getElementsByClassName('button_div');
        e.target.classList.add('active');

        setIsActive(true);

        // container.classList.add('right-panel-active');
    }

    const deSelectButtonHandler = (e)=>{
        e.target.classList.remove('active');
        setIsActive(false);
    }
   
    return (
        <div className="planet_description">
            <h1>{props.name}</h1>

            <p id='info'>{props.content}</p>
                    
            <p className='source'>Source: <a href={props.link}>Wikipedia</a></p>

            {/* <PlanetButtons /> */}

            <div className="buttons">
                <div onClick={overviewHandler} onMouseEnter={selectButtonHandler} onMouseLeave={deSelectButtonHandler} value={isActive} className ="button_div"> <span>01</span> Overview </div>
                <div onClick={internalHandler} onMouseEnter={selectButtonHandler} onMouseLeave={deSelectButtonHandler} value={isActive} className ="button_div"> <span>02</span> Internal Structure </div>
                <div onClick={surfaceHandler} onMouseEnter={selectButtonHandler} onMouseLeave={deSelectButtonHandler} value={isActive} className ="button_div"> <span>03</span> Surface Geology </div>
            </div>
        </div>
    )
}

export default PlanetDescription