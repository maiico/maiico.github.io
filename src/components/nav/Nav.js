import React, { useState } from 'react';
import Logo from '../images/puffalytics-logo.png';
import SolanaLogo from '../images/solana-logo.png';
import { Link } from 'react-router-dom';

function Nav(props) {
    //display bars or x
    const [barsClicked, setBarsClicked] = useState(false)

    //mobile nav open
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    //handle bars and x click
    const handleClick = () => {
        setBarsClicked(!barsClicked)
        setMobileNavOpen(!mobileNavOpen)
    }

    //change nav color when scrolling
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 55) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return ( 
        <div className={color ? "flex w-screen h-[80px] z-50  bg-[#0e1111] fixed top-0 left-0 right-0 justify-center shadow-lg" : 
                "flex w-screen h-[80px] z-50 fixed top-0 left-0 right-0 justify-center"
            }
        >
            <div className="px-2 flex justify-between items-center w-full max-w-7xl h-full">
                <Link to="/">
                    <div className="flex items-center">
                        <img src={Logo} className="h-auto w-[220px] px-4"/>
                    </div>
                </Link>
                <div className="hidden md:flex">
                    <div className="flex justify-center px-2">
                        <img src={SolanaLogo} className="w-[18px] h-[18px] my-auto mr-2" alt="Solana"/>
                        <p className="font-semibold text-green-400">${props.solPriceUsd} USD</p>
                    </div>
                    <ul className="hidden md:flex">
                        <li className="font-semibold text-slate-100 px-2 hover:cursor-pointer hover:text-sky-400">NFT Index</li>
                    </ul>
                    <a href="https://twitter.com/PuffalyticsHQ" target="_blank" rel="noreferrer nofollow">
                        <i className="fa-brands fa-twitter fa-xl px-4 text-[#1DA1F2]"></i>
                    </a>
                </div>
                <div className="md:hidden">
                    {barsClicked ? 
                        <i className="fa-solid fa-x fa-xl w-5 px-8 text-slate-100 hover:cursor-pointer" onClick={handleClick}></i> : 
                        <i className="fa-solid fa-bars fa-2xl w-5 px-8 text-slate-100" onClick={handleClick}></i>
                    }
                </div>
            </div>
            <div className={!mobileNavOpen ? "fixed left-[-100%] top-20 bg-[#0e1111] w-full px-8 md:hidden ease-in-out duration-500" : "fixed left-0 top-20 bg-[#0e1111] w-full px-8 md:hidden translate-top transition-all ease-in-out duration-500"}>
                <ul className="justify-center text-center">
                    <li className="border-b-2 border-slate-800 font-semibold text-slate-100 py-4 hover:cursor-pointer hover:text-sky-400">NFT Index</li>
                    <li className= "py-4 hover:cursor-pointer hover:text-sky-400">
                        <a href="https://twitter.com/PuffalyticsHQ" target="_blank" rel="noreferrer nofollow">
                            <i className="fa-brands fa-twitter fa-xl text-[#1DA1F2]"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
     );

}

export default Nav;