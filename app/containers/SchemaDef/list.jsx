import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardFooter, CardHeader, Container, Collapse, Jumbotron, ListGroup } from 'reactstrap';
import Octicon from 'rdb-academy-octicon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SchemaDefActions } from 'actions';
import { SchemaDefForm, SchemaDefListItem } from 'containers/SchemaDef';
import { OcticonButton } from 'components/Tools';
import { SchemaDefSelector } from 'selectors';

/**
 * This class defines the default Container for displaying SchemaDef Objects in a list.
 *
 * @class SchemaDefList
 * @extends {Component}
 */
class SchemaDefList extends Component {
  static propTypes = {
    schemaDefIdList: PropTypes.arrayOf(
      PropTypes.number.isRequired,
    ).isRequired,
    createSchemaDef: PropTypes.func.isRequired,
    loadSchemaDefList: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      collapseForm: false,
    };

    this.props.loadSchemaDefList();

    this.submitSchemaDef = this.submitSchemaDef.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ collapseForm: !this.state.collapseForm });
  }

  submitSchemaDef(schemaDefData) {
    const schemaDef = schemaDefData;
    this.props.createSchemaDef(schemaDef);
  }

  render() {
    const { schemaDefIdList } = this.props;
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>SchemaDef List</h1>
          </Container>
        </Jumbotron>
        <Container>
          <Card>
            <CardHeader>
              Schema List
              <div style={{ float: 'right' }}>
                <OcticonButton
                  size="sm"
                  color="info"
                  onClick={this.props.loadSchemaDefList}
                  octiconName="sync"
                >
                  Reload
                </OcticonButton>
              </div>
            </CardHeader>

            <ListGroup className="list-group-flush">
              {(schemaDefIdList.length === 0) ? (
                <p>List is Empty</p>
              ) : (
                <div>
                  { schemaDefIdList.map(schemaDefId => (
                    <SchemaDefListItem
                      key={schemaDefId}
                      schemaDefId={schemaDefId}
                    />
                  ))}
                </div>
              )}
              <Collapse isOpen={this.state.collapseForm}>
                <SchemaDefForm
                  onSubmit={this.submitSchemaDef}
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
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schemaDefIdList: SchemaDefSelector.getList(state),
});

const mapDispatchToProps = dispatch => ({
  createSchemaDef: bindActionCreators(SchemaDefActions.create, dispatch),
  loadSchemaDefList: bindActionCreators(SchemaDefActions.readAll, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefList);
