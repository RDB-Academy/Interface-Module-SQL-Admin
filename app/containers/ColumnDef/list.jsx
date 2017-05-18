import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardHeader, CardFooter, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import Octicon from 'react-octicon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ColumnDefActions } from 'actions';
import { ColumnDefSelector } from 'selectors';

import { ColumnDefBase } from 'PropTypes';

import { ColumnDefForm, ColumnDefListItem } from 'containers/ColumnDef';

class ColumnDefList extends Component {
  static propTypes = {
    tableDefId: PropTypes.number.isRequired,
    columnDefList: PropTypes.arrayOf(
      ColumnDefBase,
    ),
    createColumnDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    columnDefList: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      collapseForm: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.submitColumnDef = this.submitColumnDef.bind(this);
  }

  toggleForm() {
    this.setState({
      collapseForm: !this.state.collapseForm,
    });
  }

  submitColumnDef(columnDefData) {
    const columnDef = columnDefData;
    columnDef.schemaDefId = this.props.tableDefId;

    this.props.createColumnDef(columnDef);
    this.toggleForm();
  }

  render() {
    const { columnDefList } = this.props;
    return (
      <Card className="mb-3">
        <CardHeader className="d-flex w-100 justify-content-between">
          Tables:
        </CardHeader>
        <ListGroup className="list-group-flush">
          { columnDefList === null ? (
            <ListGroupItem>
              <div className="w-100 text-center">
                <Octicon name="sync" mega spin />
              </div>
            </ListGroupItem>
          ) : (
            <div>
              { columnDefList.map(columnDef => (
                <ColumnDefListItem
                  key={columnDef.id}
                  columnDef={columnDef}
                />
              ))}
            </div>
          )}
          <Collapse isOpen={this.state.collapseForm}>
            <ColumnDefForm
              onSubmit={this.submitColumnDef}
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
  columnDefList: ColumnDefSelector.getList(state, props.tableDefId),
});

const mapDispatchToProps = dispatch => ({
  createColumnDef: bindActionCreators(ColumnDefActions.create, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnDefList);
