import PropTypes from 'prop-types';

function Friend({avatar, name, isOnline}) {
  
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool
};

export default Friend;
