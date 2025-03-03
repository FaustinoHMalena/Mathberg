import React from 'react';
import LessonTemplate from './LessonTemplate';

const exercises = [
  { type: 'drawing', question: 'Draw 41 stars.', instruction: 'Use the drawing tool to draw 41 stars.' },
  { type: 'multipleChoice', question: 'How many stars are in the picture?', options: [40, 41, 42, 43], correctAnswer: 41 },
  { type: 'touch', question: 'Tap on the screen to count to 41.', countTo: 41 },
  { type: 'drawing', question: 'Draw 42 moons.', instruction: 'Use the drawing tool to draw 42 moons.' },
  { type: 'multipleChoice', question: 'How many moons are in the picture?', options: [41, 42, 43, 44], correctAnswer: 42 },
  { type: 'touch', question: 'Tap on the screen to count to 42.', countTo: 42 },
  { type: 'drawing', question: 'Draw 43 suns.', instruction: 'Use the drawing tool to draw 43 suns.' },
  { type: 'multipleChoice', question: 'How many suns are in the picture?', options: [42, 43, 44, 45], correctAnswer: 43 },
  { type: 'touch', question: 'Tap on the screen to count to 43.', countTo: 43 },
  { type: 'drawing', question: 'Draw 44 planets.', instruction: 'Use the drawing tool to draw 44 planets.' },
  { type: 'multipleChoice', question: 'How many planets are in the picture?', options: [43, 44, 45, 46], correctAnswer: 44 },
  { type: 'touch', question: 'Tap on the screen to count to 44.', countTo: 44 },
  { type: 'drawing', question: 'Draw 45 comets.', instruction: 'Use the drawing tool to draw 45 comets.' },
  { type: 'multipleChoice', question: 'How many comets are in the picture?', options: [44, 45, 46, 47], correctAnswer: 45 },
  { type: 'touch', question: 'Tap on the screen to count to 45.', countTo: 45 },
  { type: 'drawing', question: 'Draw 46 asteroids.', instruction: 'Use the drawing tool to draw 46 asteroids.' },
  { type: 'multipleChoice', question: 'How many asteroids are in the picture?', options: [45, 46, 47, 48], correctAnswer: 46 },
  { type: 'touch', question: 'Tap on the screen to count to 46.', countTo: 46 },
  { type: 'drawing', question: 'Draw 47 meteors.', instruction: 'Use the drawing tool to draw 47 meteors.' },
  { type: 'multipleChoice', question: 'How many meteors are in the picture?', options: [46, 47, 48, 49], correctAnswer: 47 },
  { type: 'touch', question: 'Tap on the screen to count to 47.', countTo: 47 },
  { type: 'drawing', question: 'Draw 48 rockets.', instruction: 'Use the drawing tool to draw 48 rockets.' },
  { type: 'multipleChoice', question: 'How many rockets are in the picture?', options: [47, 48, 49, 50], correctAnswer: 48 },
  { type: 'touch', question: 'Tap on the screen to count to 48.', countTo: 48 },
  { type: 'drawing', question: 'Draw 49 satellites.', instruction: 'Use the drawing tool to draw 49 satellites.' },
  { type: 'multipleChoice', question: 'How many satellites are in the picture?', options: [48, 49, 50, 51], correctAnswer: 49 },
  { type: 'touch', question: 'Tap on the screen to count to 49.', countTo: 49 },
  { type: 'drawing', question: 'Draw 50 spaceships.', instruction: 'Use the drawing tool to draw 50 spaceships.' },
  { type: 'multipleChoice', question: 'How many spaceships are in the picture?', options: [49, 50, 51, 52], correctAnswer: 50 },
  { type: 'touch', question: 'Tap on the screen to count to 50.', countTo: 50 },
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

const CountingLesson5 = () => {
  return (
    <LessonTemplate lessonNumber={5}>
      {exercises.map((exercise, index) => renderExercise(exercise, index))}
    </LessonTemplate>
  );
};

export default CountingLesson5;
