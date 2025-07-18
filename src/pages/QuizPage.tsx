// src/pages/QuizPage.tsx
import { useState } from 'react';

const QuizPage = () => {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = 'B';

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <h2>English Quiz</h2>
      <p>Which of the following is a noun?</p>
      <ul>
        <li>
          <label>
            <input type="radio" value="A" checked={selected === 'A'} onChange={() => setSelected('A')} />
            Quickly
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="B" checked={selected === 'B'} onChange={() => setSelected('B')} />
            Table
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="C" checked={selected === 'C'} onChange={() => setSelected('C')} />
            Run
          </label>
        </li>
      </ul>
      <button onClick={handleSubmit} disabled={!selected}>
        Submit
      </button>
      {submitted && (
        <p>{selected === correctAnswer ? '✅ Correct!' : '❌ Incorrect. The correct answer is "Table".'}</p>
      )}
    </div>
  );
};

export default QuizPage;