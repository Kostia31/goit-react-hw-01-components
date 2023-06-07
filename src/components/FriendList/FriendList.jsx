import PropTypes from 'prop-types';
import Friend from 'components/friend/friend';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        console.log(friend);
        return (
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.node),
};

export default FriendList;
