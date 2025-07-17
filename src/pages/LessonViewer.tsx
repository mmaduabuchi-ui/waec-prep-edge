import { useParams } from 'react-router-dom';

const lessonsData: Record<string, { title: string; content: string }[]> = {
  math: [
    { title: 'Algebra Basics', content: 'Learn how to solve simple equations.' },
    { title: 'Geometry', content: 'Understand shapes, angles, and theorems.' },
    { title: 'Probability', content: 'Introduction to chances and predictions.' },
  ],
  english: [
    { title: 'Parts of Speech', content: 'Explore nouns, verbs, adjectives, and more.' },
    { title: 'Comprehension Skills', content: 'Improve reading and understanding.' },
    { title: 'Essay Writing', content: 'Structure and write great essays.' },
  ],
  biology: [
    { title: 'Cell Structure', content: 'Discover the building blocks of life.' },
    { title: 'Human Systems', content: 'Understand the circulatory and respiratory systems.' },
    { title: 'Photosynthesis', content: 'Learn how plants make their food.' },
  ],
  chemistry: [
    { title: 'Atoms & Molecules', content: 'Dive into the basics of chemical matter.' },
    { title: 'Chemical Reactions', content: 'See how substances change.' },
    { title: 'Acids & Bases', content: 'Learn pH and common examples.' },
  ],
  physics: [
    { title: 'Motion & Force', content: 'Study Newton’s laws.' },
    { title: 'Energy Forms', content: 'Kinetic, potential, thermal, and more.' },
    { title: 'Electricity Basics', content: 'Current, voltage, and circuits.' },
  ],
};

function LessonViewer() {
  const { subject } = useParams<{ subject: string }>();
  const lessons = lessonsData[subject?.toLowerCase() || ''] || [];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📘 Lessons for {subject}</h2>
      {lessons.length === 0 ? (
        <p>No lessons found for this subject.</p>
      ) : (
        <ul>
          {lessons.map((lesson, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <h4>{lesson.title}</h4>
              <p>{lesson.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LessonViewer;