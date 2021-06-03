import PropTypes from 'prop-types';
import styles from './Friend-list.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const getStatusColor = () => {
        if (isOnline) {
            return 'green'
        }
        return 'red'
    };
    return (
    <>
        <span className={styles.status} style={{ backgroundColor: getStatusColor() }}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </>
);

    
} 
export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}