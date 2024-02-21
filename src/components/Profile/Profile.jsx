import css from "./Profile.module.css";
console.log(css);

const Profile = ({ userData: { username, tag, location, avatar, stats } }) => {
    return (
        <div className={css.profile}>
            <div className={css.avatarWrapper}>
                <img className={css.avatar} src={avatar} alt="User avatar" />
                <p className={css.userName}>{username}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span className={css.title}>Followers</span>
                    <span className={css.titleSpan}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.title}>Views</span>
                    <span className={css.titleSpan}>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.title}>Likes</span>
                    <span className={css.titleSpan}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
