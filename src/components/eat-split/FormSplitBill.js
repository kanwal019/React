import Button from "./Button";

export default function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split a bill with Clarke</h2>
            <label>💰 Bill Value</label>
            <input type="text" />
            <label>🧑🏽‍🦱 Your Expense</label>
            <input type="text" />
            <label>👨🏽‍🤝‍👩🏻 Clarke's Expense</label>
            <input type="text" disabled />
            <label>💵 Who is paying the bill?</label>
            <select>
                <option value="you">You</option>
                <option value="friend">Clarke</option>
            </select>
            <Button onClick={() => console.log("Splitting the bill")}>Split Bill</Button>
        </form>
    );
}
