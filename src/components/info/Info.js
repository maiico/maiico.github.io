import React from 'react';
import './Info.css';
import TruccosAvatar from '../images/truccos-avatar.png';
import PooingcatAvatar from '../images/pooingcat-avatar.png';
import PierreAvatar from '../images/pierre-avatar-420.png';
import ProfessforPuffAvatar from '../images/professorpuff-avatar.png';

function Info(props) {

    const handleCopy = async () => {
        await navigator.clipboard.writeText('4hnEN1YfHceogKsAbrXSRGdaqbxqi4iYjSaeogRBvXS6')
        alert("Copied wallet address!")
    }

    const handleClose = (showInfo) => {
        props.setShowInfo(showInfo)
        props.setShowBackDrop(showInfo)
    }

    return ( 
        <div className="info">
            <div className="info-content-wrapper">
                {/* <button className="info-close-btn" onClick={() => handleClose(false)}><i className="fa-solid fa-x"></i></button> */}
                <h1 className="info-heading">Info</h1>
                <div className="intro-wrapper">
                    <div className="professor-puff-wrapper">
                        <img src={ProfessforPuffAvatar} className="professor-puff" alt="Professor Puff" />
                        <h3 className="name-heading">Professor Puff</h3>
                        <p className="info-txt">Puffalytics Guide</p>
                    </div>
                    <div className="intro-txt-wrapper">
                        <p className="info-txt">
                            Hello Anon, I'm Professor Puff and I will be your guide here at Puffalytics.
                        </p>
                        <p className="info-txt">
                            Puffalytics is a free to use tool suite built for the Stoned Ape Crew community. Easily check $PUFF and $ALL market stats, customized staking income and project analytics. 
                            Our tools are backed by a team of developers and NFT analysts providing members with insights into various NFT projects on Solana.
                            This project is not offically affiliated with the Stoned Ape Crew project and is 100% community built.
                        </p>
                        <p className="info-txt">
                            We'll start by going over the various free tools available to you: users can check and monitor token prices and market stats for $PUFF and $ALL: the tokens that power the Stoned Ape Crew ecosystem and their web3 technology platform ALLBLUE.
                            The free tool suite also includes a token income calculator for Stoned Ape Crew, Nuked Apes, BestBuds and MaryJanes holders. These tools will always be free for Puffalytics users.
                        </p>
                        {/* <p className="info-txt">
                            Now lets take a closer look at the premium tools offered here at Puffalytics...
                        </p> */}
                    </div>
                </div>
                <div className="team-wrapper">
                    <h2 className="info-heading">Team</h2>
                    <div className="team-members-wrapper">
                        <div className="team-member">
                            <img src={TruccosAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="name-heading">Truccos</h3>
                            <p className="info-txt">Founder / Dev</p>
                            <a href="https://twitter.com/TruccosHQ" target="_blank" rel="noreferrer nofollow">
                                <i className="fa-brands fa-twitter fa-2xl twitter-icon"></i>
                            </a>
                        </div>
                        <div className="team-member">
                            <img src={PooingcatAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="name-heading">Pooingcat</h3>
                            <p className="info-txt">Community / Analyst</p>
                            <a href="https://twitter.com/Pooingcat" target="_blank" rel="noreferrer nofollow">
                                <i className="fa-brands fa-twitter fa-2xl twitter-icon"></i>
                            </a>
                        </div>
                        <div className="team-member">
                            <img src={PierreAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="name-heading">Pierre</h3>
                            <p className="info-txt">Analyst</p>
                            <a href="https://twitter.com/pierrenft_" target="_blank" rel="noreferrer nofollow">
                                <i className="fa-brands fa-twitter fa-2xl twitter-icon"></i>
                            </a>
                        </div>
                        <div className="team-member">
                            <img src={ProfessforPuffAvatar} className="team-avatar" alt="truccos"/>
                            <h3 className="name-heading">Professor Puff</h3>
                            <p className="info-txt">Puffalytics Guide</p>
                            <a href="https://twitter.com/TruccosHQ_" target="_blank" rel="noreferrer nofollow">
                                <i className="fa-brands fa-twitter fa-2xl twitter-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                    <div className="support-project-wrapper">
                        <h2 className="info-heading">Enjoying Puffalytics?</h2>
                        <p className="info-txt">
                            Please consider supporting the project. All proceeds will be used towards further development.
                        </p>
                        <div className="wallet-copy-wrapper">
                            <div className="wallet-address-wrapper">
                                4hnEN1YfHceogKsAbrXSRGdaqbxqi4iYjSaeogRBvXS6
                            </div>
                            <button className="copy-btn" onClick={() => {handleCopy()}}>
                                <i className="fa-regular fa-copy copy-icon"></i> 
                            </button>
                        </div>
                    </div>
            </div>
        </div>
     );
}

export default Info;