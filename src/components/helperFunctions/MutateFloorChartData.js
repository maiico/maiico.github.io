// mutate data for recharts

const MutateFloorChartData = (data, currentFloor) => {

    if(currentFloor === 0) {
        return []
    } else {
        let chartData = []
        let timeStamp;
        let floor;
    
        //current stimestamp
    
        const currentDate = new Date();
        const currenTimestamp = currentDate.getTime();
    
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                    timeStamp = data[i][0]
                    floor = data[i][1]
            }
    
            chartData.push({
                timeStamp: timeStamp,
                floor: floor
            })
        }
    
        // push latest FP to chart data
    
        chartData.push({
            timeStamp: currenTimestamp,
            floor: currentFloor * 1000000000 // must convert from sol back to lamports for further logic down the line
        })
    
        return(chartData)
    }
}

export default MutateFloorChartData;