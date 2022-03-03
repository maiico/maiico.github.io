import React from 'react';
import './Footer.css';

function Footer(props) {

    //show info 
    const showInfo = (showInfo) => {
        props.setShowInfo(showInfo)
        props.setShowBackDrop(showInfo)
    }

    return ( 
        <div className="footer">
            <div className="footer-content">
                <p className="footer-txt">&copy; Puffalytics</p>
                <ul className="footer-list">
                    <li className="footer-list-item">
                        <p className="footer-link" onClick={() => {showInfo(true)}}>Info</p>
                    </li>
                    <li className="footer-list-item">
                        <a href="https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amp;to=G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB" className="footer-link" target="_blank" rel="noreferrer nofollow">
                            Buy $PUFF
                        </a>
                    </li>
                    <li className="footer-list-item"> 
                        <a href="https://magiceden.io/marketplace/stoned_ape_crew" className="footer-link" target="_blank" rel="noreferrer nofollow">
                            Buy a SAC
                        </a>
                    </li>
                    <li className="footer-list-item">
                        <a href="https://magiceden.io/marketplace/nuked_apes" className="footer-link" target="_blank" rel="noreferrer nofollow">
                            Buy a NAC
                        </a>
                    </li>
                </ul>
                <p className="footer-txt">* content on this site is for informational purposes only. It way contain inacuraccies and should not be taken as financial advice</p>
            </div>
        </div>
     );
}

export default Footer;