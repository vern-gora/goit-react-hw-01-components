import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
      <ul className={css.friendList}>
        {friends.map(({ id, isOnline, name, avatar }) => (
          <li className={css.item} key={id}>
            <span
              className={css.status}
              style={{
                backgroundColor: isOnline ? '#25fa7e' : '#fa5732',
              }}
            >
              {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
