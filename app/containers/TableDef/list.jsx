import React, { Component, PropTypes } from 'react';
import { Button, Card, CardHeader, CardFooter, Collapse, ListGroup } from 'reactstrap';
import Octicon from 'react-octicon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TableDefActions } from 'actions';
import { TableDefSelector } from 'selectors';

import { TableDefBase, SchemaDefBase } from 'PropTypes';

import { TableDefForm, TableDefListEntry } from 'containers/TableDef';

class TableDefList extends Component {
  static propTypes = {
    schemaDef: SchemaDefBase.isRequired,
    tableDefList: PropTypes.arrayOf(
      TableDefBase,
    ),
    createTableDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    tableDefList: null,
  }

  constructor(props) {
    super(props);

    this.state = { collapseForm: false };

    this.toggleForm = this.toggleForm.bind(this);
    this.submitTableDef = this.submitTableDef.bind(this);
  }

  toggleForm() {
    this.setState({ collapseForm: !this.state.collapseForm });
  }

  submitTableDef(tableDefData) {
    const tableDef = tableDefData;
    tableDef.schemaDefId = this.props.schemaDef.id;

    this.props.createTableDef(tableDef);
    this.toggleForm();
  }

  render() {
    const { tableDefList } = this.props;
    if (tableDefList === null) {
      return (
        <Octicon name="sync" mega spin />
      );
    }
    return (
      <Card>
        <CardHeader className="d-flex w-100 justify-content-between">
          Tables:
        </CardHeader>
        <ListGroup className="list-group-flush">
          { tableDefList.map(tableDef => (
            <TableDefListEntry key={tableDef.id} tableDef={tableDef} />
          ))}
          <Collapse isOpen={this.state.collapseForm}>
            <TableDefForm
              onSubmit={this.submitTableDef}
              toggleAction={this.toggleForm}
            />
          </Collapse>
        </ListGroup>
        <CardFooter className="p-0">
          <Button
            className="border-0 rounded-bottom"
            color={this.state.collapseForm ? ('warning') : ('success')}
            block
            style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}
            onClick={this.toggleForm}
          >
            <Octicon name={this.state.collapseForm ? ('x') : ('plus')} mega />
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tableDefList: TableDefSelector.getList(state, props.schemaDef.id),
});


const mapDispatchToProps = dispatch => ({
  createTableDef: bindActionCreators(TableDefActions.create, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDefList);
