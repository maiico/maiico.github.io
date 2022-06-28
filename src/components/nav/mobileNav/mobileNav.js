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
                <Link to="/sactools">
                    <li className="nav-list-item">
                            <button className="mobile-nav-btn">SAC Tools</button>
                    </li>
                </Link>
            <li className="nav-list-item">
                <a href="https://twitter.com/PuffalyticsHQ" target="_blank" rel="noreferrer nofollow">
                    <i className="fa-brands fa-twitter fa-l nav-twitter-icon"></i>
                </a>
            </li>
        </ul>
    </div>
  );
}

export default mobileNav;
