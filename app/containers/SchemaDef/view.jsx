import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card, CardBlock, CardHeader, Container, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

import { loadSchemaDef } from 'actions/schemaDefActions';
import { SchemaDefBase } from 'PropTypes';
import { getSchemaDefById } from 'store/schemaDefSelector';

class SchemaDefView extends Component {
  static propTypes = {
    schemaDef: SchemaDefBase,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    loadSchemaDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    schemaDef: null,
  }

  constructor(props) {
    super(props);

    const { schemaDef, params } = this.props;
    if (schemaDef === null) {
      this.props.loadSchemaDef(params.id);
    }
  }

  render() {
    const { schemaDef } = this.props;
    if (schemaDef === null) {
      return (
        <div>
          <Jumbotron>
            <div className="container">
              <h1>Loading</h1>
            </div>
          </Jumbotron>
        </div>
      );
    }
    return (
      <div>
        <Helmet
          title={`#${schemaDef.id}-${schemaDef.name}`}
        />
        <Jumbotron>
          <Container>
            <h1>#{schemaDef.id}-{schemaDef.name}</h1>
          </Container>
        </Jumbotron>
        <Container>
          <Card>
            <CardBlock>
              <p>asjdkl</p>
              <Card>
                <CardHeader>
                  Tables:
                </CardHeader>
                <ListGroup className="list-group-flush">
                  { schemaDef.relations.tableDefList.map(tableDef => (
                    <ListGroupItem key={tableDef.name}>
                      #{tableDef.id}-{tableDef.name}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </CardBlock>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  schemaDef: getSchemaDefById(state, parseInt(props.params.id, 10)),
});


const mapDispatchToProps = dispatch => ({
  loadSchemaDef: bindActionCreators(loadSchemaDef, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefView);
