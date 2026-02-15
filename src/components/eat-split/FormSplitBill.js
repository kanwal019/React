import Button from "./Button";
import { useState } from 'react';

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [billValue, setBillValue] = useState("");
    const [paidBy, setPaidBy] = useState("you");
    const [yourExpense, setYourExpense] = useState("");
    const friendExpense = billValue ? billValue - yourExpense : "";

    function handleSubmit(e) {
        e.preventDefault();
        if (!billValue || !yourExpense) return;
        onSplitBill(paidBy === "you" ? friendExpense : -yourExpense);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label>💰 Bill Value</label>
            <input
                type="text"
                value={billValue}
                onChange={(e) => setBillValue(Number(e.target.value))}
            />
            <label>🧑🏽‍🦱 Your Expense</label>
            <input
                type="text"
                value={yourExpense}
                onChange={(e) =>
                    setYourExpense(Number(e.target.value) > billValue ? yourExpense : Number(e.target.value))
                }
            />
            <label>👨🏽‍🤝‍👩🏻 {selectedFriend.name}'s Expense</label>
            <input
                type="text"
                value={friendExpense}
                disabled
            />
            <label>💵 Who is paying the bill?</label>
            <select
                value={paidBy}
                onChange={(e) => setPaidBy(e.target.value)}
            >
                <option value="you">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button type="submit">⛓️‍💥 Split Bill</Button>
        </form>
    );
}
