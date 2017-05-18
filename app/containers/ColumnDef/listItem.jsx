import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Octicon from 'react-octicon';
import { OcticonButton } from 'components/Tools';

import { ColumnDefActions } from 'actions';
import { ColumnDefSelector } from 'selectors';
import { ColumnDefBase, ColumnDefExtended } from 'PropTypes';

class ColumnDefListItem extends Component {
  static propTypes = {
    columnDef: ColumnDefBase.isRequired,
    columnDefExtended: ColumnDefExtended,
    readColumnDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    columnDefExtended: null,
  }

  constructor(props) {
    super(props);

    if (this.props.columnDefExtended === null) {
      this.props.readColumnDef(this.props.columnDef.id);
    }
  }

  render() {
    const { columnDef, columnDefExtended } = this.props;
    if (columnDefExtended !== null) {
      return (
        <ListGroupItem className="w-100 d-flex justify-content-end">
          <div className="d-flex" style={{ width: '150px' }}>
            <Octicon name="dash" className="mr-2 align-self-center" />
            <p className="mb-1">{columnDef.name}</p>
          </div>
          <p className="mb-1 mr-auto align-self-center">{columnDefExtended.dataType}</p>
          <div className="d-flex align-self-center form-check form-check-inline">
            <label className="form-check-label align-self-center" htmlFor="isPrimaryKeyCheckBox">
              <input className="form-check-input" type="checkbox" id="isPrimaryKeyCheckBox" checked={columnDefExtended.isPrimaryKey} disabled />
              PrimaryKey
            </label>
            <label className="form-check-label ml-2 align-self-center" htmlFor="isNotNullCheckBox">
              <input className="form-check-input" type="checkbox" id="isNotNullCheckBox" checked={columnDefExtended.isNotNull} disabled />
              NotNull
            </label>
          </div>
          <p className="mb-1 ml-5 align-self-center" style={{ width: '200px' }}>{columnDefExtended.MetaValueSet}</p>
          <div>
            <OcticonButton size="sm" outline color="warning" octiconName="pencil" />
            <OcticonButton size="sm" outline color="danger" octiconName="x" />
          </div>
        </ListGroupItem>
      );
    }
    return (
      <ListGroupItem className="w-100 d-flex justify-content-between">
        <Octicon name="dash" className="mr-2" />
        <p className="mb-1 mr-4">{columnDef.name}</p>
        <p className="mb-1">loading</p>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = (state, props) => ({
  columnDefExtended: ColumnDefSelector.byId(state, props.columnDef.id),
});

const mapDispatchToProps = dispatch => ({
  readColumnDef: bindActionCreators(ColumnDefActions.read, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnDefListItem);
