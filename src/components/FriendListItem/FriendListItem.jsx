import css from "./FriendListItem.module.css";

const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
    return (
        <>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            {isOnline ? (
                <p className={css.isOnline}>Online</p>
            ) : (
                <p className={css.isOffline}>Offline</p>
            )}
        </>
    );
};

export default FriendListItem;
