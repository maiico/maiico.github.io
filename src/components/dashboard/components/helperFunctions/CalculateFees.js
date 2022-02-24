// calculate fees from ME and artist royalties

const CalculateFees = (salePrice) => {
    const fee = salePrice * 0.0942
    
    return fee;
}

export default CalculateFees;