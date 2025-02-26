import React from 'react';
import CoursePageTemplate from './CoursePageTemplate';

const lessons = Array.from({ length: 20 }, (_, i) => `Lesson ${i + 1}`);

const CountingPage = () => {
  return <CoursePageTemplate courseName="Counting and Cardinality" lessons={lessons} />;
};

export default CountingPage;
