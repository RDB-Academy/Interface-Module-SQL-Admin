import React, { Component, PropTypes } from 'react';
import { ListGroup } from 'reactstrap';

import { SchemaDefBase } from 'PropTypes';

import SchemaDefListEntry from './list-entry';

class SchemaDefList extends Component {
  static propTypes = {
    schemaDefList: PropTypes.arrayOf(
      SchemaDefBase.isRequired,
    ).isRequired,
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
    const { schemaDefList } = this.props;

    if (schemaDefList.length === 0) {
      return (
        <p>List is Empty</p>
      );
    }
    return (
      <div>
        <ListGroup className="list-group-flush">
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
