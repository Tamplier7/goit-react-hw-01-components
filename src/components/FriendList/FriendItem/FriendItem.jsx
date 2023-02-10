import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

const FriendCard = ({ name, isOnline, avatar }) => {
  return (
    <li className={css.friendItem}>
      <span
        className={`${isOnline ? css.online : css.offline} ${css.status}`}
      ></span>
      <img src={avatar} alt="User avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendCard;

FriendCard.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
};
