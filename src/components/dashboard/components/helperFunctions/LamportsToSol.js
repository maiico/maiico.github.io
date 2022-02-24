// converts lamports to sol

const LamportsToSol = (lamports) => {

    const solAmount = lamports * 0.000000001

    return solAmount;

}

export default LamportsToSol;