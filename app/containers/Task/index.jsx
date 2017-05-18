import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';

import TaskList from './list';
import TaskView from './view';

const TaskPage = ({ match }) => (
  <div>
    <Helmet
      title="Tasks"
    />
    <Route path={`${match.path}`} exact component={TaskList} />
    <Route path={`${match.path}/:id`} exact component={TaskView} />
  </div>
);

TaskPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskPage;
