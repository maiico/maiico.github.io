import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {

    return ( 
        <div className="footer">
            <div className="footer-content">
                <p className="footer-txt">&copy; Puffalytics</p>
                <ul className="footer-list">
                <Link to="/sactools" style={{ textDecoration: 'none' }}>
                    <li className="footer-list-item">
                        <p className="footer-link">SAC Tools</p>
                    </li>
                </Link>
                    <li className="footer-list-item">
                        <a href="https://twitter.com/PuffalyticsHQ" className="footer-link" target="_blank" rel="noreferrer nofollow">
                            <i className="fa-brands fa-twitter fa-l footer-twitter-icon"></i>
                        </a>
                    </li>
                </ul>
                <p className="footer-txt">
                    * content on this site is for informational purposes only. 
                    It may contain inaccuracies and should not be taken as financial advice.
                </p>
                <p className="footer-txt">
                    v 2.0.0
                </p>
            </div>
        </div>
     );
}

export default Footer;