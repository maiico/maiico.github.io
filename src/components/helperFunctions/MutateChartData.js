// mutate data for recharts

const MutateChartData = (data) => {

    const dateFormatter = (timeStamp) => {

        const date = new Date(timeStamp)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        const output = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2) + ':' + ("0" + seconds).slice(-2);

        return output;
    }

    let chartData = []
    let timeStamp;
    let price;


    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
                timeStamp = data[i][0]
                price = data[i][1]
        }

        chartData.push({
            timeStamp: timeStamp,
            price: price
        })
    }

    return(chartData)

}

export default MutateChartData;