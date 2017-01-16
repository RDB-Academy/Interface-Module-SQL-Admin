import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadTaskList } from 'actions/taskActions';
import { getTaskList } from 'store/taskSelector';

class TaskPage extends Component {
  static propTypes = {
    taskList: React.PropTypes.array.isRequired, // eslint-disable-line
    loadTaskList: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.loadTaskList = this.loadTaskList.bind(this);
    console.log(this.props);
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
        { taskList.map(task => (
          <p key={task.id}>{ task.name }</p>
        ))}
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
