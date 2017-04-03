import React, { Component, PropTypes } from 'react';
import { Card, Collapse, ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TableDefActions } from 'actions';
import { ImprovedMoment } from 'components/Tools';
import Moment from 'react-moment';
import { TableDefBase, ColumnDefBase } from 'PropTypes';
import { ColumnDefSelector } from 'selectors';
import Octicon from 'react-octicon';


export class TableDefEntry extends Component {
  static propTypes = {
    tableDef: TableDefBase.isRequired,
    columnDefBaseList: PropTypes.arrayOf(
      ColumnDefBase,
    ),
    readTableDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    columnDefBaseList: null,
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }

  toggle() {
    if (!this.state.collapse && this.props.columnDefBaseList === null) {
      this.props.readTableDef(this.props.tableDef.id);
    }
    this.setState({ collapse: !this.state.collapse });
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
                  { columnDefBaseList.map(columnDefBase => (
                    <ListGroupItem key={columnDefBase.id}>
                      <p className="mb-1">{columnDefBase.name}</p>
                    </ListGroupItem>
                  ))}
                </ListGroup>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDefEntry);
