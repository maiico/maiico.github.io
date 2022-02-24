import React from 'react';
import './Info.css';
import TruccosAvatar from '../images/truccos-avatar.png';

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
                <button className="info-close-btn" onClick={() => handleClose(false)}><i className="fa-solid fa-x"></i></button>
                <h1 className="info-heading">Info</h1>
                <p className="info-txt">
                    Puffalytics is a free to use tool for SAC and NAC community members to check their personalized stats.
                    Easily check SOL and $PUFF token prices, your personalized staking income based on the number and type of apes you own, floor prices,
                    and rescue mission stats. All on one screen. This project is not officially affilated with the Stoned Ape Crew project.
                    I am simply an ape looking to contribute back to the community. Puff Puff.
                </p>
                <div className="team-wrapper">
                    <div className="built-by-wrapper">
                        <h2 className="info-heading">Built by</h2>
                        <img src={TruccosAvatar} className="team-avatar" alt="truccos"/>
                        <h3 className="name-heading">Truccos</h3>
                        <a href="https://twitter.com/TruccosHQ" target="_blank" rel="noreferrer nofollow">
                            <i className="fa-brands fa-twitter fa-2xl twitter-icon"></i>
                        </a>
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
        </div>
     );
}

export default Info;