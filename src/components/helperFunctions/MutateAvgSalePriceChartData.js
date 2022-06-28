// mutate data for recharts

const MutateAvgSalePriceChartData = (data, currentAvgSalePrice) => {

    if(currentAvgSalePrice === 0) {
        return []
    } else {

        let chartData = []
        let timeStamp;
        let avgSalePrice;
    
        //current stimestamp
        
        const currentDate = new Date();
        const currenTimestamp = currentDate.getTime();
    
    
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                    timeStamp = data[i][0]
                    avgSalePrice = data[i][1]
            }
    
            chartData.push({
                timeStamp: timeStamp,
                avgSalePrice: avgSalePrice
            })
        }
    
        // push latest avg sale price to chart data
    
        chartData.push({
            timeStamp: currenTimestamp,
            avgSalePrice: currentAvgSalePrice * 1000000000 // must convert from sol back to lamports for further logic down the line
        })
    
        return(chartData)
    }

}

export default MutateAvgSalePriceChartData;