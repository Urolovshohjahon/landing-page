import React from 'react'
import { NavLink } from 'react-router-dom'
import './Links.css'

function Links() {
    return (
        <ul className='links'>
            <li><NavLink to='/list' className='tugmacha'>To do list</NavLink></li>
            <li><NavLink to='/search' className='tugmacha'>Search meal</NavLink></li>
            <li><a href='https://newburgercard.herokuapp.com' className='tugmacha'>Burger Card</a></li>
            <li><a href='https://shohjahonamazonclone.herokuapp.com' className='tugmacha'>My Amazon Clone</a></li>
            <div className='messengers'>
                <a className='tg' href='https://t.me/urolov_tuit'><i class="fa fa-telegram" aria-hidden="true"></i></a>
                <a className='tg' href='https://fb.com/urolov.shohjahon'><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </div>
        </ul>
    )
}

export default Links
