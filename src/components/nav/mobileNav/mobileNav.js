import './mobileNav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function mobileNav(props) {

    // show info and backdrop
    const showInfo = (showInfo) => {
        props.setShowInfo(showInfo)
        props.setShowBackDrop(showInfo)
    }

    //set class for open or close mobile nav menu

    let mobileNavClass =  "mobile-nav"

    if(props.mobileNavOpen) {
        mobileNavClass =  "mobile-nav-open" 
    }

  return (
    <div className={mobileNavClass}>
        <ul className="nav-links-mobile">
                <Link to="/info">
                    <li className="nav-list-item">
                        {/* <button className="nav-btn" onClick={() => {showInfo(true)}}>Info</button> */}
                            <button className="mobile-nav-btn">Info</button>
                    </li>
                </Link>
            <li className="nav-list-item">
                <a href="https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amp;to=G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB" target="_blank" rel="noreferrer nofollow">
                    <button className="mobile-nav-btn">Buy $PUFF</button>
                </a>
            </li>
             <li className="nav-list-item"> 
                <a href="https://magiceden.io/marketplace/stoned_ape_crew" target="_blank" rel="noreferrer nofollow">
                    <button className="mobile-nav-btn">Buy a SAC</button>
                </a>
            </li>
            <li className="nav-list-item">
                <a href="https://magiceden.io/marketplace/nuked_apes" target="_blank" rel="noreferrer nofollow">
                    <button className="mobile-nav-btn">Buy a NAC</button>
                </a>
            </li>
        </ul>
    </div>
  );
}

export default mobileNav;
