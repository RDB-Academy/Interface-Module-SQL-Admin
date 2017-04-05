import React, { Component, PropTypes } from 'react';
import { Collapse, ListGroupItem } from 'reactstrap';
import Octicon from 'react-octicon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TableDefActions } from 'actions';
import { TableDefSelector } from 'selectors';
import { ImprovedMoment } from 'components/Tools';
import Moment from 'react-moment';
import { TableDefBase, TableDefExtended } from 'PropTypes';
import { ColumnDefList } from 'containers/ColumnDef';

export class TableDefItem extends Component {
  static propTypes = {
    tableDef: TableDefBase.isRequired,
    tableDefExtended: TableDefExtended,
    readTableDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    tableDefExtended: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    const { collapse } = this.state;
    event.preventDefault();
    event.stopPropagation();

    if (!collapse) {
      const { tableDef, tableDefExtended, readTableDef } = this.props;
      if (tableDefExtended === null) {
        readTableDef(tableDef.id);
      }
    }

    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const { tableDef, tableDefExtended } = this.props;
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
            { tableDefExtended !== null ? (
              <ColumnDefList
                tableDefId={tableDef.id}
              />
            ) : (
              <p>Loading </p>
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
  tableDefExtended: TableDefSelector.byId(state, props.tableDef.id),
});

const mapDispatchToProps = dispatch => ({
  readTableDef: bindActionCreators(TableDefActions.read, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDefItem);
