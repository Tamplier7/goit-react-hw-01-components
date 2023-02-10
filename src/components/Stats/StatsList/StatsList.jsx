import css from './StatsList.module.css';
import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';

const StatsList = ({ stats, title }) => {
  const statsListItems = stats.map(({ id, label, percentage }) => (
    <StatsItem key={id} label={label} percentage={percentage} />
  ));

  return (
    <>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statsList}>{statsListItems}</ul>
    </>
  );
};

export default StatsList;

StatsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})),
};
