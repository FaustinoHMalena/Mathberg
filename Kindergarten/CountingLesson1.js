import React, { useState } from 'react';
import LessonTemplate from './LessonTemplate';

const exercises = [
  { type: 'drawing', question: 'Draw 5 apples.', instruction: 'Use the drawing tool to draw 5 apples.' },
  { type: 'multipleChoice', question: 'How many apples are in the picture?', options: [3, 4, 5, 6], correctAnswer: 5 },
  { type: 'touch', question: 'Tap on the screen to count to 5.', countTo: 5 },
  { type: 'drawing', question: 'Draw 3 stars.', instruction: 'Use the drawing tool to draw 3 stars.' },
  { type: 'multipleChoice', question: 'How many stars are in the picture?', options: [2, 3, 4, 5], correctAnswer: 3 },
  { type: 'touch', question: 'Tap on the screen to count to 10.', countTo: 10 },
  { type: 'drawing', question: 'Draw 7 circles.', instruction: 'Use the drawing tool to draw 7 circles.' },
  { type: 'multipleChoice', question: 'How many circles are in the picture?', options: [6, 7, 8, 9], correctAnswer: 7 },
  { type: 'touch', question: 'Tap on the screen to count to 15.', countTo: 15 },
  { type: 'drawing', question: 'Draw 10 squares.', instruction: 'Use the drawing tool to draw 10 squares.' },
  { type: 'multipleChoice', question: 'How many squares are in the picture?', options: [8, 9, 10, 11], correctAnswer: 10 },
  { type: 'drawing', question: 'Draw 4 triangles.', instruction: 'Use the drawing tool to draw 4 triangles.' },
  { type: 'multipleChoice', question: 'How many triangles are in the picture?', options: [3, 4, 5, 6], correctAnswer: 4 },
  { type: 'touch', question: 'Tap on the screen to count to 20.', countTo: 20 },
  { type: 'drawing', question: 'Draw 6 hearts.', instruction: 'Use the drawing tool to draw 6 hearts.' },
  { type: 'multipleChoice', question: 'How many hearts are in the picture?', options: [5, 6, 7, 8], correctAnswer: 6 },
  { type: 'touch', question: 'Tap on the screen to count to 3.', countTo: 3 },
  { type: 'drawing', question: 'Draw 2 diamonds.', instruction: 'Use the drawing tool to draw 2 diamonds.' },
  { type: 'multipleChoice', question: 'How many diamonds are in the picture?', options: [1, 2, 3, 4], correctAnswer: 2 },
  { type: 'touch', question: 'Tap on the screen to count to 7.', countTo: 7 },
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
