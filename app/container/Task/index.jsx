import React from 'react';
import Match from 'react-router/Match';

import TaskList from './list';
import TaskView from './view';

const TaskPage = ({ pathname }) => (
  <div>
    <Match pattern={`${pathname}`} exactly component={TaskList} />
    <Match pattern={`${pathname}/:id`} exactly component={TaskView} />
  </div>
);

TaskPage.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default TaskPage;
