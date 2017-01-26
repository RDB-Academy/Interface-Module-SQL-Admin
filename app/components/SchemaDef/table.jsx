import React, { PropTypes } from 'react';
import Octicon from 'react-octicon';
import Link from 'react-router/Link';
import { Button, Table } from 'reactstrap';

import { ImprovedMoment } from 'components/Tools';
import { SchemaDef } from 'PropTypes';

const SchemaDefTable = ({ schemaDefList, loadSchemaDefList }) => {
  if (schemaDefList.length === 0) {
    return (
      <p>List is Empty</p>
    );
  }
  return (
    <div>
      <Table hover striped className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Tasks</th>
            <th>createdAt</th>
            <th>modifiedAt</th>
            <th width="50px">
              <Button size="sm" color="success" onClick={() => { console.log('create new object'); }}>
                <Octicon name="plus" />
              </Button>
            </th>
            <th width="50px">
              <Button size="sm" color="info" onClick={loadSchemaDefList}>
                <Octicon name="sync" />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          { schemaDefList.map(schemaDef => (
            <tr key={schemaDef.id}>
              <th scope="row">{schemaDef.id}</th>
              <td><Link to={`/schemaDef/${schemaDef.id}`}> { schemaDef.name }</Link></td>
              <td>{schemaDef.taskList.length}</td>
              <td><ImprovedMoment>{schemaDef.createdAt}</ImprovedMoment></td>
              <td><ImprovedMoment>{schemaDef.modifiedAt}</ImprovedMoment></td>
              <td>
                <Button size="sm" outline color="warning">
                  <Link to={`/schemaDef/${schemaDef.id}`} style={{ color: 'inherit', cursor: 'default' }}>
                    <Octicon name="pencil" />
                  </Link>
                </Button>
              </td>
              <td>
                <Button size="sm" outline color="danger" onClick={() => { console.log(schemaDef.id); }}>
                  <Octicon name="x" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

SchemaDefTable.propTypes = {
  schemaDefList: PropTypes.arrayOf(
    SchemaDef.isRequired,
  ).isRequired,
  loadSchemaDefList: PropTypes.func.isRequired,
};

export default SchemaDefTable;
