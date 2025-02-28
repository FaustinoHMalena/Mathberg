import React, { useState } from 'react';
import LessonTemplate from './LessonTemplate';

const exercises = [
  { type: 'drawing', question: 'Draw 1 sun.', instruction: 'Use the drawing tool to draw 1 sun.' },
  { type: 'multipleChoice', question: 'How many suns are in the picture?', options: [1, 2, 3, 4], correctAnswer: 1 },
  { type: 'touch', question: 'Tap on the screen to count to 1.', countTo: 1 },
  { type: 'drawing', question: 'Draw 2 cats.', instruction: 'Use the drawing tool to draw 2 cats.' },
  { type: 'multipleChoice', question: 'How many cats are in the picture?', options: [1, 2, 3, 4], correctAnswer: 2 },
  { type: 'touch', question: 'Tap on the screen to count to 2.', countTo: 2 },
  { type: 'drawing', question: 'Draw 3 dogs.', instruction: 'Use the drawing tool to draw 3 dogs.' },
  { type: 'multipleChoice', question: 'How many dogs are in the picture?', options: [2, 3, 4, 5], correctAnswer: 3 },
  { type: 'touch', question: 'Tap on the screen to count to 3.', countTo: 3 },
  { type: 'drawing', question: 'Draw 4 fish.', instruction: 'Use the drawing tool to draw 4 fish.' },
  { type: 'multipleChoice', question: 'How many fish are in the picture?', options: [3, 4, 5, 6], correctAnswer: 4 },
  { type: 'touch', question: 'Tap on the screen to count to 4.', countTo: 4 },
  { type: 'drawing', question: 'Draw 5 birds.', instruction: 'Use the drawing tool to draw 5 birds.' },
  { type: 'multipleChoice', question: 'How many birds are in the picture?', options: [4, 5, 6, 7], correctAnswer: 5 },
  { type: 'touch', question: 'Tap on the screen to count to 5.', countTo: 5 },
  { type: 'drawing', question: 'Draw 6 flowers.', instruction: 'Use the drawing tool to draw 6 flowers.' },
  { type: 'multipleChoice', question: 'How many flowers are in the picture?', options: [5, 6, 7, 8], correctAnswer: 6 },
  { type: 'touch', question: 'Tap on the screen to count to 6.', countTo: 6 },
  { type: 'drawing', question: 'Draw 7 butterflies.', instruction: 'Use the drawing tool to draw 7 butterflies.' },
  { type: 'multipleChoice', question: 'How many butterflies are in the picture?', options: [6, 7, 8, 9], correctAnswer: 7 },
  { type: 'touch', question: 'Tap on the screen to count to 7.', countTo: 7 },
  { type: 'drawing', question: 'Draw 8 bees.', instruction: 'Use the drawing tool to draw 8 bees.' },
  { type: 'multipleChoice', question: 'How many bees are in the picture?', options: [7, 8, 9, 10], correctAnswer: 8 },
  { type: 'touch', question: 'Tap on the screen to count to 8.', countTo: 8 },
  { type: 'drawing', question: 'Draw 9 ants.', instruction: 'Use the drawing tool to draw 9 ants.' },
  { type: 'multipleChoice', question: 'How many ants are in the picture?', options: [8, 9, 10, 11], correctAnswer: 9 },
  { type: 'touch', question: 'Tap on the screen to count to 9.', countTo: 9 },
  { type: 'drawing', question: 'Draw 10 leaves.', instruction: 'Use the drawing tool to draw 10 leaves.' },
  { type: 'multipleChoice', question: 'How many leaves are in the picture?', options: [9, 10, 11, 12], correctAnswer: 10 },
  { type: 'touch', question: 'Tap on the screen to count to 10.', countTo: 10 },
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

const CountingLesson1 = () => {
  return (
    <LessonTemplate lessonNumber={1}>
      {exercises.map((exercise, index) => renderExercise(exercise, index))}
    </LessonTemplate>
  );
};

export default CountingLesson1;
