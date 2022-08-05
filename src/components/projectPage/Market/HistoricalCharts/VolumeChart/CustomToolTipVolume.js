import '../FloorPriceChart/CustomToolTipFloor.css';
import moment from 'moment';

const CustomToolTipVolume = props => {
    const { active, payload, label } = props;
    if (!active || !payload) {
      return null;
    }
    return (
      <div className="custom-tooltip-floor">
        <p className="tooltip-label-floor">
          <strong>{moment(label).format("ddd, MMM Do YYYY")}</strong>
        </p>
        {payload.map((item, i) => (
          <p className="tooltip-value-floor" key={i}>
            {item.volume}<strong>{(item.value * 0.000000001).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})} SOL</strong>
          </p>
        ))}
      </div>
    );
  };
 
export default CustomToolTipVolume;