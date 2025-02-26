import React from 'react';
import { Link } from 'react-router-dom';

const KindergartenCourses = () => {
  const courses = [
    { name: 'Counting and Cardinality', path: '/kindergarten/counting' },
    { name: 'Basic Addition and Subtraction', path: '/kindergarten/addition' },
    { name: 'Shapes and Patterns', path: '/kindergarten/shapes' },
    { name: 'Measurement', path: '/kindergarten/measurement' }
  ];

  return (
    <div>
      <h1>Kindergarten Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.name}>
            <Link to={course.path}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KindergartenCourses;
