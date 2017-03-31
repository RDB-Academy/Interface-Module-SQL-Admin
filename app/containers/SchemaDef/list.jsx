import React, { Component, PropTypes } from 'react';
import { Card, CardFooter, CardHeader, Container, Collapse, Jumbotron } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SchemaDefActions } from 'actions';
import { SchemaDefList } from 'components/SchemaDef';
import { SchemaDefForm } from 'containers/SchemaDef';
import { OcticonButton } from 'components/Tools';
import { SchemaDefBase } from 'PropTypes';
import { getSchemaDefList } from 'store/schemaDefSelector';

class SchemaDefListContainer extends Component {
  static propTypes = {
    schemaDefList: React.PropTypes.arrayOf(
      SchemaDefBase.isRequired,
    ).isRequired,
    createSchemaDef: PropTypes.func.isRequired,
    updateSchemaDef: PropTypes.func.isRequired,
    loadSchemaDefList: PropTypes.func.isRequired,
    deleteSchemaDef: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      collapseSchemaDefForm: false,
    };

    const { schemaDefList } = this.props;
    if (schemaDefList === undefined || schemaDefList.length === 0) {
      this.props.loadSchemaDefList();
    }

    this.deleteSchemaDef = this.deleteSchemaDef.bind(this);
    this.toggleSchemaDefForm = this.toggleSchemaDefForm.bind(this);
    this.submitSchemaDef = this.submitSchemaDef.bind(this);
  }

  toggleSchemaDefForm() {
    this.setState({ collapseSchemaDefForm: !this.state.collapseSchemaDefForm });
  }

  submitSchemaDef(schemaDefData) {
    const schemaDef = schemaDefData;

    this.props.createSchemaDef(schemaDef);
    this.toggleSchemaDefForm();
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
            </div>
          </Container>
        </Jumbotron>
        <Container>
          <Card>
            <CardHeader>
              Schemas:
              <div style={{ float: 'right' }}>
                <OcticonButton
                  size="sm"
                  color="success"
                  onClick={this.toggleSchemaDefForm}
                  octiconName="plus"
                >
                  Add
                </OcticonButton>
                <OcticonButton
                  size="sm"
                  color="info"
                  onClick={this.props.loadSchemaDefList}
                  octiconName="sync"
                >
                  Reload
                </OcticonButton>
              </div>
            </CardHeader>
            <SchemaDefList
              schemaDefList={schemaDefList}
              deleteSchemaDef={this.deleteSchemaDef}
              updateAvailable={this.props.updateSchemaDef}
            />
            <Collapse isOpen={this.state.collapseSchemaDefForm}>
              <CardFooter>
                <SchemaDefForm submitAction={this.submitSchemaDef} />
              </CardFooter>
            </Collapse>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schemaDefList: getSchemaDefList(state),
});

const mapDispatchToProps = dispatch => ({
  createSchemaDef: bindActionCreators(SchemaDefActions.create, dispatch),
  loadSchemaDefList: bindActionCreators(SchemaDefActions.readAll, dispatch),
  updateSchemaDef: bindActionCreators(SchemaDefActions.update, dispatch),
  deleteSchemaDef: bindActionCreators(SchemaDefActions.delete, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefListContainer);
