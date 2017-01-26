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
      <Button outline color="success" onClick={loadSchemaDefList}>
        <Octicon name="sync" />
      </Button>
      <Table hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>createdAt</th>
            <th>modifiedAt</th>
            <th width="20px" />
            <th width="20px" />
          </tr>
        </thead>
        <tbody>
          { schemaDefList.map(schemaDef => (
            <tr key={schemaDef.id}>
              <th scope="row">{schemaDef.id}</th>
              <td><Link to={`/schemaDef/${schemaDef.id}`}> { schemaDef.name }</Link></td>
              <td><ImprovedMoment>{schemaDef.createdAt}</ImprovedMoment></td>
              <td><ImprovedMoment>{schemaDef.modifiedAt}</ImprovedMoment></td>
              <td><Button size="sm" outline color="warning"><Octicon name="pencil" /></Button></td>
              <td><Button size="sm" outline color="danger" onClick={() => { console.log(schemaDef.id); }}><Octicon name="x" /></Button></td>
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
