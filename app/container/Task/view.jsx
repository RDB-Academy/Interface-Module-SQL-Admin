import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Link from 'react-router/Link';

import { Task } from 'PropTypes';
import { getTaskById } from 'store/taskSelector';

class TaskView extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    task: Task,
  };

  static defaultProps = {
    task: null,
    schemaDef: null,
  };

  render() {
    const { task } = this.props;
    return (
      <div>
        <Helmet
          title={task.name}
        />
        <h1><Link to="/task">{'<'}</Link> Task View</h1>
        <hr />
        <p>id: {task.id}</p>
        <p>name: {task.name}</p>
        <p>schemaDef: <Link to={`/schemaDef/${task.schemaDefId}`}>{task.schemaDefName}</Link></p>
        <p>text: {task.text}</p>
        <p>referenceStatement: {task.referenceStatement}</p>
        <p>difficulty: {task.difficulty}</p>
        <p>
          createdAt: <Moment fromNow>{task.createdAt}</Moment>
        </p>
        <p>
          modifiedAt: <Moment fromNow>{task.modifiedAt}</Moment>
        </p>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => (
  {
    task: getTaskById(state, parseInt(props.params.id, 10)),
  }
);

export default connect(mapStateToProps)(TaskView);
