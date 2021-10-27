import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(){

    return (
        <div className='header'>
            <div className='header_head'>
                <h2>The Planets</h2>
            </div>

                <div className="nav">
                    <Link className='nav__item' to='/'>mercury</Link>
                    <Link className='nav__item' to='/venus'>venus</Link>
                    <Link className='nav__item' to='/earth'>earth</Link>
                    <Link className='nav__item' to='/mars'>mars</Link>
                    <Link className='nav__item' to='/jupiter'>jupiter</Link>
                    <Link className='nav__item' to='/saturn'>saturn</Link>
                    <Link className='nav__item' to='/uranus'>uranus</Link>
                    <Link className='nav__item' to='/neptune'>neptune</Link>
                </div>
       
        </div>
    )
}