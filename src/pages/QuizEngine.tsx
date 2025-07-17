import { useParams } from "react-router-dom";
import { useState } from "react";

const quizData: Record<string, { question: string; options: string[]; answer: string }[]> = {
  math: [
    {
      question: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "What is the square root of 49?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
  ],
  english: [
    {
      question: "Choose the correct verb: He _____ to school daily.",
      options: ["go", "goes", "gone", "going"],
      answer: "goes",
    },
    {
      question: "Antonym of 'hot' is?",
      options: ["cold", "warm", "cool", "heat"],
      answer: "cold",
    },
  ],
};

export default function QuizEngine() {
  const { subject } = useParams<{ subject: string }>();
  const questions = quizData[subject || ""] || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  if (!questions.length) return <p style={{ padding: "1rem" }}>No quiz found for this subject.</p>;

  if (finished)
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Quiz Finished</h2>
        <p>Your score: {score} out of {questions.length}</p>
      </div>
    );

  const q = questions[current];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{subject?.toUpperCase()} Quiz</h2>
      <p><strong>Q{current + 1}:</strong> {q.question}</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {q.options.map((opt, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            <button onClick={() => handleAnswer(opt)} style={{ padding: "0.5rem 1rem" }}>
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}