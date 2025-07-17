import { Link } from 'react-router-dom';

const subjects = ['Math', 'English', 'Biology', 'Chemistry', 'Physics'];

export default function SubjectList() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📚 Choose a Subject</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {subjects.map((subject) => (
          <li key={subject} style={{ marginBottom: '1rem' }}>
            <h3>{subject}</h3>
            <Link to={`/lesson/${subject.toLowerCase()}`}>
              <button style={{ marginRight: '1rem' }}>View Lessons</button>
            </Link>
            <Link to={`/quiz/${subject.toLowerCase()}`}>
              <button>Take Quiz</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}