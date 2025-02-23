import React, { useState } from 'react';
import LessonTemplate from './LessonTemplate';

const exercises = [
  { type: 'drawing', question: 'Draw 5 ice cream cones.', instruction: 'Use the drawing tool to draw 5 ice cream cones.' },
  { type: 'multipleChoice', question: 'How many ice cream cones are in the picture?', options: [4, 5, 6, 7], correctAnswer: 5 },
  { type: 'touch', question: 'Tap on the screen to count to 5.', countTo: 5 },
  { type: 'drawing', question: 'Draw 4 bicycles.', instruction: 'Use the drawing tool to draw 4 bicycles.' },
  { type: 'multipleChoice', question: 'How many bicycles are in the picture?', options: [3, 4, 5, 6], correctAnswer: 4 },
  { type: 'touch', question: 'Tap on the screen to count to 10.', countTo: 10 },
  { type: 'drawing', question: 'Draw 3 kites.', instruction: 'Use the drawing tool to draw 3 kites.' },
  { type: 'multipleChoice', question: 'How many kites are in the picture?', options: [2, 3, 4, 5], correctAnswer: 3 },
  { type: 'touch', question: 'Tap on the screen to count to 15.', countTo: 15 },
  { type: 'drawing', question: 'Draw 6 balloons.', instruction: 'Use the drawing tool to draw 6 balloons.' },
  { type: 'multipleChoice', question: 'How many balloons are in the picture?', options: [5, 6, 7, 8], correctAnswer: 6 },
  { type: 'touch', question: 'Tap on the screen to count to 20.', countTo: 20 },
  { type: 'drawing', question: 'Draw 7 cupcakes.', instruction: 'Use the drawing tool to draw 7 cupcakes.' },
  { type: 'multipleChoice', question: 'How many cupcakes are in the picture?', options: [6, 7, 8, 9], correctAnswer: 7 },
  { type: 'touch', question: 'Tap on the screen to count to 25.', countTo: 25 },
  { type: 'drawing', question: 'Draw 8 stars.', instruction: 'Use the drawing tool to draw 8 stars.' },
  { type: 'multipleChoice', question: 'How many stars are in the picture?', options: [7, 8, 9, 10], correctAnswer: 8 },
  { type: 'touch', question: 'Tap on the screen to count to 30.', countTo: 30 },
  { type: 'drawing', question: 'Draw 9 trees.', instruction: 'Use the drawing tool to draw 9 trees.' },
  { type: 'multipleChoice', question: 'How many trees are in the picture?', options: [8, 9, 10, 11], correctAnswer: 9 },
  { type: 'touch', question: 'Tap on the screen to count to 35.', countTo: 35 },
  { type: 'drawing', question: 'Draw 10 cars.', instruction: 'Use the drawing tool to draw 10 cars.' },
  { type: 'multipleChoice', question: 'How many cars are in the picture?', options: [9, 10, 11, 12], correctAnswer: 10 },
  { type: 'touch', question: 'Tap on the screen to count to 40.', countTo: 40 },
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
