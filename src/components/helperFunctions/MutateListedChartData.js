// mutate data for recharts

const MutateListedChartData = (data, currentListedCount) => {

    if(currentListedCount === 0) {
        return []
    } else {
        let chartData = []
        let timeStamp;
        let listedCount;
    
        //current stimestamp
        
        const currentDate = new Date();
        const currenTimestamp = currentDate.getTime();
    
    
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                    timeStamp = data[i][0]
                    listedCount = data[i][1]
            }
    
            chartData.push({
                timeStamp: timeStamp,
                listedCount: listedCount
            })
        }
    
        //push lastest listedCount to chart data
    
        chartData.push({
            timeStamp: currenTimestamp,
            listedCount: currentListedCount
        })
    
        return(chartData)
    }

}

export default MutateListedChartData;