import React from 'react';
import './Team.css';
import TruccosAvatar from '../../../images/truccos-avatar.png';
import PooingcatAvatar from '../../../images/pooingcat-avatar.png';
import MxtryAvatar from '../../../images/mxtry-avatar.png';
import AxgelaAvatar from '../../../images/axgela-avatar.PNG';
import nftchevAvatar from '../../../images/nftchev-avatar.jpeg';

function Team() {
    return ( 
            <div className="team-wrapper">
                    <h2 className="team-heading">Team</h2>
                    <div className="team-members-wrapper">
                        <div className="team-member">
                            <img src={TruccosAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="team-name-heading">Truccos</h3>
                            <p className="team-txt">Founder / Dev</p>
                            <div className="socials-container">
                                <a href="https://twitter.com/TruccosHQ" target="_blank" rel="noreferrer nofollow">
                                    <i className="fa-brands fa-twitter fa-xl twitter-icon"></i>
                                </a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={PooingcatAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="team-name-heading">Pooingcat</h3>
                            <p className="team-txt">Community Manager</p>
                            <div className="socials-container">
                                <a href="https://twitter.com/Pooingcat" target="_blank" rel="noreferrer nofollow">
                                    <i className="fa-brands fa-twitter fa-xl twitter-icon"></i>
                                </a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={AxgelaAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="team-name-heading">milktea</h3>
                            <p className="team-txt">Branding / Editor</p>
                            <div className="socials-container">
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={MxtryAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="team-name-heading">mxtry</h3>
                            <p className="team-txt">NFT Analyst</p>
                            <div className="socials-container">
                                <a href="https://twitter.com/mxtry" target="_blank" rel="noreferrer nofollow">
                                    <i className="fa-brands fa-twitter fa-xl twitter-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-members-wrapper">
                        <div className="team-member">
                            <img src={nftchevAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="team-name-heading">nftchev</h3>
                            <p className="team-txt">NFT Analyst</p>
                            <div className="socials-container">
                                <a href="https://twitter.com/NFTChev" target="_blank" rel="noreferrer nofollow">
                                    <i className="fa-brands fa-twitter fa-xl twitter-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
     );
}

export default Team;