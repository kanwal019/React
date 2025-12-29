const messages = [
  "Hello React!",
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;

  function handlePrevious() {
    alert("Previous button clicked");
  }

  function handleNext() {
    alert("Next button clicked");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        <div className={`${step >= 4 ? "active" : ""}`}>4</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
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
  );
}
