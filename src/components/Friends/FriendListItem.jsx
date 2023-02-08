import PropTypes from 'prop-types';
import { FriendsList } from "./FriendsList"
import css from "../Friends/Friends.module.css"


export const FriendListItem = ({ friends }) => {
    return (<ul>
        {friends.map(friend => (
            <li className={css.item} key={friend.id}>
                {friend.isOnline === true ? <span className={css.statusGreen}></span> : <span className={css.statusRed}></span>}
                <FriendsList
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>

        ))}


    </ul>)

}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}

