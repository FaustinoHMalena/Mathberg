// Lesson1.js
import React from 'react';

const Lesson1 = () => {
  return (
    <div>
      <h1>Counting to 10</h1>
      <p>Let's learn to count to 10!</p>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lesson1;
