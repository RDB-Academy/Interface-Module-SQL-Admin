import React, { Component, PropTypes } from 'react';
import { Card, CardBlock, CardHeader, Container, Collapse, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TableDefEntry from 'containers/TableDef/listEntry';
import { loadSchemaDef } from 'actions/schemaDefActions';
import { OcticonButton } from 'components/Tools';
import { SchemaDefExtended } from 'PropTypes';
import { getSchemaDefById } from 'store/schemaDefSelector';

class TableDefForm extends Component {
  static propTypes = {
    submitAction: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { name: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const tableDef = {
      name: this.state.name.trim(),
    };

    this.props.submitAction(tableDef);

    this.setState({
      name: '',
    });
  }

  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({ name: event.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <ListGroupItem>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="table name" value={name} onChange={this.handleChange} />
          <OcticonButton color="success" size="sm" octiconName="plus">Add</OcticonButton>
        </form>
      </ListGroupItem>
    );
  }
}

class SchemaDefView extends Component {
  static propTypes = {
    schemaDef: SchemaDefExtended,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    loadSchemaDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    schemaDef: null,
  }

  constructor(props) {
    super(props);

    const { schemaDef, match } = this.props;
    if (schemaDef === null || schemaDef.relations === undefined) {
      this.props.loadSchemaDef(match.params.id);
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

  submitTableDef(tableDef) {
    console.log(tableDef);
    console.log("test");

    this.toggleTableDefForm();
  }

  render() {
    const { schemaDef } = this.props;

    if (schemaDef === null || schemaDef.relations === undefined) {
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
                  onClick={() => this.props.loadSchemaDef(this.props.match.params.id)}
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
                  onClick={() => { console.log('delete'); }}
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
            <CardBlock>
              <Card>
                <CardHeader>
                  Tables:
                  <div style={{ float: 'right' }}>
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
                  { schemaDef.relations.tableDefList.map(tableDef => (
                    <TableDefEntry key={tableDef.id} tableDef={tableDef} />
                  ))}
                  <Collapse isOpen={this.state.collapseTableDefForm}>
                    <TableDefForm submitAction={this.submitTableDef} />
                  </Collapse>
                </ListGroup>
              </Card>
            </CardBlock>
          </Card>
        </Container>
      </div>
    );
  }
}

/*
<ListGroupItem key={tableDef.name}>
  <Link to={`/table-defs/${tableDef.id}`}>
    #{tableDef.id}-{tableDef.name}
  </Link>
</ListGroupItem>
*/

const mapStateToProps = (state, props) => ({
  schemaDef: getSchemaDefById(state, parseInt(props.match.params.id, 10)),
});


const mapDispatchToProps = dispatch => ({
  loadSchemaDef: bindActionCreators(loadSchemaDef, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefView);
