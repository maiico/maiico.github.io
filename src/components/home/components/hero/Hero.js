import React, { forwardRef } from 'react';
import Typed from 'react-typed';
import nftImg from '../../../images/nft-hero.png';
import { Link } from 'react-router-dom';

function Hero(props, ref) {

    return ( 
        <div className="flex w-screen h-screen bg-black justify-center">
            <div className="flex flex-col justify-center max-w-[800px] w-full h-screen mx-auto text-center">
                <img src={nftImg} className="w-[180px] sm:w-[300px] mx-auto" alt="/"/>
                <div className="flex w-full justify-center items-center mx-auto text-center py-4">
                    <h1 className="font-extra-bold text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] p-2 text-5xl sm:text-6xl md:text-7xl">We like</h1>
                    <Typed className="font-extra-bold text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] p-2 pl-2 text-5xl sm:text-6xl md:text-7xl" strings={["JPEGS.", "Tokens.", "Data."]} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className="font-bold text-slate-100 p-2 text-lg sm:text-xl">Get quick analytics and insights on top-rated NFT projects on Solana.</p>
                <p className="font-light text-slate-400 p-2 text-base sm:text-lg">Fast-track DYOR by discovering all you need to know about an NFT project. All in one place.</p>
                <Link to="/project">
                    <button className="flex bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-slate-100 text-lg font-bold w-[250px] rounded-md justify-center mx-auto my-4 p-2">
                        Discover Top-Rated NFTs
                    </button>
                </Link>
            </div>
        </div>
     );
}

export default Hero;