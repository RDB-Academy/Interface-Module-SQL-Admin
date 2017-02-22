import React from 'react';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';

import TaskList from './list';
import TaskView from './view';

const TaskPage = ({ pathname }) => (
  <div>
    <Helmet
      title="Tasks"
    />
    <Route pattern={`${pathname}`} exactly component={TaskList} />
    <Route pattern={`${pathname}/:id`} exactly component={TaskView} />
  </div>
);

TaskPage.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default TaskPage;
