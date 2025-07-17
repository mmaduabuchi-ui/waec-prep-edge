import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubjectList from './pages/SubjectList';
import LessonViewer from './pages/LessonViewer';
import QuizEngine from './pages/QuizEngine';
import ExamMode from './pages/ExamMode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<SubjectList />} />
        <Route path="/lesson/:subject" element={<LessonViewer />} />
        <Route path="/quiz/:subject" element={<QuizEngine />} />
        <Route path="/exam" element={<ExamMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;