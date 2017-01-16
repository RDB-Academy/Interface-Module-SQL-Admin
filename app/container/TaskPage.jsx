import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Link from 'react-router/Link';
import { bindActionCreators } from 'redux';

import { loadTaskList } from 'actions/taskActions';
import { getTaskList } from 'store/taskSelector';

const TaskTable = ({ taskList, handleClick }) => {
  if (taskList.length === 0) {
    return (
      <p>List is Empty</p>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>SchemaId</th>
          <th>name</th>
          <th>difficulty</th>
          <th>createdAt</th>
          <th>modifiedAt</th>
        </tr>
      </thead>
      <tbody>
        { taskList.map(task => (
          <tr key={task.id} onClick={() => handleClick(task.id)}>
            <td>{task.id}</td>
            <td><Link to={`/schemaDef/${task.schemaDefId}`}>{task.schemaDefId}</Link></td>
            <td>{task.name}</td>
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
  taskList: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};

class TaskPage extends Component {
  static propTypes = {
    taskList: React.PropTypes.array.isRequired, // eslint-disable-line
    loadTaskList: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.loadTaskList = this.loadTaskList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }

  loadTaskList() {
    this.props.loadTaskList();
  }

  handleClick(id) {
    console.log(id);
    console.log(this.props);
  }

  render() {
    const { taskList } = this.props;

    return (
      <div>
        <h1>Task List</h1>
        <button onClick={this.loadTaskList} >Load TaskList</button>
        <TaskTable taskList={taskList} handleClick={this.handleClick} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taskList: getTaskList(state),
  };
}

const mapDispatchToProps = dispatch => (
  {
    loadTaskList: bindActionCreators(loadTaskList, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
