import React from 'react';
import LessonTemplate from './LessonTemplate';

const questions = Array.from({ length: 20 }, (_, i) => `Question ${i + 1}`);

const CountingLesson1 = () => {
  return <LessonTemplate lessonNumber={1} questions={questions} />;
};

export default CountingLesson1;
