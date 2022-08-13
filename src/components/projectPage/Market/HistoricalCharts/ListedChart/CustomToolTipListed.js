import moment from 'moment';

const CustomToolTipListed = props => {
    const { active, payload, label } = props;
    if (!active || !payload) {
      return null;
    }
    return (
      <div className="flex flex-col justify-center bg-black p-2 rounded-lg">
        <p className="text-sm text-slate-500 font-medium">
          <strong>{moment(label).format("ddd, MMM Do YYYY")}</strong>
        </p>
        {payload.map((item, i) => (
          <p className="text-sm text-slate-300 font-medium" key={i}>
            Listed: <strong>{item.value}</strong>
          </p>
        ))}
      </div>
    );
  };
 
export default CustomToolTipListed;