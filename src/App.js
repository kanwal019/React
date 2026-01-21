import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  function addSteps() {
    setStep((s) => s + 1);
  }
  function subtractSteps() {
    setStep((s) => s - 1);
  }

  function addCount() {
    setCount((c) => c + step);
    updateDate();
  }

  function subtractCount() {
    setCount((c) => c - step);
    updateDate();
  }

  function updateDate() {
    setDate(() => new Date());
    setDate((d) => {
      const newDate = new Date(d);
      newDate.setDate(d.getDate() + count);
      return newDate;
    });
    console.log("Date updated -", date);
  }

  return (
    <div style={{ fontFamily: "sans-serif", fontSize: "24px", textAlign: "center", marginTop: "50px" }}>
      <div style={{ marginTop: "10px" }}>
        <button onClick={subtractSteps}>-</button>
        <span> Step: {step} </span>
        <button onClick={addSteps}>+</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={subtractCount}>-</button>
        <span> Count: {count} </span>
        <button onClick={addCount}>+</button>
      </div>
      <div style={{ marginTop: "10px" }}>{count} days from now is {date.toDateString()}</div>
    </div>
  );
}