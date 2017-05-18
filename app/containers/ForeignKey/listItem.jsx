import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, ListGroupItem } from 'reactstrap';

import { ForeignKeyRelationList } from 'containers/ForeignKeyRelation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ForeignKeyActions } from 'actions';
import { ImprovedMoment } from 'components/Tools';
import Moment from 'react-moment';
import { ForeignKeyBase, ForeignKeyRelationBase } from 'PropTypes';
import { ForeignKeyRelationSelector } from 'selectors';
import Octicon from 'rdb-academy-octicon';

export class ForeignKeyListItem extends Component {
  static propTypes = {
    foreignKey: ForeignKeyBase.isRequired,
    foreignKeyRelationList: PropTypes.arrayOf(
      ForeignKeyRelationBase,
    ),
    readForeignKey: PropTypes.func.isRequired,
  }

  static defaultProps = {
    foreignKeyRelationList: null,
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }

  toggle() {
    if (!this.state.collapse && this.props.foreignKeyRelationList === null) {
      this.props.readForeignKey(this.props.foreignKey.id);
    }
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { foreignKey, foreignKeyRelationList } = this.props;
    return (
      <ListGroupItem
        tag="a"
        onClick={this.toggle}
        className="flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            <Octicon name="database" className="mr-2" />
            {foreignKey.name}
            <small className="ml-2">{foreignKey.foreignKeyRelationListSize} relations</small>
          </h5>
          <small className="text-muted">
            <ImprovedMoment position={'left'}>{foreignKey.modifiedAt}</ImprovedMoment>
          </small>
        </div>
        <div className="d-flex flex-column w-100">
          <Collapse isOpen={this.state.collapse} >
            {(foreignKeyRelationList !== null) ? (
              <ForeignKeyRelationList
                foreignKeyId={foreignKey.id}
                foreignKeyRelationList={foreignKeyRelationList}
              />
            ) : (
              <p className="mb-1">loading</p>
            )}
            <small>
              Created at:{' '}
              <Moment fromNow>{foreignKey.createdAt}</Moment>
            </small>
            <br />
            <small>
              Modified at:
              <Moment fromNow>{foreignKey.modifiedAt}</Moment>
            </small>
          </Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = (state, props) => ({
  foreignKeyRelationList: ForeignKeyRelationSelector.getList(state, props.foreignKey.id),
});

const mapDispatchToProps = dispatch => ({
  readForeignKey: bindActionCreators(ForeignKeyActions.read, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForeignKeyListItem);
