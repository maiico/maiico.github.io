import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

    return ( 
        <div className="flex flex-col w-full min-h-[300px] z-100 text-center bg-[#0e1111]">
            <p className="text-zinc-800 mx-auto py-6">&copy; Puffalytics</p>
            <ul className="flex justify-center">
                <Link to="/project">
                   <li className="px-6">
                       <p className="text-zinc-800 hover:text-zinc-400">NFT Index</p>
                   </li>
                </Link>
                <li className="px-6">
                    <a href="https://twitter.com/PuffalyticsHQ" className="text-zinc-800" target="_blank" rel="noreferrer nofollow">
                        <i className="fa-brands fa-twitter fa-l text-zinc-800"></i>
                    </a>
                 </li>
            </ul>
            <p className="text-zinc-800 px-2 py-6">
                * content on this site is for informational purposes only. 
                It may contain inaccuracies and should not be taken as financial advice. DYOR before purchasing any NFTs.
            </p>
            <p className="text-zinc-800 px-2 py-6">
                v 2.0.1
            </p>
        </div>
     );
}

export default Footer;