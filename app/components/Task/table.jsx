import React, { PropTypes } from 'react';
import Octicon from 'react-octicon';
import Link from 'react-router-dom/Link';
import { Button, Table } from 'reactstrap';

import { ImprovedMoment } from 'components/Tools';
import { Task } from 'PropTypes';

const TaskTable = ({ taskList, loadTaskList }) => {
  if (taskList.length === 0) {
    return (
      <p>List is Empty</p>
    );
  }
  return (
    <Table hover striped className="mb-0">
      <thead>
        <tr>
          <th>#</th>
          <th>Schema</th>
          <th>name</th>
          <th>difficulty</th>
          <th>createdAt</th>
          <th>modifiedAt</th>
          <th width="50px">
            <Button size="sm" color="success" onClick={() => { console.log('create new object'); }}>
              <Octicon name="plus" />
            </Button>
          </th>
          <th width="50px">
            <Button size="sm" color="info" onClick={loadTaskList}>
              <Octicon name="sync" />
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        { taskList.map(task => (
          <tr key={task.id}>
            <th scope="row">
              <Link to={`/tasks/${task.id}`}>
                {task.id}
              </Link>
            </th>
            <td><Link to={`/schema-defs/${task.schemaDefId}`}>{task.schemaDefName}</Link></td>
            <td>{task.name}</td>
            <td>{task.difficulty}</td>
            <td><ImprovedMoment fromNow>{task.createdAt}</ImprovedMoment></td>
            <td><ImprovedMoment fromNow>{task.modifiedAt}</ImprovedMoment></td>
            <td>
              <Button size="sm" outline color="warning">
                <Link to={`/tasks/${task.id}`} style={{ color: 'inherit', cursor: 'default' }}>
                  <Octicon name="pencil" />
                </Link>
              </Button>
            </td>
            <td>
              <Button size="sm" outline color="danger" onClick={() => { console.log(task.id); }}>
                <Octicon name="x" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TaskTable.propTypes = {
  taskList: PropTypes.arrayOf(
    Task,
  ).isRequired,
  loadTaskList: PropTypes.func.isRequired,
};

export default TaskTable;
