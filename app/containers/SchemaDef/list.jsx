import React, { Component, PropTypes } from 'react';
import { Button, Card, CardFooter, Container, Jumbotron } from 'reactstrap';

import Octicon from 'react-octicon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadSchemaDefList, updateSchemaDef, deleteSchemaDef } from 'actions/schemaDefActions';
import { SchemaDefList } from 'components/SchemaDef';
import { SchemaDefBase } from 'PropTypes';
import { getSchemaDefList } from 'store/schemaDefSelector';

import CreateSchemaDefModal from './create';

class SchemaDefListContainer extends Component {
  static propTypes = {
    schemaDefList: React.PropTypes.arrayOf(
      SchemaDefBase.isRequired,
    ).isRequired,
    updateSchemaDef: PropTypes.func.isRequired,
    loadSchemaDefList: PropTypes.func.isRequired,
    deleteSchemaDef: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    const { schemaDefList } = this.props;
    if (schemaDefList === undefined || schemaDefList.length === 0) {
      this.props.loadSchemaDefList();
    }

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.deleteSchemaDef = this.deleteSchemaDef.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  deleteSchemaDef(id) {
    this.props.deleteSchemaDef(id);
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
              deleteSchemaDef={this.deleteSchemaDef}
              updateAvailable={this.props.updateSchemaDef}
            />
            <CardFooter>
              Count: {schemaDefList.length}
            </CardFooter>
          </Card>
        </Container>
        <CreateSchemaDefModal
          isOpen={this.state.modal}
          toggle={this.toggleCreateModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schemaDefList: getSchemaDefList(state),
});

const mapDispatchToProps = dispatch => ({
  loadSchemaDefList: bindActionCreators(loadSchemaDefList, dispatch),
  updateSchemaDef: bindActionCreators(updateSchemaDef, dispatch),
  deleteSchemaDef: bindActionCreators(deleteSchemaDef, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefListContainer);
