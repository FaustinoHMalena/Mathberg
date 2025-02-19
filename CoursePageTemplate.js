import React from 'react';
import { Link } from 'react-router-dom';

const CoursePageTemplate = ({ courseName, lessons }) => {
  return (
    <div>
      <h1>{courseName}</h1>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>
            <Link to={`${courseName.toLowerCase()}/lesson${index + 1}`}>Lesson {index + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePageTemplate;
