import React, { Component, PropTypes } from 'react';
import { Badge, ListGroupItem, ListGroupItemText } from 'reactstrap';

import Link from 'react-router-dom/Link';

import { ImprovedMoment, OcticonButton } from 'components/Tools';
import { SchemaDefBase } from 'PropTypes';

class SchemaDefListEntry extends Component {
  static propTypes = {
    schemaDef: SchemaDefBase.isRequired,
    updateAvailable: PropTypes.func.isRequired,
    deleteSchemaDef: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.setAvailable = this.setAvailable.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {
      collapse: true,
    };
  }

  setAvailable(event) {
    event.preventDefault();
    event.stopPropagation();

    const schemaDef = {
      available: !this.props.schemaDef.available,
    };

    this.props.updateAvailable(this.props.schemaDef.id, schemaDef);
  }

  toggleCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  delete(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.deleteSchemaDef(this.props.schemaDef.id);
  }

  render() {
    const { schemaDef } = this.props;
    const { collapse } = this.state;

    const renderAvailable = () => (
      <OcticonButton outline color={schemaDef.available ? 'success' : 'danger'} onClick={this.setAvailable} octiconName="eye" />
    );

    const renderDelete = () => (
      <OcticonButton outline color="danger" onClick={this.delete} octiconName="x" />
    );

    return (
      <ListGroupItem key={schemaDef.id} className="schemadef-list-entry">
        <div className="container" onClick={this.toggleCollapse}>
          <div className="list-header d-flex w-100 justify-content-between">
            <h5>
              <Link to={`/schema-defs/${schemaDef.id}`}>
                #{schemaDef.id} - {schemaDef.name}
              </Link>
            </h5>
            <small>
              <Badge color="info">{schemaDef.available ? 'public' : 'private'}</Badge>
              { collapse && renderAvailable() }
              { collapse && renderDelete() }
              <OcticonButton octiconName={collapse ? 'chevron-down' : 'chevron-up'} />
            </small>
          </div>
          <ListGroupItemText tag="div" hidden={collapse}>
            <div className="field"><p>Created At:</p>{' '}<ImprovedMoment>{schemaDef.createdAt}</ImprovedMoment></div>
            <div className="field"><p>Modified At:</p>{' '}<ImprovedMoment>{schemaDef.modifiedAt}</ImprovedMoment></div>
          </ListGroupItemText>
        </div>
        <div className="schemadef-list-entry-footer" hidden={collapse}>
          { renderAvailable() }
          { renderDelete() }
        </div>
      </ListGroupItem>
    );
  }
}

export default SchemaDefListEntry;
