export default function Input() {
    return (
        <div className="input">
            <label htmlFor="bill">How much was the bill?</label>
            <input type="number" id="bill" placeholder="Bill amount" />
        </div>
    );
}