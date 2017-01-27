import React, { Component, PropTypes } from 'react';
import Octicon from 'react-octicon';
import Link from 'react-router/Link';
import { Button, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

import { ImprovedMoment } from 'components/Tools';
import { SchemaDefMin } from 'PropTypes';

class SchemaDefEntry extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: true,
    };
  }

  toggle() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const { schemaDef } = this.props;
    const { collapse } = this.state;

    return (
      <ListGroupItem key={schemaDef.id} className="schemadef-list-entry">
        <div className="container" onClick={this.toggle}>
          <div className="d-flex w-100 justify-content-between">
            <h5>
              <Link to={`/schemaDef/${schemaDef.id}`}>
                #{schemaDef.id} - {schemaDef.name}
              </Link>
            </h5>
            <small>
              <Button hidden={!collapse}>
                <Octicon name="circle-slash" />
              </Button>
              <Button hidden={!collapse}>
                <Octicon name="pencil" />
              </Button>
              <Button hidden={!collapse}>
                <Octicon name="x" />
              </Button>
              <Button>
                <Octicon name={collapse ? 'chevron-down' : 'chevron-up'} />
              </Button>
            </small>
          </div>
          <ListGroupItemText hidden={collapse}>
            test
          </ListGroupItemText>
        </div>
        <div className="schemadef-list-entry-footer" hidden={collapse}>
          <Button className={`reaction ${(schemaDef.reactions.self === '+1') ? 'voted' : ''}`}>
            <Octicon name="thumbsup" />
          </Button>
          <Button className={`reaction ${(schemaDef.reactions.self === '-1') ? 'voted' : ''}`}>
            <Octicon name="thumbsdown" />
          </Button>
          <Button>
            <Octicon name="circle-slash" />
          </Button>
          <Button>
            <Octicon name="pencil" />
          </Button>
          <Button>
            <Octicon name="x" />
          </Button>
        </div>
      </ListGroupItem>
    );
  }
}

/*
<div>
  <Link to={`/schemaDef/${schemaDef.id}`}>
    <p>{schemaDef.id}</p>
    { schemaDef.name }
  </Link>
  <ImprovedMoment>{schemaDef.createdAt}</ImprovedMoment>
  <ImprovedMoment>{schemaDef.modifiedAt}</ImprovedMoment>
</div>
<div>
  <Button size="sm" outline color="warning">
    <Link to={`/schemaDef/${schemaDef.id}`} style={{ color: 'inherit', cursor: 'default' }}>
      <Octicon name="pencil" />
    </Link>
  </Button>
  <Button size="sm" outline color="danger" onClick={() => { console.log(schemaDef.id); }}>
    <Octicon name="x" />
  </Button>
</div>*/

SchemaDefEntry.propTypes = {
  schemaDef: SchemaDefMin.isRequired,
};

const SchemaDefList = ({ schemaDefList, loadSchemaDefList }) => {
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
          <SchemaDefEntry key={schemaDef.id} schemaDef={schemaDef} />
        ))}
      </ListGroup>
    </div>
  );
};

SchemaDefList.propTypes = {
  schemaDefList: PropTypes.arrayOf(
    SchemaDefMin.isRequired,
  ).isRequired,
  loadSchemaDefList: PropTypes.func.isRequired,
};

export default SchemaDefList;
