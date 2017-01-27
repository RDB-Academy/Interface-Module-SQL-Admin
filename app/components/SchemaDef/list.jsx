import React, { Component, PropTypes } from 'react';
import Octicon from 'react-octicon';
import { Button, ListGroup } from 'reactstrap';

import { SchemaDefMin } from 'PropTypes';

import SchemaDefListEntry from './list-entry';

class SchemaDefList extends Component {
  static propTypes = {
    schemaDefList: PropTypes.arrayOf(
      SchemaDefMin.isRequired,
    ).isRequired,
    loadSchemaDefList: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.toggleAvailable = this.toggleAvailable.bind(this);
  }

  toggleAvailable(e, id) {
    e.preventDefault();
    e.stopPropagation();
    console.log(id);
  }

  render() {
    const { schemaDefList, loadSchemaDefList } = this.props;

    if (schemaDefList.length === 0) {
      return (
        <p>List is Empty</p>
      );
    }
    return (
      <div>
        <Button size="sm" color="success" onClick={() => { console.log('create new object'); }}>
          <Octicon name="plus" />
        </Button>
        <Button size="sm" color="info" onClick={loadSchemaDefList}>
          <Octicon name="sync" />
        </Button>
        <ListGroup className="schemadef-list">
          { schemaDefList.map(schemaDef => (
            <SchemaDefListEntry
              key={schemaDef.id}
              schemaDef={schemaDef}
              toggleAvailable={this.toggleAvailable}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default SchemaDefList;
