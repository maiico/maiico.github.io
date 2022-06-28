// mutate data for recharts

const MutateVolumeChartData = (data) => {

    let chartData = []
    let timeStamp;
    let volume;


    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
                timeStamp = data[i][0]
                volume = data[i][1]
        }

        chartData.push({
            timeStamp: timeStamp,
            volume: volume
        })
    }

    return(chartData)

}

export default MutateVolumeChartData;