import { useEffect, useState } from 'react';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  subject: string;
};

const examQuestions: Question[] = [
  {
    subject: 'Math',
    question: 'What is 12 × 2?',
    options: ['22', '24', '26', '30'],
    correctAnswer: '24',
  },
  {
    subject: 'English',
    question: 'What is the opposite of “beautiful”?',
    options: ['Ugly', 'Pretty', 'Nice', 'Gentle'],
    correctAnswer: 'Ugly',
  },
  {
    subject: 'Biology',
    question: 'The cell is the ___ of life.',
    options: ['end', 'start', 'unit', 'root'],
    correctAnswer: 'unit',
  },
  {
    subject: 'Chemistry',
    question: 'Water is made up of?',
    options: ['O2', 'CO2', 'H2O', 'HO'],
    correctAnswer: 'H2O',
  },
  {
    subject: 'Physics',
    question: 'What is the unit of force?',
    options: ['Joule', 'Newton', 'Watt', 'Meter'],
    correctAnswer: 'Newton',
  },
];

function ExamPage() {
  const [answers, setAnswers] = useState<string[]>(Array(examQuestions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 mins = 180s

  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setSubmitted(true);
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const handleOptionChange = (i: number, option: string) => {
    const updated = [...answers];
    updated[i] = option;
    setAnswers(updated);
  };

  const score = examQuestions.reduce((total, q, i) => {
    return answers[i] === q.correctAnswer ? total + 1 : total;
  }, 0);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🧪 WAEC Exam Mode</h2>
      <p>⏰ Time Left: {formatTime(timeLeft)}</p>

      {examQuestions.map((q, i) => (
        <div key={i} style={{ marginBottom: '1.5rem' }}>
          <p>
            <strong>{q.subject} Q{i + 1}:</strong> {q.question}
          </p>
          {q.options.map((opt, j) => (
            <label key={j} style={{ display: 'block' }}>
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                checked={answers[i] === opt}
                onChange={() => handleOptionChange(i, opt)}
                disabled={submitted}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button onClick={() => setSubmitted(true)}>Submit Exam</button>
      ) : (
        <h3>✅ Final Score: {score} / {examQuestions.length}</h3>
      )}
    </div>
  );
}

export default ExamPage;