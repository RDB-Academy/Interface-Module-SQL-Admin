import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardHeader, CardFooter, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import Octicon from 'rdb-academy-octicon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TableDefActions } from 'actions';
import { TableDefSelector } from 'selectors';

import { TableDefBase } from 'PropTypes';

import { TableDefForm, TableDefListItem } from 'containers/TableDef';

class TableDefList extends Component {
  static propTypes = {
    schemaDefId: PropTypes.number.isRequired,
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

  submitTableDef(tableDef) {
    const { schemaDefId } = this.props;

    this.props.createTableDef(schemaDefId, tableDef);
    this.toggleForm();
  }

  render() {
    const { tableDefList } = this.props;
    return (
      <Card className="mb-3">
        <CardHeader className="d-flex w-100 justify-content-between">
          Tables:
        </CardHeader>
        <ListGroup className="list-group-flush">
          { tableDefList === null ? (
            <ListGroupItem>
              <div className="w-100 text-center">
                <Octicon name="sync" mega spin />
              </div>
            </ListGroupItem>
          ) : (
            <div>
              { tableDefList.map(tableDef => (
                <TableDefListItem
                  key={tableDef.id}
                  tableDef={tableDef}
                />
              ))}
            </div>
          )}
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
  tableDefList: TableDefSelector.getList(state, props.schemaDefId),
});


const mapDispatchToProps = dispatch => ({
  createTableDef: bindActionCreators(TableDefActions.create, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDefList);
