import React, { useEffect, useState } from 'react';
import './OwnedApes.css';
import SAC from '../../../images/sac.png';
import NAC from '../../../images/nac.png';
import BestBuds from '../../../images/best-buds.png';

function OwnedApes(props) {

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

    //owned best buds / mary janes
    const [bestBudsCount, setBestBudsCount] = useState(0)
    const [maryJanesCount, setMaryJanesCount] = useState(0)


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
            case "bestBuds":
                setBestBudsCount(bestBudsCount + 1)
                break;
            case "maryJanes":
                setMaryJanesCount(maryJanesCount + 1)
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
            case "bestBuds":
                setBestBudsCount(bestBudsCount - 1)
                break;
            case "maryJanes":
                setMaryJanesCount(maryJanesCount - 1)
                break;
            default:
                break;
        }
    }

    //calculate total $PUFF income
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

    //calculate total $ALL income
    const calculateAllIncome = () => {

        //sac
        const chimpion = chimpionCount * 42
        const role = roleCount * 42
        const sealz = sealzCount * 42
        const sacLegendary = sacLegendaryCount * 42

        //nac
        const common = commonCount * 21
        const rare = rareCount * 21
        const epic = epicCount * 21
        const mystic = mysticCount * 21
        const nacLegendary = nacLegendaryCount * 21

        //bestbuds
        const bestBuds = bestBudsCount * 8
        const maryJanes = maryJanesCount * 8


        const totalAllIncome = 
            chimpion 
            + role
            + sealz
            + sacLegendary
            + common
            + rare
            + epic
            + mystic
            + nacLegendary
            + bestBuds
            + maryJanes

        props.setAllIncome(totalAllIncome)
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
        setBestBudsCount(0)
        setMaryJanesCount(0)

        props.setPuffIncome(0)
        props.setAllIncome(0)
    }

    //calculate all token income
    const calculateIncome = () => {
        calculatePuffIncome()
        calculateAllIncome()
    }

    return (
        <div className="owned-apes">
            <h1 className="owned-apes-heading">My NFTs</h1>
            <div className="owned-content-wrapper">
                <div className="owned-collection-wrapper">
                    <div className="collection-heading-wrapper">
                        <img src={SAC} className="collection-img" alt="Stoned Ape Crew" />
                        <h2 className="collection-subheader">Stoned Ape Crew</h2>
                    </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Chimpion</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("chimpion")}>-</button>
                                    <p className="owned-apes-txt">{chimpionCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("chimpion")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Role</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("role")}>-</button>
                                    <p className="owned-apes-txt">{roleCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("role")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">420 Sealz</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("sealz")}>-</button>
                                    <p className="owned-apes-txt">{sealzCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("sealz")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Legendary</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("sacLegendary")}>-</button>
                                    <p className="owned-apes-txt">{sacLegendaryCount}</p>
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
                            <p className="owned-apes-txt">Common</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("common")}>-</button>
                                    <p className="owned-apes-txt">{commonCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("common")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Rare</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("rare")}>-</button>
                                    <p className="owned-apes-txt">{rareCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("rare")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Epic</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("epic")}>-</button>
                                    <p className="owned-apes-txt">{epicCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("epic")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Mystic</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("mystic")}>-</button>
                                    <p className="owned-apes-txt">{mysticCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("mystic")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Legendary</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("nacLegendary")}>-</button>
                                    <p className="owned-apes-txt">{nacLegendaryCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("nacLegendary")}>+</button>
                            </div>
                        </div>
                </div>
                <div className="owned-collection-wrapper">
                    <div className="collection-heading-wrapper">
                        <img src={BestBuds} className="collection-img" alt="Stoned Ape Crew" />
                        <h2 className="collection-subheader">BestBuds / MaryJanes</h2>
                    </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">BestBuds</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("bestBuds")}>-</button>
                                    <p className="owned-apes-txt">{bestBudsCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("bestBuds")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">MaryJanes</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("maryJanes")}>-</button>
                                    <p className="owned-apes-txt">{maryJanesCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("maryJanes")}>+</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="owned-apes-btn-wrapper">
                <button className="calculate-btn" onClick={() => calculateIncome()}>Puff Puff Stats</button>
                <button className="calculate-btn" onClick={() => clearAllApes()}>Clear All</button>
            </div>
        </div>
    );
}

export default OwnedApes;