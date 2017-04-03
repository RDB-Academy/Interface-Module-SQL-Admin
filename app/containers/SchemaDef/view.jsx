import React, { Component, PropTypes } from 'react';
import { Container, Jumbotron } from 'reactstrap';

import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TableDefList } from 'containers/TableDef';
import { SchemaDefActions } from 'actions';
import { OcticonButton } from 'components/Tools';
import { SchemaDefExtended } from 'PropTypes';
import { SchemaDefSelector } from 'selectors';

class SchemaDefView extends Component {
  static propTypes = {
    schemaDef: SchemaDefExtended,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    readSchemaDef: PropTypes.func.isRequired,
    deleteSchemaDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    schemaDef: null,
    tableDefList: null,
  }

  constructor(props) {
    super(props);

    const { schemaDef, match } = this.props;
    if (schemaDef === null || schemaDef.relations === undefined) {
      this.props.readSchemaDef(match.params.id);
    }

    this.state = { collapseTableDefForm: false };

    this.setAvailable = this.setAvailable.bind(this);
  }

  setAvailable(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    const { schemaDef } = this.props;
    if (schemaDef === null) {
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
                <OcticonButton
                  color="info"
                  onClick={() => this.props.readSchemaDef(this.props.match.params.id)}
                  octiconName="sync"
                >
                  Refresh
                </OcticonButton>
                <OcticonButton
                  color={schemaDef.available ? 'success' : 'danger'}
                  onClick={this.setAvailable}
                  octiconName="radio-tower"
                >
                  {schemaDef.available ? 'Publish' : 'Unpublish'}
                </OcticonButton>
                <OcticonButton
                  color="danger"
                  onClick={() => this.props.deleteSchemaDef(this.props.match.params.id)}
                  octiconName="x"
                >
                  Delete
                </OcticonButton>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Container>
          <TableDefList schemaDef={schemaDef} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const schemaDefId = parseInt(props.match.params.id, 10);
  return {
    schemaDef: SchemaDefSelector.getById(state, schemaDefId),
  };
};


const mapDispatchToProps = dispatch => ({
  readSchemaDef: bindActionCreators(SchemaDefActions.read, dispatch),
  deleteSchemaDef: bindActionCreators(SchemaDefActions.delete, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefView);
