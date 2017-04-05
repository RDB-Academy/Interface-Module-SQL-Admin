import React, { Component, PropTypes } from 'react';
import { Button, Card, CardFooter, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import { ForeignKeyRelationForm, ForeignKeyRelationListItem } from 'containers/ForeignKeyRelation';
import Octicon from 'react-octicon';
import { ForeignKeyBase, ForeignKeyRelationBase } from 'PropTypes';

class ForeignKeyRelationList extends Component {
  static propTypes = {
    foreignKey: ForeignKeyBase.isRequired,
    foreignKeyRelationList: PropTypes.arrayOf(
      ForeignKeyRelationBase,
    ).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { collapseForm: false };

    this.toggleForm = this.toggleForm.bind(this);
    this.submitForeignKey = this.submitForeignKey.bind(this);
  }

  toggleForm(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ collapseForm: !this.state.collapseForm });
  }

  submitForeignKey(foreignKeyRelationData) {
    console.log(foreignKeyRelationData);
    console.log(this.props.foreignKey);
    // this.props.createForeignKeyRelation(foreignKeyRelationData, this.props.foreignKey.id);
    this.toggleForm();
  }

  render() {
    const { foreignKeyRelationList } = this.props;
    return (
      <Card>
        <ListGroup className="list-group-flush">
          { foreignKeyRelationList === null ? (
            <ListGroupItem>
              <div className="w-100 text-center">
                <Octicon name="sync" mega spin />
              </div>
            </ListGroupItem>
          ) : (
            <div>
              { foreignKeyRelationList.map(foreignKeyRelation => (
                <ForeignKeyRelationListItem
                  key={foreignKeyRelation.id}
                  foreignKeyRelation={foreignKeyRelation}
                />
              ))}
            </div>
          )}
          <Collapse isOpen={this.state.collapseForm}>
            <ForeignKeyRelationForm
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

export default ForeignKeyRelationList;