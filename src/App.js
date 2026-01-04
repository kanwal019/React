import { useState } from "react";

const messages = [
  "Hello React!",
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test] = useState({ name: "Test" });

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < messages.length) {
      setStep(step + 1);
      setStep(step + 1); // This will only increment by 1 due to how state updates are batched
    }
    // test.name = "Changed"; // This is a bad example of mutating state directly
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]} {/*{test.name}*/}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              onMouseEnter={() => console.debug("Enter Previous button")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              onMouseEnter={() => console.debug("Enter Next button")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
