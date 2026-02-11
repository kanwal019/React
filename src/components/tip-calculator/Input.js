export default function Input({ bill, onSetBill }) {
    return (
        <div className="input">
            <label htmlFor="bill">How much was the bill?</label>
            <input 
                type="number" 
                id="bill" 
                placeholder="Bill amount" 
                value={bill}
                onChange={(e) => onSetBill(Number(e.target.value))}
            />
        </div>
    );
}