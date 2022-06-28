import React, { useState } from 'react';
import './Nav.css';
import Logo from '../images/puffalytics-logo.png';
import MobileNav from './mobileNav/mobileNav';
import { Link } from 'react-router-dom';

function Nav(props) {
    //display bars or x
    const [barsClicked, setBarsClicked] = useState(false)

    //mobile nav open
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    //handle bars and x click
    const handleClick = (clicked) => {
        setBarsClicked(clicked)
        setMobileNavOpen(clicked)
    }

    const showInfo = (showInfo) => {
        props.setShowInfo(showInfo)
        props.setShowBackDrop(showInfo)
    }

    return ( 
        <div className="nav">
            <div className="nav-content">
                <Link to="/">
                    <img src={Logo} className="puffalytics-logo" alt="Puffalytics"/>
                </Link>
                
                {barsClicked ? <i className="fa-solid fa-x fa-xl bars-icon" onClick={() => handleClick(false)}></i> 
                    : <i className="fa-solid fa-bars fa-2xl bars-icon" onClick={() => handleClick(true)}></i>}
                <ul className="nav-list">
                <Link to="/sactools">
                    <li className="nav-list-item">
                            <button className="nav-btn">SAC Tools</button>
                    </li>
                </Link>
                <li className="nav-list-item">
                    <a href="https://twitter.com/PuffalyticsHQ" target="_blank" rel="noreferrer nofollow">
                        <i className="fa-brands fa-twitter fa-l nav-twitter-icon"></i>
                    </a>
                </li>
                </ul>
            </div>
            <MobileNav 
                mobileNavOpen={mobileNavOpen}
                setShowBackDrop={props.setShowBackDrop}
                setShowInfo={props.setShowInfo}
            />
        </div>
     );
}

export default Nav;