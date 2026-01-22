import { useState } from "react";

export default function App() {
  return (<Counter />);
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("January 22, 2026");
  date.setDate(date.getDate() + count);

  return (
    <div style={{ fontFamily: "sans-serif", fontSize: "24px", textAlign: "center", marginTop: "50px" }}>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}