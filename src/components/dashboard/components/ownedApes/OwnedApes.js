import React, { useEffect, useState } from 'react';
import './OwnedApes.css';
import SAC from '../../../images/sac.png';
import NAC from '../../../images/nac.png';

function OwnedApes(props) {

    //puff income
    const [puffIncome, setPuffIncome] = useState(0)

    //owned sac apes
    const [chimpionCount, setChimpionCount] = useState(0)
    const [roleCount, setRoleCount] = useState(0)
    const [sealzCount, setSealzCount] = useState(0)
    const [sacLegendaryCount, setSacLegendaryCount] = useState(0)

    //owned nac apes
    const [commonCount, setCommonCount] = useState(0)
    const [rareCount, setRareCount] = useState(0)
    const [epicCount, setEpicCount] = useState(0)
    const [mysticCount, setMysticCount] = useState(0)
    const [nacLegendaryCount, setNacLegendaryCount] = useState(0)


    //add apes to state
    const addApe = (apeType) => {
        switch(apeType) {
            case "chimpion":
                setChimpionCount(chimpionCount + 1)
                break;
            case "role":
                setRoleCount(roleCount + 1)
                break;
            case "sealz":
                setSealzCount(sealzCount + 1)
                break;
            case "sacLegendary":
                setSacLegendaryCount(sacLegendaryCount + 1)
                break;
            case "common":
                setCommonCount(commonCount + 1)
                break;
            case "rare":
                setRareCount(rareCount + 1)
                break;
            case "epic":
                setEpicCount(epicCount + 1)
                break;
            case "mystic":
                setMysticCount(mysticCount + 1)
                break;
            case "nacLegendary":
                setNacLegendaryCount(nacLegendaryCount + 1)
                break;
            default:
                break;
        }
    }

    //substract apes from state
    const subtractApe = (apeType) => {
        switch(apeType) {
            case "chimpion":
                setChimpionCount(chimpionCount - 1)
                break;
            case "role":
                setRoleCount(roleCount - 1)
                break;
            case "sealz":
                setSealzCount(sealzCount - 1)
                break;
            case "sacLegendary":
                setSacLegendaryCount(sacLegendaryCount - 1)
                break;
            case "common":
                setCommonCount(commonCount - 1)
                break;
            case "rare": 
                setRareCount(rareCount - 1)
                break;
            case "epic":
                setEpicCount(epicCount - 1)
                break;
            case "mystic":
                setMysticCount(mysticCount - 1)
                break;
            case "nacLegendary":
                setNacLegendaryCount(nacLegendaryCount - 1)
                break;
            default:
                break;
        }
    }

    //calculate total puff income
    const calculatePuffIncome = () => {

        //sac
        const chimpion = chimpionCount * 15
        const role = roleCount * 30
        const sealz = sealzCount * 142
        const sacLegendary = sacLegendaryCount * 169

        //nac
        const common = commonCount * 3
        const rare = rareCount * 7
        const epic = epicCount * 16
        const mystic = mysticCount * 36
        const nacLegendary = nacLegendaryCount * 69


        const totalPuffIncome = 
            chimpion 
            + role
            + sealz
            + sacLegendary
            + common
            + rare
            + epic
            + mystic
            + nacLegendary


        props.setPuffIncome(totalPuffIncome);
    }

    //reset all apes to 0
    const clearAllApes = () => {
        setChimpionCount(0)
        setRoleCount(0)
        setSealzCount(0)
        setSacLegendaryCount(0)
        setCommonCount(0)
        setRareCount(0)
        setEpicCount(0)
        setMysticCount(0)
        setNacLegendaryCount(0)

        props.setPuffIncome(0)
    }

    return (
        <div className="owned-apes">
            <h1 className="token-prices-heading">My Apes</h1>
            <div className="owned-content-wrapper">
                <div className="owned-collection-wrapper">
                    <div className="collection-heading-wrapper">
                        <img src={SAC} className="collection-img" alt="Stoned Ape Crew" />
                        <h2 className="collection-subheader">Stoned Ape Crew</h2>
                    </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Chimpion</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("chimpion")}>-</button>
                                    <p className="token-prices-txt">{chimpionCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("chimpion")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Role</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("role")}>-</button>
                                    <p className="token-prices-txt">{roleCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("role")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">420 Sealz</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("sealz")}>-</button>
                                    <p className="token-prices-txt">{sealzCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("sealz")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Legendary</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("sacLegendary")}>-</button>
                                    <p className="token-prices-txt">{sacLegendaryCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("sacLegendary")}>+</button>
                            </div>
                        </div>
                </div>
                <div className="owned-collection-wrapper">
                    <div className="collection-heading-wrapper">
                        <img src={NAC} className="collection-img" alt="Stoned Ape Crew" />
                        <h2 className="collection-subheader">Nuked Apes</h2>
                    </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Common</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("common")}>-</button>
                                    <p className="token-prices-txt">{commonCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("common")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Rare</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("rare")}>-</button>
                                    <p className="token-prices-txt">{rareCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("rare")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Epic</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("epic")}>-</button>
                                    <p className="token-prices-txt">{epicCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("epic")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Mystic</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("mystic")}>-</button>
                                    <p className="token-prices-txt">{mysticCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("mystic")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="token-prices-txt">Legendary</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("nacLegendary")}>-</button>
                                    <p className="token-prices-txt">{nacLegendaryCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("nacLegendary")}>+</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="owned-apes-btn-wrapper">
                <button className="calculate-btn" onClick={() => calculatePuffIncome()}>Puff Puff Stats</button>
                <button className="calculate-btn" onClick={() => clearAllApes()}>Clear All</button>
            </div>
        </div>
    );
}

export default OwnedApes;