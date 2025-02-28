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
  { type: 'drawing', question: 'Draw 11 flowers.', instruction: 'Use the drawing tool to draw 11 flowers.' },
  { type: 'multipleChoice', question: 'How many flowers are in the picture?', options: [10, 11, 12, 13], correctAnswer: 11 },
  { type: 'touch', question: 'Tap on the screen to count to 11.', countTo: 11 },
  { type: 'drawing', question: 'Draw 12 stars.', instruction: 'Use the drawing tool to draw 12 stars.' },
  { type: 'multipleChoice', question: 'How many stars are in the picture?', options: [11, 12, 13, 14], correctAnswer: 12 },
  { type: 'touch', question: 'Tap on the screen to count to 12.', countTo: 12 },
  { type: 'drawing', question: 'Draw 13 apples.', instruction: 'Use the drawing tool to draw 13 apples.' },
  { type: 'multipleChoice', question: 'How many apples are in the picture?', options: [12, 13, 14, 15], correctAnswer: 13 },
  { type: 'touch', question: 'Tap on the screen to count to 13.', countTo: 13 },
  { type: 'drawing', question: 'Draw 14 oranges.', instruction: 'Use the drawing tool to draw 14 oranges.' },
  { type: 'multipleChoice', question: 'How many oranges are in the picture?', options: [13, 14, 15, 16], correctAnswer: 14 },
  { type: 'touch', question: 'Tap on the screen to count to 14.', countTo: 14 },
  { type: 'drawing', question: 'Draw 15 grapes.', instruction: 'Use the drawing tool to draw 15 grapes.' },
  { type: 'multipleChoice', question: 'How many grapes are in the picture?', options: [14, 15, 16, 17], correctAnswer: 15 },
  { type: 'touch', question: 'Tap on the screen to count to 15.', countTo: 15 },
  { type: 'drawing', question: 'Draw 16 strawberries.', instruction: 'Use the drawing tool to draw 16 strawberries.' },
  { type: 'multipleChoice', question: 'How many strawberries are in the picture?', options: [15, 16, 17, 18], correctAnswer: 16 },
  { type: 'touch', question: 'Tap on the screen to count to 16.', countTo: 16 },
  { type: 'drawing', question: 'Draw 17 bananas.', instruction: 'Use the drawing tool to draw 17 bananas.' },
  { type: 'multipleChoice', question: 'How many bananas are in the picture?', options: [16, 17, 18, 19], correctAnswer: 17 },
  { type: 'touch', question: 'Tap on the screen to count to 17.', countTo: 17 },
  { type: 'drawing', question: 'Draw 18 lemons.', instruction: 'Use the drawing tool to draw 18 lemons.' },
  { type: 'multipleChoice', question: 'How many lemons are in the picture?', options: [17, 18, 19, 20], correctAnswer: 18 },
  { type: 'touch', question: 'Tap on the screen to count to 18.', countTo: 18 },
  { type: 'drawing', question: 'Draw 19 cherries.', instruction: 'Use the drawing tool to draw 19 cherries.' },
  { type: 'multipleChoice', question: 'How many cherries are in the picture?', options: [18, 19, 20, 21], correctAnswer: 19 },
  { type: 'touch', question: 'Tap on the screen to count to 19.', countTo: 19 },
  { type: 'drawing', question: 'Draw 20 pears.', instruction: 'Use the drawing tool to draw 20 pears.' },
  { type: 'multipleChoice', question: 'How many pears are in the picture?', options: [19, 20, 21, 22], correctAnswer: 20 },
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

const CountingLesson3 = () => {
  return (
    <LessonTemplate lessonNumber={3}>
      {exercises.map((exercise, index) => renderExercise(exercise, index))}
    </LessonTemplate>
  );
};

export default CountingLesson3;
