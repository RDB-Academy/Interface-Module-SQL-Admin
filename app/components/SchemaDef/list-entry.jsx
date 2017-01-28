import React, { Component, PropTypes } from 'react';
import Octicon from 'react-octicon';
import Link from 'react-router/Link';

import { Button, ListGroupItem, ListGroupItemText } from 'reactstrap';
import { ImprovedMoment } from 'components/Tools';

import { SchemaDefBase } from 'PropTypes';

class SchemaDefListEntry extends Component {
  static propTypes = {
    schemaDef: SchemaDefBase.isRequired,
    toggleAvailable: PropTypes.func.isRequired,
  };

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

    const renderAvailable = () => (
      <Button
        outline
        color={schemaDef.available ? 'success' : 'danger'}
        onClick={(e) => { this.props.toggleAvailable(e, schemaDef.id); }}
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
      <Button outline color="danger">
        <Octicon name="x" />
      </Button>
    );

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
