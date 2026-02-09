import { useState } from "react";
import { messages } from "./App";
import { Button } from "./Button";

export function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    // const [test] = useState({ name: "Test" });
    function handlePrevious() {
        if (step > 1) setStep((s) => s - 1);
    }

    function handleNext() {
        if (step < messages.length) {
            setStep((s) => s + 1);
            // setStep(step + 1); // This will only increment by 1 due to how state updates are batched
            // setStep((s) => s + 1); // This will only increment by 2 because React batches state updates
        }
        // test.name = "Changed"; // This is a bad example of mutating state directly
    }

    return (
        <div>
            <button className="close" onClick={() => setIsOpen((is) => !is)}>
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
                        <Button
                            textColor="#fff"
                            backgroundColor="#7950f2"
                            onClick={handlePrevious}
                            text="Previous"
                        />
                        <Button
                            textColor="#fff"
                            backgroundColor="#7950f2"
                            onClick={handleNext}
                            text="Next"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

