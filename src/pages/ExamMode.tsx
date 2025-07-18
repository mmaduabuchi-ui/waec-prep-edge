// src/pages/ExamModePage.tsx
import { useState } from 'react';

const questions = [
  {
    question: 'Which part of speech describes an action?',
    options: ['Noun', 'Verb', 'Adjective', 'Preposition'],
    correct: 1,
  },
  {
    question: 'Which of the following is an adjective?',
    options: ['Run', 'Beautiful', 'House', 'Quickly'],
    correct: 1,
  },
];

const ExamModePage = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = answers.reduce((acc, answer, i) => {
    return answer === questions[i].correct ? acc + 1 : acc;
  }, 0);

  return (
    <div>
      <h2>WAEC Exam Simulation</h2>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '20px' }}>
          <p>
            <strong>Q{i + 1}:</strong> {q.question}
          </p>
          {q.options.map((option, j) => (
            <label key={j} style={{ display: 'block' }}>
              <input
                type="radio"
                name={`question-${i}`}
                checked={answers[i] === j}
                onChange={() => handleChange(i, j)}
              />
              {option}
            </label>
          ))}
          {submitted && (
            <p>
              {answers[i] === q.correct
                ? '✅ Correct!'
                : `❌ Incorrect. Correct answer: ${q.options[q.correct]}`}
            </p>
          )}
        </div>
      ))}
      {!submitted && <button onClick={handleSubmit}>Submit Exam</button>}
      {submitted && <h3>Final Score: {score} / {questions.length}</h3>}
    </div>
  );
};

export default ExamModePage;