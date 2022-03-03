import './Price.css';
import moment from 'moment';

function Price(props) {

    //set dates
    const yesterday = moment().subtract(1, 'days').format('DD-MM-YYYY')
    const sevenDays = moment().subtract(7, 'days').format('DD-MM-YYYY')
    const thirtyDays = moment().subtract(30, 'days').format('DD-MM-YYYY')


    //price change from hisorical price
    const calculatePriceChange = () => {
        const priceChange = props.price - props.historicalPrice

        if(priceChange >= 0) {
            return <h2 className="price-change">+{priceChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6})}</h2>
        } else {
            return <h2 className="price-change">{priceChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6})}</h2>
        }
    }

    const calculatePercentChange = () => {

        let percentChange = props.puffPriceChange24hPercent;

        if(props.currentHistoricalView == 7) {
            percentChange = props.puffPriceChange7dPercent
        } else if(props.currentHistoricalView == 30) {
            percentChange = props.puffPriceChange30dPercent
        }

        if(percentChange >= 0) {
            return <h2 className="price-change-green">(+{percentChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}%)</h2>
        } else {
            return <h2 className="price-change-red">({percentChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}%)</h2>
        }
    }

    return ( 
        <div className="price">
            <h1 className="price-heading">${props.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6})} USD</h1>
            <div className="price-change-wrapper">
                {calculatePriceChange()}
                {calculatePercentChange()}
            </div>
        </div>
     );
}

export default Price;