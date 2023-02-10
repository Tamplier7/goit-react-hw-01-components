import css from './StatsItem.module.css';
import makeRandomColor from 'utils/makeRandomColor';
import PropTypes from 'prop-types';

const StatsItem = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      style={{
        backgroundColor: makeRandomColor(),
      }}
      className={css.statsItem}
    >
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

export default StatsItem;

StatsItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
