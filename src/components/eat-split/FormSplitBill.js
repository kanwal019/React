import Button from "./Button";

export default function FormSplitBill({ selectedFriend }) {
    return (
        <form className="form-split-bill">
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label>💰 Bill Value</label>
            <input type="text" />
            <label>🧑🏽‍🦱 Your Expense</label>
            <input type="text" />
            <label>👨🏽‍🤝‍👩🏻 {selectedFriend.name}'s Expense</label>
            <input type="text" disabled />
            <label>💵 Who is paying the bill?</label>
            <select>
                <option value="you">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button onClick={() => console.log("Splitting the bill")}>⛓️‍💥 Split Bill</Button>
        </form>
    );
}
