import React, { Component } from 'react';
import { Card, Container, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadTaskList } from 'actions/taskActions';
import { TaskTable } from 'components/Task';
import { Task } from 'PropTypes';
import { getTaskList } from 'store/taskSelector';

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
        <Jumbotron>
          <Container>
            <h1>Task List</h1>
          </Container>
        </Jumbotron>
        <Container>
          <Card>
            <TaskTable taskList={taskList} loadTaskList={this.loadTaskList} />
          </Card>
        </Container>
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
