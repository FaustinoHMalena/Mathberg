import React, { useState } from 'react';
import LessonTemplate from './LessonTemplate';

const exercises = [
  { type: 'drawing', question: 'Draw 11 apples.', instruction: 'Use the drawing tool to draw 11 apples.' },
  { type: 'multipleChoice', question: 'How many apples are in the picture?', options: [10, 11, 12, 13], correctAnswer: 11 },
  { type: 'touch', question: 'Tap on the screen to count to 11.', countTo: 11 },
  { type: 'drawing', question: 'Draw 12 cats.', instruction: 'Use the drawing tool to draw 12 cats.' },
  { type: 'multipleChoice', question: 'How many cats are in the picture?', options: [11, 12, 13, 14], correctAnswer: 12 },
  { type: 'touch', question: 'Tap on the screen to count to 12.', countTo: 12 },
  { type: 'drawing', question: 'Draw 13 dogs.', instruction: 'Use the drawing tool to draw 13 dogs.' },
  { type: 'multipleChoice', question: 'How many dogs are in the picture?', options: [12, 13, 14, 15], correctAnswer: 13 },
  { type: 'touch', question: 'Tap on the screen to count to 13.', countTo: 13 },
  { type: 'drawing', question: 'Draw 14 fish.', instruction: 'Use the drawing tool to draw 14 fish.' },
  { type: 'multipleChoice', question: 'How many fish are in the picture?', options: [13, 14, 15, 16], correctAnswer: 14 },
  { type: 'touch', question: 'Tap on the screen to count to 14.', countTo: 14 },
  { type: 'drawing', question: 'Draw 15 birds.', instruction: 'Use the drawing tool to draw 15 birds.' },
  { type: 'multipleChoice', question: 'How many birds are in the picture?', options: [14, 15, 16, 17], correctAnswer: 15 },
  { type: 'touch', question: 'Tap on the screen to count to 15.', countTo: 15 },
  { type: 'drawing', question: 'Draw 16 flowers.', instruction: 'Use the drawing tool to draw 16 flowers.' },
  { type: 'multipleChoice', question: 'How many flowers are in the picture?', options: [15, 16, 17, 18], correctAnswer: 16 },
  { type: 'touch', question: 'Tap on the screen to count to 16.', countTo: 16 },
  { type: 'drawing', question: 'Draw 17 butterflies.', instruction: 'Use the drawing tool to draw 17 butterflies.' },
  { type: 'multipleChoice', question: 'How many butterflies are in the picture?', options: [16, 17, 18, 19], correctAnswer: 17 },
  { type: 'touch', question: 'Tap on the screen to count to 17.', countTo: 17 },
  { type: 'drawing', question: 'Draw 18 bees.', instruction: 'Use the drawing tool to draw 18 bees.' },
  { type: 'multipleChoice', question: 'How many bees are in the picture?', options: [17, 18, 19, 20], correctAnswer: 18 },
  { type: 'touch', question: 'Tap on the screen to count to 18.', countTo: 18 },
  { type: 'drawing', question: 'Draw 19 ants.', instruction: 'Use the drawing tool to draw 19 ants.' },
  { type: 'multipleChoice', question: 'How many ants are in the picture?', options: [18, 19, 20, 21], correctAnswer: 19 },
  { type: 'touch', question: 'Tap on the screen to count to 19.', countTo: 19 },
  { type: 'drawing', question: 'Draw 20 leaves.', instruction: 'Use the drawing tool to draw 20 leaves.' },
  { type: 'multipleChoice', question: 'How many leaves are in the picture?', options: [19, 20, 21, 22], correctAnswer: 20 },
  { type: 'touch', question: 'Tap on the screen to count to 20.', countTo: 20 },
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

const CountingLesson2 = () => {
  return (
    <LessonTemplate lessonNumber={2}>
      {exercises.map((exercise, index) => renderExercise(exercise, index))}
    </LessonTemplate>
  );
};

export default CountingLesson2;
