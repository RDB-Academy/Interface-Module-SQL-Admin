import React, { Component, PropTypes } from 'react';
import { Button, Card, CardBlock, CardHeader, Container, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

import Helmet from 'react-helmet';
import Octicon from 'react-octicon';
import { connect } from 'react-redux';
import Link from 'react-router/Link';
import { bindActionCreators } from 'redux';

import { loadSchemaDef } from 'actions/schemaDefActions';
import { SchemaDefAvailableButton } from 'components/SchemaDef';
import { SchemaDefExtended } from 'PropTypes';
import { getSchemaDefById } from 'store/schemaDefSelector';

class SchemaDefView extends Component {
  static propTypes = {
    schemaDef: SchemaDefExtended,
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
    if (schemaDef === null || schemaDef.relations === undefined) {
      this.props.loadSchemaDef(params.id);
    }

    this.setAvailable = this.setAvailable.bind(this);
  }

  setAvailable(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    const { schemaDef } = this.props;

    if (schemaDef === null || schemaDef.relations === undefined) {
      return (
        <div>
          <Jumbotron>
            <Container>
              <h1>Loading</h1>
            </Container>
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
            <div className="d-flex w-100 justify-content-between">
              <h1>#{schemaDef.id}-{schemaDef.name}</h1>
              <div className="d-flex">
                <Button color="info" onClick={() => this.props.loadSchemaDef(this.props.params.id)}>
                  <Octicon name="sync" /> Refresh
                </Button>
                <SchemaDefAvailableButton
                  color={schemaDef.available ? 'success' : 'danger'}
                  setAvailable={this.setAvailable}
                >
                  {schemaDef.available ? 'Publish' : 'Unpublish'}
                </SchemaDefAvailableButton>
                <Button color="warning" onClick={() => { console.log('edit'); }}>
                  <Octicon name="pencil" /> Edit
                </Button>
                <Button color="danger" onClick={() => { console.log('delete'); }}>
                  <Octicon name="x" /> Delete
                </Button>
              </div>
            </div>
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
                      <Link to={`/table-defs/${tableDef.id}`}>
                        #{tableDef.id}-{tableDef.name}
                      </Link>
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
