import React, { Component, PropTypes } from 'react';
import { Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createSchemaDef } from 'actions/schemaDefActions';

class CreateSchemaDefModal extends Component {
  static propTypes = {
    createSchemaDef: PropTypes.func.isRequired,

    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      schemaDef: {
        name: '',
      },
    };

    this.createNewSchema = this.createNewSchema.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  createNewSchema() {
    this.props.toggle();
    this.props.createSchemaDef(this.state.schemaDef);

    this.setState({
      schemaDef: {
        name: '',
      },
    });
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, id } = target;
    const { schemaDef } = this.state;

    schemaDef[id] = value;

    this.setState({
      schemaDef,
    });
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} style={{ marginTop: '200px' }}>
        <ModalHeader toggle={this.props.toggle}>
          Create New Schema
        </ModalHeader>
        <ModalBody>
          <Row>
            <Label sm={2} for="name">Name:</Label>
            <Col sm={10}>
              <Input
                type="text"
                id="name"
                placeholder="FancySchema"
                value={this.state.schemaDef.name}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>{' '}
          <Button color="primary" onClick={this.createNewSchema}>Save changes</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createSchemaDef: bindActionCreators(createSchemaDef, dispatch),
});

export default connect(null, mapDispatchToProps)(CreateSchemaDefModal);
