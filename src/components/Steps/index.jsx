import { useState } from "react";
import Button from "../Button";
import StepMessage from "../StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
    else if (step === 1) setStep((s) => s + 2);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    } else if (step === 3) {
      setStep((s) => s - 2);
    }
  };

  return (
    <div>
      <button
        className="close"
        onClick={() =>
          setIsOpen((is) => {
            if (is === true) {
              setIsOpen(false);
              setStep(1);
            } else {
              setIsOpen(true);
            }
          })
        }
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
