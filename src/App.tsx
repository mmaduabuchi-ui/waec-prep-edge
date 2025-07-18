import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import ExamMode from './pages/ExamMode';
import TutorPage from './pages/TutorPage'; // ✅ NEW IMPORT
import InstallPrompt from './InstallPrompt';

function App() {
  return (
    <Router>
      <div>
        <h1>WAECPrepEdge</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/exam">Exam Mode</Link></li>
            <li><Link to="/tutor">AI Tutor</Link></li> {/* ✅ ADD THIS */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<LessonPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/exam" element={<ExamMode />} />
          <Route path="/tutor" element={<TutorPage />} /> {/* ✅ ADD THIS */}
        </Routes>

        <InstallPrompt />
      </div>
    </Router>
  );
}

export default App;