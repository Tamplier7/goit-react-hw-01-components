import css from './FriendList.module.css';
import FriendItem from '../FriendItem/FriendItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const friendListItems = friends.map(({ id, name, isOnline, avatar }) => (
    <FriendItem key={id} name={name} isOnline={isOnline} avatar={avatar} />
  ));

  return <ul className={css.friendList}>{friendListItems}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    })
  ),
};
