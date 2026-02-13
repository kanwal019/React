export function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    );
}

function Friend({ friend }) {
    return (
        <li key={friend.id}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {
                friend.balance < 0 ?
                    <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>
                    : friend.balance > 0 ? <p className="green">You are owed ${friend.balance} by {friend.name}</p> : <p className="neutral">You and {friend.name} are even</p>}
        </li>
    );
}