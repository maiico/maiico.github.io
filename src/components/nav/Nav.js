import React, { useState } from 'react';
import './Nav.css';
import Logo from '../images/puffalytics-logo.png';
import MobileNav from './mobileNav/mobileNav';

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
                <img src={Logo} className="puffalytics-logo" alt="Puffalytics"/>
                {barsClicked ? <i className="fa-solid fa-x fa-xl bars-icon" onClick={() => handleClick(false)}></i> 
                    : <i className="fa-solid fa-bars fa-2xl bars-icon" onClick={() => handleClick(true)}></i>}
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <button className="nav-btn" onClick={() => {showInfo(true)}}>Info</button>
                    </li>
                    <li className="nav-list-item">
                        <a href="https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amp;to=G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB" target="_blank" rel="noreferrer nofollow">
                            <button className="nav-btn">Buy $PUFF</button>
                        </a>
                    </li>
                    <li className="nav-list-item"> 
                        <a href="https://magiceden.io/marketplace/stoned_ape_crew" target="_blank" rel="noreferrer nofollow">
                            <button className="nav-btn">Buy a SAC</button>
                        </a>
                    </li>
                    <li className="nav-list-item">
                        <a href="https://magiceden.io/marketplace/nuked_apes" target="_blank" rel="noreferrer nofollow">
                            <button className="nav-btn">Buy a NAC</button>
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