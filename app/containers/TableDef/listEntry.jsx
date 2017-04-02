import React, { Component, PropTypes } from 'react';
import { Collapse, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TableDefActions } from 'actions';
import { ImprovedMoment } from 'components/Tools';
import { TableDefBase, ColumnDefBase } from 'PropTypes';
import { ColumnDefSelector } from 'selectors';


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
    console.log(columnDefBaseList);
    return (
      <ListGroupItem tag="a" onClick={this.toggle} className="flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">#{tableDef.id}-{tableDef.name}</h5>
          <small className="text-muted">
            <ImprovedMoment position={'left'}>{tableDef.modifiedAt}</ImprovedMoment>
          </small>
        </div>
        <div className="d-flex flex-column w-100">
          <Collapse isOpen={this.state.collapse} >
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <p>Ich bin ein Block</p>
            <small>Donec id elit non mi porta.</small>
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
