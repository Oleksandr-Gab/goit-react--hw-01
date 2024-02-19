import FriendListItem from "../FriendListItem/FriendListItem"

const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend) => (
                <li key ={friend.id}>
                <FriendListItem data={friend}/>
                </li>
            ))}
        </ul>
    );
};

export default FriendList;