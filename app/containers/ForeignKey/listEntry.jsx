import React, { Component, PropTypes } from 'react';
import { Card, Collapse, ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { TableDefActions } from 'actions';
import { ImprovedMoment } from 'components/Tools';
import Moment from 'react-moment';
import { ForeignKeyBase, ForeignKeyRelationBase } from 'PropTypes';
// import { ForeignKeyBaseSelector } from 'selectors';
import Octicon from 'react-octicon';

export class ForeignKeyListEntry extends Component {
  static propTypes = {
    foreignKey: ForeignKeyBase.isRequired,
    foreignKeyRelationList: PropTypes.arrayOf(
      ForeignKeyRelationBase,
    ),
    readForeignKey: PropTypes.func,
  }

  static defaultProps = {
    foreignKeyRelationList: null,
    readForeignKey: null,
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
      // this.props.readForeignKey(this.props.foreignKey.id);
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
              <Card>
                <ListGroup className="list-group-flush">
                  { foreignKeyRelationList.map(foreignKeyRelation => (
                    {/*
                    <ForeignKeyRelationListEntry
                      key={foreignKeyRelation.id}
                      foreignKeyRelation={foreignKeyRelation}
                    />
                    */}
                  ))}
                </ListGroup>
              </Card>
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
/*
const mapStateToProps = (state, props) => ({
  columnDefBaseList: ColumnDefSelector.getList(state, props.tableDef.id),
});

const mapDispatchToProps = dispatch => ({
  readTableDef: bindActionCreators(TableDefActions.read, dispatch),
});
*/
export default connect(null, null)(ForeignKeyListEntry);
