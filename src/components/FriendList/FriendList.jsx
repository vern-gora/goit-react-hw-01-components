import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <span
              className={css.status}
              style={{
                backgroundColor: friend.isOnline ? '#25fa7e' : '#fa5732',
              }}
            >
              {friend.isOnline}
            </span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
