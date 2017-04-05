import React, { Component, PropTypes } from 'react';
import { Button, Card, CardFooter, Collapse, ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ColumnDefActions, TableDefActions } from 'actions';
import { ImprovedMoment } from 'components/Tools';
import Moment from 'react-moment';
import { TableDefBase, ColumnDefBase } from 'PropTypes';
import { ColumnDefSelector } from 'selectors';
import Octicon from 'react-octicon';
import ColumnDefListEntry from 'containers/ColumnDef/listEntry';

import ColumnDefForm from 'containers/ColumnDef/createForm';

export class TableDefEntry extends Component {
  static propTypes = {
    tableDef: TableDefBase.isRequired,
    columnDefBaseList: PropTypes.arrayOf(
      ColumnDefBase,
    ),
    readTableDef: PropTypes.func.isRequired,
    createColumnDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    columnDefBaseList: null,
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.state = {
      collapse: false,
      collapseForm: false,
    };
  }

  toggle(event) {
    event.stopPropagation();
    if (!this.state.collapse && this.props.columnDefBaseList === null) {
      this.props.readTableDef(this.props.tableDef.id);
    }
    this.setState({ collapse: !this.state.collapse });
  }

  toggleForm(event) {
    event.stopPropagation();

    this.setState({ collapseForm: !this.state.collapseForm });
  }

  submitColumnDef(columnDefData) {
    const columnDef = columnDefData;

    this.props.createColumnDef(columnDef);
  }

  render() {
    const { tableDef, columnDefBaseList } = this.props;
    return (
      <ListGroupItem
        tag="a"
        onClick={this.toggle}
        className="flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            <Octicon name="database" className="mr-2" />
            {tableDef.name}
            <small className="ml-2">{tableDef.columnDefListSize} columns</small>
          </h5>
          <small className="text-muted">
            <ImprovedMoment position={'left'}>{tableDef.modifiedAt}</ImprovedMoment>
          </small>
        </div>
        <div className="d-flex flex-column w-100">
          <Collapse isOpen={this.state.collapse} >
            {(columnDefBaseList !== null) ? (
              <Card>
                <ListGroup className="list-group-flush">
                  { columnDefBaseList.map(columnDef => (
                    <ColumnDefListEntry key={columnDef.id} columnDef={columnDef} />
                  ))}
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
            ) : (
              <p className="mb-1">loading</p>
            )}
            <small>
              Created at:{' '}
              <Moment fromNow>{tableDef.createdAt}</Moment>
            </small>
            <br />
            <small>
              Modified at:
              <Moment fromNow>{tableDef.modifiedAt}</Moment>
            </small>
          </Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = (state, props) => ({
  columnDefBaseList: ColumnDefSelector.getList(state, props.tableDef.id),
});

const mapDispatchToProps = dispatch => ({
  readTableDef: bindActionCreators(TableDefActions.read, dispatch),
  createColumnDef: bindActionCreators(ColumnDefActions.create, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDefEntry);
