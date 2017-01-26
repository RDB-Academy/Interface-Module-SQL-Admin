import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Link from 'react-router/Link';
import { bindActionCreators } from 'redux';

import { loadTaskList } from 'actions/taskActions';
import { Task } from 'PropTypes';
import { getTaskList } from 'store/taskSelector';

const TaskTable = ({ taskList }) => {
  if (taskList.length === 0) {
    return (
      <p>List is Empty</p>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>SchemaId</th>
          <th>difficulty</th>
          <th>createdAt</th>
          <th>modifiedAt</th>
        </tr>
      </thead>
      <tbody>
        { taskList.map(task => (
          <tr key={task.id}>
            <td><Link to={`/task/${task.id}`}>{task.name}</Link></td>
            <td><Link to={`/schemaDef/${task.schemaDefId}`}>{task.schemaDefName}</Link></td>
            <th>{task.difficulty}</th>
            <th><Moment fromNow>{task.createdAt}</Moment></th>
            <th><Moment fromNow>{task.modifiedAt}</Moment></th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TaskTable.propTypes = {
  taskList: React.PropTypes.arrayOf(
    Task,
  ).isRequired,
};

class TaskList extends Component {
  static propTypes = {
    taskList: React.PropTypes.arrayOf(
      Task,
    ).isRequired,
    loadTaskList: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { taskList } = this.props;
    if (taskList === undefined || taskList.length === 0) {
      this.props.loadTaskList();
    }

    this.loadTaskList = this.loadTaskList.bind(this);
  }

  loadTaskList() {
    this.props.loadTaskList();
  }

  render() {
    const { taskList } = this.props;

    return (
      <div>
        <h1>Task List</h1>
        <button onClick={this.loadTaskList} >Load TaskList</button>
        <TaskTable taskList={taskList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskList: getTaskList(state),
});

const mapDispatchToProps = dispatch => ({
  loadTaskList: bindActionCreators(loadTaskList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
