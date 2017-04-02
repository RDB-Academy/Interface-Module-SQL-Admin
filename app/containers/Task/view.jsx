import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import Helmet from 'react-helmet';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';

import { Task } from 'PropTypes';
import { getTaskById } from 'selectors/taskSelector';

class TaskView extends Component {
  static propTypes = {
    task: Task,
  };

  static defaultProps = {
    task: null,
  };

  render() {
    const { task } = this.props;
    if (task === null) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <Helmet
          title={task.name}
        />
        <Jumbotron>
          <Container>
            <h1>
              <Link to="/tasks">
                {'<'}
              </Link>
              Task View
            </h1>
          </Container>
        </Jumbotron>
        <Container>
          <p>id: {task.id}</p>
          <p>name: {task.name}</p>
          <p>
            schemaDef:
            <Link to={`/schema-defs/${task.schemaDefId}`} >
              {task.schemaDefName}
            </Link>
          </p>
          <p>text: {task.text}</p>
          <p>referenceStatement: {task.referenceStatement}</p>
          <p>difficulty: {task.difficulty}</p>
          <p>
            createdAt: <Moment fromNow>{task.createdAt}</Moment>
          </p>
          <p>
            modifiedAt: <Moment fromNow>{task.modifiedAt}</Moment>
          </p>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => (
  {
    task: getTaskById(state, parseInt(props.match.params.id, 10)),
  }
);

export default connect(mapStateToProps)(TaskView);
