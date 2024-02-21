import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => (
                <li className={css.friendCard} key={friend.id}>
                    <FriendListItem data={friend} />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;
