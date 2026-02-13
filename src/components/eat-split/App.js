import './EatAndSplit.css';

const initialFriends = [
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
    return (
        <div>
            <h1>Eat Split</h1>
            <p>Calculate how much each person should pay when splitting a bill.</p>
        </div>
    );
}
