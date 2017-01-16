import React from 'react';

const TaskView = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Task View</h1>
      <h2>{params.id}</h2>
    </div>
  );
};

TaskView.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default TaskView;
