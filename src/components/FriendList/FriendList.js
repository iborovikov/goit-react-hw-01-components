import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types';
import styles from './Friend-list.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friend__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={styles.item} key={id}>
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            </li>
        ))}
    </ul>
);
export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired
    })).isRequired
}