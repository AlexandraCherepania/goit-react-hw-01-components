import PropTypes from 'prop-types';
import css from "../Friends/Friends.module.css"


export const FriendsList = ({ avatar, name, isOnline }) => {
    return (
        <li class="item">
            <span class="status">{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendsList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}
