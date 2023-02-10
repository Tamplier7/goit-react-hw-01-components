import css from './ProfileStats.module.css';
import PropTypes from 'prop-types';

const ProfileStats = ({ followers, views, likes }) => {
  return (
    <ul className={css.statsList}>
      <li className={css.statsItem}>
        <span className={css.statsName}> Followers</span>
        <span className={css.statsAmount}>{followers}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsName}> Views</span>
        <span className={css.statsAmount}> {views}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsName}> likes</span>
        <span className={css.statsAmount}>{likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;

ProfileStats.propTypes = {
  likes: PropTypes.number,
  views: PropTypes.number,
  followers: PropTypes.number,
};
