import css from './ProfileCard.module.css';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileStats from '../ProfileStats/ProfileStats';
import PropTypes from 'prop-types';

const ProfileCard = ({
  username,
  tag,
  location,
  avatar,
  stats: { likes, views, followers },
}) => {
  return (
    <div className={css.profileCard}>
      <ProfileInfo
        avatar={avatar}
        tag={tag}
        username={username}
        location={location}
      />
      <ProfileStats likes={likes} views={views} followers={followers} />
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    likes: PropTypes.number,
    views: PropTypes.number,
    followers: PropTypes.number,
  }),
};
