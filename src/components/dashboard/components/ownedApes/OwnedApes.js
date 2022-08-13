import React, { useCallback, useEffect, useState } from 'react';
import './OwnedApes.css';
import SAC from '../../../images/sac.png';
import NAC from '../../../images/nac.png';

function OwnedApes(props) {

    //owned sac apes
    const [chimpionCount, setChimpionCount] = useState(0)
    const [chimpionAwakenedCount, setChimpionAwakenedCount] = useState(0)
    const [chimpionShockwaveCount, setChimpionShockwaveCount] = useState(0)
    const [evolvedChimpionShockwaveCount, setEvolvedChimpionShockwaveCount] = useState(0)
    const [roleCount, setRoleCount] = useState(0)
    const [roleAwakenedCount, setRoleAwakenedCount] = useState(0)
    const [roleShockwaveCount, setRoleShockwaveCount] = useState(0)
    const [sealzCount, setSealzCount] = useState(0)
    const [sealzAwakenedCount, setSealzAwakenedCount] = useState(0)
    const [sacLegendaryCount, setSacLegendaryCount] = useState(0)
    const [sacLegendaryAwakenedCount, setSacLegendaryAwakenedCount] = useState(0)

    //owned nac apes
    const [commonCount, setCommonCount] = useState(0)
    const [commonAwakenedCount, setCommonAwakenedCount] = useState(0)
    const [commonShockwaveCount, setCommonShockwaveCount] = useState(0)
    const [rareCount, setRareCount] = useState(0)
    const [rareAwakenedCount, setRareAwakenedCount] = useState(0)
    const [rareShockwaveCount, setRareShockwaveCount] = useState(0)
    const [epicCount, setEpicCount] = useState(0)
    const [epicAwakenedCount, setEpicAwakenedCount] = useState(0)
    const [mysticCount, setMysticCount] = useState(0)
    const [mysticAwakenedCount, setMysticAwakenedCount] = useState(0)
    const [nacLegendaryCount, setNacLegendaryCount] = useState(0)
    const [nacLegendaryAwakenedCount, setNacLegendaryAwakenedCount] = useState(0)

    //owned best buds / mary janes
    const [bestBudsCount, setBestBudsCount] = useState(0)
    const [maryJanesCount, setMaryJanesCount] = useState(0)


    //add apes to state
    const addApe = (apeType) => {
        switch(apeType) {
            case "chimpion":
                setChimpionCount(chimpionCount + 1)
                break;
            case "chimpionAwakened":
                setChimpionAwakenedCount(chimpionAwakenedCount + 1)
                break;
            case "chimpionShockwave":
                setChimpionShockwaveCount(chimpionShockwaveCount + 1)
                break;
            case "evolvedChimpionShockwave":
                setEvolvedChimpionShockwaveCount(evolvedChimpionShockwaveCount + 1)
                break;
            case "role":
                setRoleCount(roleCount + 1)
                break;
            case "roleAwakened":
                setRoleAwakenedCount(roleAwakenedCount + 1)
                break;
            case "roleShockwave":
                setRoleShockwaveCount(roleShockwaveCount + 1)
                break;
            case "sealz":
                setSealzCount(sealzCount + 1)
                break;
            case "sealzAwakened":
                setSealzAwakenedCount(sealzAwakenedCount + 1)
                break;
            case "sacLegendary":
                setSacLegendaryCount(sacLegendaryCount + 1)
                break;
            case "sacLegendaryAwakened":
                setSacLegendaryAwakenedCount(sacLegendaryAwakenedCount + 1)
                break;
            case "common":
                setCommonCount(commonCount + 1)
                break;
            case "commonAwakened":
                setCommonAwakenedCount(commonAwakenedCount + 1)
                break;
            case "commonShockwave":
                setCommonShockwaveCount(commonShockwaveCount + 1)
                break;
            case "rare":
                setRareCount(rareCount + 1)
                break;
            case "rareAwakened":
                setRareAwakenedCount(rareAwakenedCount + 1)
                break;
            case "rareShockwave":
                setRareShockwaveCount(rareShockwaveCount + 1)
                break;
            case "epic":
                setEpicCount(epicCount + 1)
                break;
            case "epicAwakened":
                setEpicAwakenedCount(epicAwakenedCount + 1)
                break;
            case "mystic":
                setMysticCount(mysticCount + 1)
                break;
            case "mysticAwakened":
                setMysticAwakenedCount(mysticAwakenedCount + 1)
                break;
            case "nacLegendary":
                setNacLegendaryCount(nacLegendaryCount + 1)
                break;
            case "nacLegendaryAwakened":
                setNacLegendaryAwakenedCount(nacLegendaryAwakenedCount + 1)
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
            case "chimpionAwakened":
                setChimpionAwakenedCount(chimpionAwakenedCount - 1)
                break;
            case "chimpionShockwave":
                setChimpionShockwaveCount(chimpionShockwaveCount - 1)
                break;
            case "evolvedChimpionShockwave":
                setEvolvedChimpionShockwaveCount(evolvedChimpionShockwaveCount - 1)
                break;
            case "role":
                setRoleCount(roleCount - 1)
                break;
            case "roleAwakened":
                setRoleAwakenedCount(roleAwakenedCount - 1)
                break;
            case "roleShockwave":
                setRoleShockwaveCount(roleShockwaveCount - 1)
                break;
            case "sealz":
                setSealzCount(sealzCount - 1)
                break;
            case "sealzAwakened":
                setSealzAwakenedCount(sealzAwakenedCount - 1)
                break;
            case "sacLegendary":
                setSacLegendaryCount(sacLegendaryCount - 1)
                break;
            case "sacLegendaryAwakened":
                setSacLegendaryAwakenedCount(sacLegendaryAwakenedCount - 1)
                break;
            case "common":
                setCommonCount(commonCount - 1)
                break;
            case "commonAwakened":
                setCommonAwakenedCount(commonAwakenedCount - 1)
                break;
            case "commonShockwave":
                setCommonShockwaveCount(commonShockwaveCount - 1)
                break;
            case "rare":
                setRareCount(rareCount - 1)
                break;
            case "rareAwakened":
                setRareAwakenedCount(rareAwakenedCount - 1)
                break;
            case "rareShockwave":
                setRareShockwaveCount(rareShockwaveCount - 1)
                break;
            case "epic":
                setEpicCount(epicCount - 1)
                break;
            case "epicAwakened":
                setEpicAwakenedCount(epicAwakenedCount - 1)
                break;
            case "mystic":
                setMysticCount(mysticCount - 1)
                break;
            case "mysticAwakened":
                setMysticAwakenedCount(mysticAwakenedCount - 1)
                break;
            case "nacLegendary":
                setNacLegendaryCount(nacLegendaryCount - 1)
                break;
            case "nacLegendaryAwakened":
                setNacLegendaryAwakenedCount(nacLegendaryAwakenedCount - 1)
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
        const chimpion = chimpionCount * 10.2
        const chimpionAwakened = chimpionAwakenedCount * 20.4
        const chimpionShockwave = chimpionShockwaveCount * 40.8
        const evolvedChimpionShockwave = evolvedChimpionShockwaveCount * 81.6
        const role = roleCount * 20.4
        const roleAwakened = roleAwakenedCount * 40.8
        const roleShockwave = roleShockwaveCount * 81.6
        const sealz = sealzCount * 96.56
        const sealzAwakened = sealzAwakenedCount * 183.6
        const sacLegendary = sacLegendaryCount * 114.92
        const sacLegendaryAwakened = sacLegendaryAwakenedCount * 204

        //nac
        const common = commonCount * 2.04
        const commonAwakened = commonAwakenedCount * 6.12
        const commonShockwave = commonShockwaveCount * 10.2
        const rare = rareCount * 4.76
        const rareAwakened = rareAwakenedCount * 12.24
        const rareShockwave = rareShockwaveCount * 20.4
        const epic = epicCount * 10.88
        const epicAwakened = epicAwakenedCount * 20.4
        const mystic = mysticCount * 24.48
        const mysticAwakened = mysticAwakenedCount * 47.6
        const nacLegendary = nacLegendaryCount * 46.92
        const nacLegendaryAwakened = nacLegendaryAwakenedCount * 96.56


        const totalPuffIncome = 
            chimpion 
            + chimpionAwakened
            + chimpionShockwave
            + evolvedChimpionShockwave
            + role
            + roleAwakened
            + roleShockwave
            + sealz
            + sealzAwakened
            + sacLegendary
            + sacLegendaryAwakened
            + common
            + commonAwakened
            + commonShockwave
            + rare
            + rareAwakened
            + rareShockwave
            + epic
            + epicAwakened
            + mystic
            + mysticAwakened
            + nacLegendary
            + nacLegendaryAwakened


        props.setPuffIncome(totalPuffIncome);
    }

    //calculate total $ALL income
    const calculateAllIncome = () => {

        //sac
        const chimpion = chimpionCount * 42
        const chimpionAwakened = chimpionAwakenedCount * 69
        const chimpionShockwave = chimpionShockwaveCount * 84
        const evolvedChimpionShockwave = evolvedChimpionShockwaveCount * 90
        const role = roleCount * 42
        const roleAwakened = roleAwakenedCount * 84
        const roleShockwave = roleShockwaveCount * 95
        const sealz = sealzCount * 42
        const sealzAwakened = sealzAwakenedCount * 111
        const sacLegendary = sacLegendaryCount * 42
        const sacLegendaryAwakened = sacLegendaryAwakenedCount * 133

        //nac
        const common = commonCount * 21
        const commonAwakened = commonAwakenedCount * 42
        const commonShockwave = commonShockwaveCount * 44
        const rare = rareCount * 21
        const rareAwakened = rareAwakenedCount * 46
        const rareShockwave = rareShockwaveCount * 52
        const epic = epicCount * 21
        const epicAwakened = epicAwakenedCount * 55
        const mystic = mysticCount * 21
        const mysticAwakened = mysticAwakenedCount * 69
        const nacLegendary = nacLegendaryCount * 21
        const nacLegendaryAwakened = nacLegendaryAwakenedCount * 90

        //bestbuds
        const bestBuds = bestBudsCount * 8
        const maryJanes = maryJanesCount * 8


        const totalAllIncome = 
            chimpion 
            + chimpionAwakened
            + chimpionShockwave
            + evolvedChimpionShockwave
            + role
            + roleAwakened
            + roleShockwave
            + sealz
            + sealzAwakened
            + sacLegendary
            + sacLegendaryAwakened
            + common
            + commonAwakened
            + commonShockwave
            + rare
            + rareAwakened
            + rareShockwave
            + epic
            + epicAwakened
            + mystic
            + mysticAwakened
            + nacLegendary
            + nacLegendaryAwakened
            + bestBuds
            + maryJanes

        props.setAllIncome(totalAllIncome)
    }

    //reset all apes to 0
    const clearAllApes = () => {
        setChimpionCount(0)
        setChimpionAwakenedCount(0)
        setChimpionShockwaveCount(0)
        setEvolvedChimpionShockwaveCount(0)
        setRoleCount(0)
        setRoleAwakenedCount(0)
        setRoleShockwaveCount(0)
        setSealzCount(0)
        setSealzAwakenedCount(0)
        setSacLegendaryCount(0)
        setSacLegendaryAwakenedCount(0)
        setCommonCount(0)
        setCommonAwakenedCount(0)
        setCommonShockwaveCount(0)
        setRareCount(0)
        setRareAwakenedCount(0)
        setRareShockwaveCount(0)
        setEpicCount(0)
        setEpicAwakenedCount(0)
        setMysticCount(0)
        setMysticAwakenedCount(0)
        setNacLegendaryCount(0)
        setNacLegendaryAwakenedCount(0)
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
                            <p className="owned-apes-txt">Chimpion Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("chimpionAwakened")}>-</button>
                                    <p className="owned-apes-txt">{chimpionAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("chimpionAwakened")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Chimpion Shockwave</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("chimpionShockwave")}>-</button>
                                    <p className="owned-apes-txt">{chimpionShockwaveCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("chimpionShockwave")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Evolved Chimpion Shockwave</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("evolvedChimpionShockwave")}>-</button>
                                    <p className="owned-apes-txt">{evolvedChimpionShockwaveCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("evolvedChimpionShockwave")}>+</button>
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
                            <p className="owned-apes-txt">Role Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("roleAwakened")}>-</button>
                                    <p className="owned-apes-txt">{roleAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("roleAwakened")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Role Shockwave</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("roleShockwave")}>-</button>
                                    <p className="owned-apes-txt">{roleShockwaveCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("roleShockwave")}>+</button>
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
                            <p className="owned-apes-txt">420 Sealz Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("sealzAwakened")}>-</button>
                                    <p className="owned-apes-txt">{sealzAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("sealzAwakened")}>+</button>
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
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Legendary Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("sacLegendaryAwakened")}>-</button>
                                    <p className="owned-apes-txt">{sacLegendaryAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("sacLegendaryAwakened")}>+</button>
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
                            <p className="owned-apes-txt">Common Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("commonAwakened")}>-</button>
                                    <p className="owned-apes-txt">{commonAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("commonAwakened")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Common Shockwave</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("commonShockwave")}>-</button>
                                    <p className="owned-apes-txt">{commonShockwaveCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("commonShockwave")}>+</button>
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
                            <p className="owned-apes-txt">Rare Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("rareAwakened")}>-</button>
                                    <p className="owned-apes-txt">{rareAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("rareAwakened")}>+</button>
                            </div>
                        </div>
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Rare Shockwave</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("rareShockwave")}>-</button>
                                    <p className="owned-apes-txt">{rareShockwaveCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("rareShockwave")}>+</button>
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
                            <p className="owned-apes-txt">Epic Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("epicAwakened")}>-</button>
                                    <p className="owned-apes-txt">{epicAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("epicAwakened")}>+</button>
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
                            <p className="owned-apes-txt">Mystic Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("mysticAwakened")}>-</button>
                                    <p className="owned-apes-txt">{mysticAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("mysticAwakened")}>+</button>
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
                        <div className="role-wrapper">
                            <p className="owned-apes-txt">Legendary Awakened</p>
                            <div className="owned-input-wrapper">
                                <button className="owned-input-btn" onClick={() => subtractApe("nacLegendaryAwakened")}>-</button>
                                    <p className="owned-apes-txt">{nacLegendaryAwakenedCount}</p>
                                <button className="owned-input-btn" onClick={() => addApe("nacLegendaryAwakened")}>+</button>
                            </div>
                        </div>
                </div>
                {/* <div className="owned-collection-wrapper">
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
                </div> */}
            </div>
            <div className="owned-apes-btn-wrapper">
                <button className="calculate-btn" onClick={() => calculateIncome()}>Puff Puff Stats</button>
                <button className="calculate-btn" onClick={() => clearAllApes()}>Clear All</button>
            </div>
        </div>
    );
}

export default OwnedApes;