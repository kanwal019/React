import Button from './Button';
import './EatAndSplit.css';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import FriendList from './FriendList';
import { useState } from 'react';

export const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelectFriend(friend) {
        setSelectedFriend(selected => selected?.id === friend.id ? null : friend);
        setShowAddFriend(false);
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelectFriend={handleSelectFriend}
                />
                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
                <Button onClick={handleShowAddFriend}>{showAddFriend ? "❌ Close" : "➕ Add Friend"}</Button>
            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
        </div>
    );
}

