import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import KindergartenCourses from './KindergartenCourses';
import CountingPage from './CountingPage';
import CountingLesson1 from './CountingLesson1';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/kindergarten" component={KindergartenCourses} />
        <Route exact path="/kindergarten/counting" component={CountingPage} />
        <Route exact path="/kindergarten/counting/lesson1" component={CountingLesson1} />
        {/* Add more routes for other lessons and courses here */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
