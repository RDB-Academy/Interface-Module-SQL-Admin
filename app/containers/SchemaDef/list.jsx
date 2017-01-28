import React, { Component } from 'react';
import { Button, Card, CardFooter, Container, Col, Input, Jumbotron, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import Octicon from 'react-octicon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadSchemaDefList } from 'actions/schemaDefActions';
import { SchemaDefList } from 'components/SchemaDef';
import { SchemaDefBase } from 'PropTypes';
import { getSchemaDefList } from 'store/schemaDefSelector';

class SchemaDefListContainer extends Component {
  static propTypes = {
    schemaDefList: React.PropTypes.arrayOf(
      SchemaDefBase.isRequired,
    ).isRequired,
    loadSchemaDefList: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      schemaDef: {
        name: '',
      },
    };

    const { schemaDefList } = this.props;
    if (schemaDefList === undefined || schemaDefList.length === 0) {
      this.props.loadSchemaDefList();
    }

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.createNewSchema = this.createNewSchema.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  createNewSchema() {
    this.toggleCreateModal();
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
    const { schemaDefList } = this.props;
    return (
      <div>
        <Jumbotron>
          <Container>
            <div className="d-flex w-100 justify-content-between">
              <h1>SchemaDef List</h1>
              <div className="d-flex">
                <Button color="success" onClick={this.toggleCreateModal}>
                  <Octicon name="plus" /> New
                </Button>
                <Button color="info" onClick={this.props.loadSchemaDefList}>
                  <Octicon name="sync" /> Reload
                </Button>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Container>
          <Card>
            <SchemaDefList
              schemaDefList={schemaDefList}
            />
            <CardFooter>
              Count: {schemaDefList.length}{' '}{this.state.schemaDef.name}
            </CardFooter>
          </Card>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggleCreateModal} style={{ marginTop: '200px' }}>
          <ModalHeader toggle={this.toggleCreateModal}>
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
            <Button color="secondary" onClick={this.toggleCreateModal}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.createNewSchema}>Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schemaDefList: getSchemaDefList(state),
});

const mapDispatchToProps = dispatch => ({
  loadSchemaDefList: bindActionCreators(loadSchemaDefList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefListContainer);
