import React from 'react';
import LessonTemplate from './LessonTemplate';

const exercises = [
  { type: 'drawing', question: 'Draw 31 stars.', instruction: 'Use the drawing tool to draw 31 stars.' },
  { type: 'multipleChoice', question: 'How many stars are in the picture?', options: [30, 31, 32, 33], correctAnswer: 31 },
  { type: 'touch', question: 'Tap on the screen to count to 31.', countTo: 31 },
  { type: 'drawing', question: 'Draw 32 moons.', instruction: 'Use the drawing tool to draw 32 moons.' },
  { type: 'multipleChoice', question: 'How many moons are in the picture?', options: [31, 32, 33, 34], correctAnswer: 32 },
  { type: 'touch', question: 'Tap on the screen to count to 32.', countTo: 32 },
  { type: 'drawing', question: 'Draw 33 suns.', instruction: 'Use the drawing tool to draw 33 suns.' },
  { type: 'multipleChoice', question: 'How many suns are in the picture?', options: [32, 33, 34, 35], correctAnswer: 33 },
  { type: 'touch', question: 'Tap on the screen to count to 33.', countTo: 33 },
  { type: 'drawing', question: 'Draw 34 planets.', instruction: 'Use the drawing tool to draw 34 planets.' },
  { type: 'multipleChoice', question: 'How many planets are in the picture?', options: [33, 34, 35, 36], correctAnswer: 34 },
  { type: 'touch', question: 'Tap on the screen to count to 34.', countTo: 34 },
  { type: 'drawing', question: 'Draw 35 comets.', instruction: 'Use the drawing tool to draw 35 comets.' },
  { type: 'multipleChoice', question: 'How many comets are in the picture?', options: [34, 35, 36, 37], correctAnswer: 35 },
  { type: 'touch', question: 'Tap on the screen to count to 35.', countTo: 35 },
  { type: 'drawing', question: 'Draw 36 asteroids.', instruction: 'Use the drawing tool to draw 36 asteroids.' },
  { type: 'multipleChoice', question: 'How many asteroids are in the picture?', options: [35, 36, 37, 38], correctAnswer: 36 },
  { type: 'touch', question: 'Tap on the screen to count to 36.', countTo: 36 },
  { type: 'drawing', question: 'Draw 37 meteors.', instruction: 'Use the drawing tool to draw 37 meteors.' },
  { type: 'multipleChoice', question: 'How many meteors are in the picture?', options: [36, 37, 38, 39], correctAnswer: 37 },
  { type: 'touch', question: 'Tap on the screen to count to 37.', countTo: 37 },
  { type: 'drawing', question: 'Draw 38 rockets.', instruction: 'Use the drawing tool to draw 38 rockets.' },
  { type: 'multipleChoice', question: 'How many rockets are in the picture?', options: [37, 38, 39, 40], correctAnswer: 38 },
  { type: 'touch', question: 'Tap on the screen to count to 38.', countTo: 38 },
  { type: 'drawing', question: 'Draw 39 satellites.', instruction: 'Use the drawing tool to draw 39 satellites.' },
  { type: 'multipleChoice', question: 'How many satellites are in the picture?', options: [38, 39, 40, 41], correctAnswer: 39 },
  { type: 'touch', question: 'Tap on the screen to count to 39.', countTo: 39 },
  { type: 'drawing', question: 'Draw 40 spaceships.', instruction: 'Use the drawing tool to draw 40 spaceships.' },
  { type: 'multipleChoice', question: 'How many spaceships are in the picture?', options: [39, 40, 41, 42], correctAnswer: 40 },
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

const CountingLesson4 = () => {
  return (
    <LessonTemplate lessonNumber={4}>
      {exercises.map((exercise, index) => renderExercise(exercise, index))}
    </LessonTemplate>
  );
};

export default CountingLesson4;
