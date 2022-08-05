import '../FloorPriceChart/CustomToolTipFloor.css';
import moment from 'moment';

const CustomToolTipListed = props => {
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
            Listed: <strong>{item.value}</strong>
          </p>
        ))}
      </div>
    );
  };
 
export default CustomToolTipListed;