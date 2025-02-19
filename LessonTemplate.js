import React from 'react';

const LessonTemplate = ({ lessonNumber, questions }) => {
  return (
    <div>
      <h1>Lesson {lessonNumber}</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonTemplate;
