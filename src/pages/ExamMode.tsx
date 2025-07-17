import { useState } from "react";

const examQuestions = [
  {
    subject: "Math",
    question: "What is 10 × 10?",
    options: ["10", "100", "1000", "20"],
    answer: "100",
  },
  {
    subject: "English",
    question: "What is the synonym of 'happy'?",
    options: ["sad", "angry", "joyful", "tired"],
    answer: "joyful",
  },
  {
    subject: "Biology",
    question: "What is the basic unit of life?",
    options: ["Organ", "Tissue", "Cell", "Organism"],
    answer: "Cell",
  },
];

export default function ExamMode() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (qIndex: number, selected: string) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: selected }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = examQuestions.reduce((acc, q, idx) => {
    return acc + (answers[idx] === q.answer ? 1 : 0);
  }, 0);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>WAEC Practice Exam</h2>

      {examQuestions.map((q, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <p>
            <strong>Q{index + 1} ({q.subject}):</strong> {q.question}
          </p>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {q.options.map((opt, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={opt}
                    disabled={submitted}
                    checked={answers[index] === opt}
                    onChange={() => handleOptionSelect(index, opt)}
                  />{" "}
                  {opt}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {!submitted ? (
        <button onClick={handleSubmit} style={{ padding: "0.5rem 1rem" }}>
          Submit Exam
        </button>
      ) : (
        <div>
          <h3>Exam Completed</h3>
          <p>
            You scored {score} out of {examQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
}