import React from 'react';
import LessonTemplate from './LessonTemplate';

const exercises = [
  { type: 'drawing', question: 'Draw 21 apples.', instruction: 'Use the drawing tool to draw 21 apples.' },
  { type: 'multipleChoice', question: 'How many apples are in the picture?', options: [20, 21, 22, 23], correctAnswer: 21 },
  { type: 'touch', question: 'Tap on the screen to count to 21.', countTo: 21 },
  { type: 'drawing', question: 'Draw 22 cats.', instruction: 'Use the drawing tool to draw 22 cats.' },
  { type: 'multipleChoice', question: 'How many cats are in the picture?', options: [21, 22, 23, 24], correctAnswer: 22 },
  { type: 'touch', question: 'Tap on the screen to count to 22.', countTo: 22 },
  { type: 'drawing', question: 'Draw 23 dogs.', instruction: 'Use the drawing tool to draw 23 dogs.' },
  { type: 'multipleChoice', question: 'How many dogs are in the picture?', options: [22, 23, 24, 25], correctAnswer: 23 },
  { type: 'touch', question: 'Tap on the screen to count to 23.', countTo: 23 },
  { type: 'drawing', question: 'Draw 24 fish.', instruction: 'Use the drawing tool to draw 24 fish.' },
  { type: 'multipleChoice', question: 'How many fish are in the picture?', options: [23, 24, 25, 26], correctAnswer: 24 },
  { type: 'touch', question: 'Tap on the screen to count to 24.', countTo: 24 },
  { type: 'drawing', question: 'Draw 25 birds.', instruction: 'Use the drawing tool to draw 25 birds.' },
  { type: 'multipleChoice', question: 'How many birds are in the picture?', options: [24, 25, 26, 27], correctAnswer: 25 },
  { type: 'touch', question: 'Tap on the screen to count to 25.', countTo: 25 },
  { type: 'drawing', question: 'Draw 26 flowers.', instruction: 'Use the drawing tool to draw 26 flowers.' },
  { type: 'multipleChoice', question: 'How many flowers are in the picture?', options: [25, 26, 27, 28], correctAnswer: 26 },
  { type: 'touch', question: 'Tap on the screen to count to 26.', countTo: 26 },
  { type: 'drawing', question: 'Draw 27 butterflies.', instruction: 'Use the drawing tool to draw 27 butterflies.' },
  { type: 'multipleChoice', question: 'How many butterflies are in the picture?', options: [26, 27, 28, 29], correctAnswer: 27 },
  { type: 'touch', question: 'Tap on the screen to count to 27.', countTo: 27 },
  { type: 'drawing', question: 'Draw 28 bees.', instruction: 'Use the drawing tool to draw 28 bees.' },
  { type: 'multipleChoice', question: 'How many bees are in the picture?', options: [27, 28, 29, 30], correctAnswer: 28 },
  { type: 'touch', question: 'Tap on the screen to count to 28.', countTo: 28 },
  { type: 'drawing', question: 'Draw 29 ants.', instruction: 'Use the drawing tool to draw 29 ants.' },
  { type: 'multipleChoice', question: 'How many ants are in the picture?', options: [28, 29, 30, 31], correctAnswer: 29 },
  { type: 'touch', question: 'Tap on the screen to count to 29.', countTo: 29 },
  { type: 'drawing', question: 'Draw 30 leaves.', instruction: 'Use the drawing tool to draw 30 leaves.' },
  { type: 'multipleChoice', question: 'How many leaves are in the picture?', options: [29, 30, 31, 32], correctAnswer: 30 },
  { type: 'touch', question: 'Tap on the screen to count to 30.', countTo: 30 },
];

const renderExercise = (exercise, index) => {
  switch (exercise.type) {
    case 'drawing':
      return (
        <div key={index}>
          <p>{exercise.question}</p>
          <p>{exercise.instruction}</p>
          {/* Drawing tool component here */}
        </div>
      );
    case 'multipleChoice':
      return (
        <div key={index}>
          <p>{exercise.question}</p>
          {exercise.options.map((option, i) => (
            <button key={i}>{option}</button>
          ))}
        </div>
      );
    case 'touch':
      return (
        <div key={index}>
          <p>{exercise.question}</p>
          {/* Touch screen interaction component here */}
        </div>
      );
    default:
      return null;
  }
};

const CountingLesson3 = () => {
  return (
    <LessonTemplate lessonNumber={3}>
      {exercises.map((exercise, index) => renderExercise(exercise, index))}
    </LessonTemplate>
  );
};

export default CountingLesson3;
