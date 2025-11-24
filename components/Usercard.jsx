function UserCard({ user }) {
    if (!user) return null;

    return (
        <div>
            <img src={user.avatar_url} width={120} />
            <h2>{user.login}</h2>
            <p>{user.bio || "No bio available."}</p>
            <a href={user.html_url} target="_blank">
                View GitHub Profile
            </a>
        </div>
    );
}

export default UserCard;
