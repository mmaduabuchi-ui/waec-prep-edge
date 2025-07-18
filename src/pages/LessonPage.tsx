import { useEffect, useState } from 'react';

interface LessonData {
  subject: string;
  topic: string;
  lesson: string;
}

const LessonPage = () => {
  const [lesson, setLesson] = useState<LessonData | null>(null);

  useEffect(() => {
    fetch('/data/lesson1.json')
      .then((res) => res.json())
      .then((data) => setLesson(data))
      .catch((err) => console.error('Error loading lesson:', err));
  }, []);

  return (
    <div>
      <h2>Lesson Viewer</h2>
      {lesson ? (
        <div>
          <h3>{lesson.subject} - {lesson.topic}</h3>
          <p>{lesson.lesson}</p>
        </div>
      ) : (
        <p>Loading lesson...</p>
      )}
    </div>
  );
};

export default LessonPage;