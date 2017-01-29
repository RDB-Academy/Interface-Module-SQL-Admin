import React, { Component, PropTypes } from 'react';
import Octicon from 'react-octicon';
import Link from 'react-router/Link';

import { Button, ListGroupItem, ListGroupItemText } from 'reactstrap';
import { ImprovedMoment } from 'components/Tools';

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
      available: !this.props.schemaDef.active,
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
      <Button
        outline
        color={!schemaDef.active ? 'success' : 'danger'}
        onClick={this.setAvailable}
      >
        <Octicon name="radio-tower" />
      </Button>
    );

    const renderEdit = () => (
      <Button outline color="warning">
        <Octicon name="pencil" />
      </Button>
    );

    const renderDelete = () => (
      <Button outline color="danger" onClick={this.delete}>
        <Octicon name="x" />
      </Button>
    );

    return (
      <ListGroupItem key={schemaDef.id} className="schemadef-list-entry">
        <div className="container" onClick={this.toggleCollapse}>
          <div className="d-flex w-100 justify-content-between">
            <h5>
              <Link to={`/schema-defs/${schemaDef.id}`}>
                #{schemaDef.id} - {schemaDef.name}
              </Link>
            </h5>
            <small>
              { collapse && renderAvailable() }
              { collapse && renderEdit() }
              { collapse && renderDelete() }
              <Button>
                <Octicon name={collapse ? 'chevron-down' : 'chevron-up'} />
              </Button>
            </small>
          </div>
          <ListGroupItemText tag="div" hidden={collapse}>
            <div className="field"><p>Created At :</p> <ImprovedMoment>{schemaDef.createdAt}</ImprovedMoment></div>
            <div className="field"><p>Modified At:</p> <ImprovedMoment>{schemaDef.modifiedAt}</ImprovedMoment></div>
          </ListGroupItemText>
        </div>
        <div className="schemadef-list-entry-footer" hidden={collapse}>
          <Button className={`reaction ${(schemaDef.reactions.self === '+1') ? 'voted' : ''}`}>
            <Octicon name="thumbsup" />{schemaDef.reactions['+1']}
          </Button>
          <Button className={`reaction ${(schemaDef.reactions.self === '-1') ? 'voted' : ''}`}>
            <Octicon name="thumbsdown" />{schemaDef.reactions['-1']}
          </Button>
          { renderAvailable() }
          { renderEdit() }
          { renderDelete() }
        </div>
      </ListGroupItem>
    );
  }
}

export default SchemaDefListEntry;
