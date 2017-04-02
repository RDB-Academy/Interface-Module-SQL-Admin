import React, { Component, PropTypes } from 'react';
import { Card, CardFooter, CardHeader, Container, Collapse, Jumbotron, ListGroup } from 'reactstrap';

import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TableDefEntry, TableDefForm } from 'containers/TableDef';
import { SchemaDefActions, TableDefActions } from 'actions';
import { OcticonButton } from 'components/Tools';
import { SchemaDefExtended, TableDefBase } from 'PropTypes';
import { SchemaDefSelector, TableDefSelector } from 'selectors';

class SchemaDefView extends Component {
  static propTypes = {
    schemaDef: SchemaDefExtended,
    tableDefList: PropTypes.arrayOf(
      TableDefBase,
    ),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    createTableDef: PropTypes.func.isRequired,
    readSchemaDef: PropTypes.func.isRequired,
    deleteSchemaDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    schemaDef: null,
    tableDefList: null,
  }

  constructor(props) {
    super(props);

    const { schemaDef, match } = this.props;
    if (schemaDef === null || schemaDef.relations === undefined) {
      this.props.readSchemaDef(match.params.id);
    }

    this.state = { collapseTableDefForm: false };

    this.toggleTableDefForm = this.toggleTableDefForm.bind(this);

    this.submitTableDef = this.submitTableDef.bind(this);
    this.setAvailable = this.setAvailable.bind(this);
  }

  setAvailable(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  toggleTableDefForm() {
    this.setState({ collapseTableDefForm: !this.state.collapseTableDefForm });
  }

  submitTableDef(tableDefData) {
    const tableDef = tableDefData;
    tableDef.schemaDefId = this.props.schemaDef.id;

    this.props.createTableDef(tableDef);
    this.toggleTableDefForm();
  }

  render() {
    const { schemaDef, tableDefList } = this.props;
    if (schemaDef === null || tableDefList === null || schemaDef.relations === undefined) {
      return (
        <div>
          <Jumbotron>
            <Container>
              <h1>Loading</h1>
            </Container>
          </Jumbotron>
        </div>
      );
    }
    return (
      <div>
        <Helmet
          title={`#${schemaDef.id}-${schemaDef.name}`}
        />
        <Jumbotron>
          <Container>
            <div className="d-flex w-100 justify-content-between">
              <h1>#{schemaDef.id}-{schemaDef.name}</h1>
              <div className="d-flex">
                <OcticonButton
                  color="info"
                  onClick={() => this.props.readSchemaDef(this.props.match.params.id)}
                  octiconName="sync"
                >
                  Refresh
                </OcticonButton>
                <OcticonButton
                  color={schemaDef.available ? 'success' : 'danger'}
                  onClick={this.setAvailable}
                  octiconName="radio-tower"
                >
                  {schemaDef.available ? 'Publish' : 'Unpublish'}
                </OcticonButton>
                <OcticonButton
                  color="danger"
                  onClick={() => this.props.deleteSchemaDef(this.props.match.params.id)}
                  octiconName="x"
                >
                  Delete
                </OcticonButton>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Container>
          <Card>
            <CardHeader className="d-flex w-100 justify-content-between">
              Tables:
              <div className>
                <OcticonButton
                  size="sm"
                  color="success"
                  onClick={this.toggleTableDefForm}
                  octiconName="plus"
                >
                  Add
                </OcticonButton>
              </div>
            </CardHeader>
            <ListGroup className="list-group-flush">
              { tableDefList.map(tableDef => (
                <TableDefEntry key={tableDef.id} tableDef={tableDef} />
              ))}
            </ListGroup>
            <Collapse isOpen={this.state.collapseTableDefForm}>
              <CardFooter>
                <TableDefForm submitAction={this.submitTableDef} />
              </CardFooter>
            </Collapse>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const schemaDefId = parseInt(props.match.params.id, 10);
  return {
    schemaDef: SchemaDefSelector.getById(state, schemaDefId),
    tableDefList: TableDefSelector.getList(state, schemaDefId),
  };
};


const mapDispatchToProps = dispatch => ({
  readSchemaDef: bindActionCreators(SchemaDefActions.read, dispatch),
  deleteSchemaDef: bindActionCreators(SchemaDefActions.delete, dispatch),

  createTableDef: bindActionCreators(TableDefActions.create, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefView);
