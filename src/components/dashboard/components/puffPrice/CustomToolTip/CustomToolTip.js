import './CustomToolTip.css';
import moment from 'moment';

const CustomToolTip = props => {
    const { active, payload, label } = props;
    if (!active || !payload) {
      return null;
    }
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">
          <strong>{moment.unix(label).format("ddd, MMM Do YYYY, h:mm:ss a")}</strong>
        </p>
        {payload.map((item, i) => (
          <p className="tooltip-value" key={i}>
            {item.price}<strong>${item.value.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 6})} USD</strong>
          </p>
        ))}
      </div>
    );
  };
 
export default CustomToolTip;