import { useParams } from 'react-router-dom';
import { useState } from 'react';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const quizData: Record<string, Question[]> = {
  math: [
    {
      question: 'What is 5 + 3?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
    },
    {
      question: 'Solve: 12 ÷ 4',
      options: ['2', '3', '4', '6'],
      correctAnswer: '3',
    },
    {
      question: 'What is the square root of 49?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '7',
    },
  ],
  english: [
    {
      question: 'Which is a noun?',
      options: ['Run', 'Happy', 'Book', 'Quickly'],
      correctAnswer: 'Book',
    },
    {
      question: '“He *is* running” – what tense is this?',
      options: ['Past', 'Present continuous', 'Future', 'Perfect'],
      correctAnswer: 'Present continuous',
    },
  ],
  biology: [
    {
      question: 'What organ pumps blood?',
      options: ['Liver', 'Brain', 'Heart', 'Lungs'],
      correctAnswer: 'Heart',
    },
    {
      question: 'Plants make food through?',
      options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
      correctAnswer: 'Photosynthesis',
    },
  ],
};

function QuizEngine() {
  const { subject } = useParams<{ subject: string }>();
  const questions = quizData[subject?.toLowerCase() || ''] || [];

  const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (qIndex: number, option: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[qIndex] = option;
    setUserAnswers(updatedAnswers);
  };

  const score = questions.reduce((total, question, i) => {
    return userAnswers[i] === question.correctAnswer ? total + 1 : total;
  }, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📝 Quiz: {subject}</h2>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '1.5rem' }}>
          <p>
            <strong>Q{i + 1}: {q.question}</strong>
          </p>
          {q.options.map((opt, j) => (
            <label key={j} style={{ display: 'block' }}>
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                checked={userAnswers[i] === opt}
                onChange={() => handleOptionChange(i, opt)}
                disabled={submitted}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button onClick={() => setSubmitted(true)}>Submit</button>
      ) : (
        <h3>✅ Your Score: {score} / {questions.length}</h3>
      )}
    </div>
  );
}

export default QuizEngine;