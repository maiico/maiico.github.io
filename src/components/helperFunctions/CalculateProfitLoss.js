// calculate profit loss in USD

const CalculateProfitLoss = (puffValue, floorValue) => {
    const profitLoss = floorValue - puffValue
    const fee = profitLoss * 0.0942
    const profitLossWithFees =  profitLoss - fee

    return profitLossWithFees;
}

export default CalculateProfitLoss;