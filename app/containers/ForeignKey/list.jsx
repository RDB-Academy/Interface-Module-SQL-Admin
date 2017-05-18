import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardHeader, CardFooter, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import Octicon from 'react-octicon';
import { connect } from 'react-redux';

import { ForeignKeyBase } from 'PropTypes';
import { ForeignKeySelector } from 'selectors';
import { ForeignKeyForm, ForeignKeyListItem } from 'containers/ForeignKey';

class ForeignKeyList extends Component {
  static propTypes = {
    schemaDefId: PropTypes.number.isRequired,
    foreignKeyList: PropTypes.arrayOf(
      ForeignKeyBase,
    ),
    createForeignKey: PropTypes.func,
  }

  static defaultProps = {
    foreignKeyList: null,
    createForeignKey: null,
  }

  constructor(props) {
    super(props);

    this.state = { collapseForm: false };

    this.toggleForm = this.toggleForm.bind(this);
    this.submitForeignKey = this.submitForeignKey.bind(this);
  }

  toggleForm() {
    this.setState({ collapseForm: !this.state.collapseForm });
  }

  submitForeignKey(foreignKeyData) {
    const foreignKey = foreignKeyData;
    foreignKey.schemaDefId = this.props.schemaDefId;

    this.props.createForeignKey(foreignKey);
    this.toggleForm();
  }

  render() {
    const { foreignKeyList } = this.props;
    return (
      <Card className="mb-3">
        <CardHeader>
          ForeignKeys
        </CardHeader>
        <ListGroup className="list-group-flush">
          { foreignKeyList === null ? (
            <ListGroupItem>
              <div className="w-100 text-center">
                <Octicon name="sync" mega spin />
              </div>
            </ListGroupItem>
          ) : (
            <div>
              { foreignKeyList.map(foreignKey => (
                <ForeignKeyListItem key={foreignKey.id} foreignKey={foreignKey} />
              ))}
            </div>
          )}
          <Collapse isOpen={this.state.collapseForm}>
            <ForeignKeyForm
              onSubmit={this.submitForeignKey}
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
  foreignKeyList: ForeignKeySelector.getList(state, props.schemaDefId),
});

/*
const mapDispatchToProps = dispatch => ({

})
*/

export default connect(mapStateToProps, null)(ForeignKeyList);
