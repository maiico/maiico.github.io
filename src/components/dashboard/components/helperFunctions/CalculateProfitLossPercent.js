// calculate the P/L percent

const CalculateProfitLossPercent = (costPrice, profit) => {
    const percent = (profit/costPrice) * 100

    return percent;
}

export default CalculateProfitLossPercent;