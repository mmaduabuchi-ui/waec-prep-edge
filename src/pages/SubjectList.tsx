import { Link } from 'react-router-dom';

const subjects = ['Math', 'English', 'Biology', 'Chemistry', 'Physics'];

function SubjectList() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>📚 Choose a Subject</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {subjects.map((subject) => (
          <li key={subject} style={{ marginBottom: '1.5rem' }}>
            <h3>{subject}</h3>
            <Link to={`/lesson/${subject.toLowerCase()}`} style={{ marginRight: '1rem' }}>
              <button>View Lessons</button>
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

export default SubjectList;