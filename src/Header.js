import React from 'react'
import './style.css'
function Header({ count }) {
    return (
        <div className='header'>
            <div className='header__logo'>
                LIVE WEBSITE TRACKING
            </div>
            <div className='header__counter'>
                Currently Tracking {count} websites.
            </div>
        </div>
    )
}

export default Header
