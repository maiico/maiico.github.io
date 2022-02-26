// calculate the P/L percent

const CalculateProfitLossPercent = (costPrice, profit) => {
    let returnValue;
    const percent = (profit/costPrice) * 100

    if(percent >= 0) {
        returnValue =  "+" + percent
    } else{
        return percent
    }

    return percent;
}

export default CalculateProfitLossPercent;