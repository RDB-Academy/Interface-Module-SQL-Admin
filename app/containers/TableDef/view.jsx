import React, { Component, PropTypes } from 'react';
import { Container, Jumbotron } from 'reactstrap';

import Helmet from 'react-helmet';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadTableDefById } from 'actions/tableDefActions';
import { TableDef } from 'PropTypes';
import { getTableById } from 'store/tableDefSelector';

class TableDefView extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    loadTableDefById: PropTypes.func.isRequired,
    tableDef: TableDef,
  };

  static defaultProps = {
    tableDef: null,
  };

  constructor(props) {
    super(props);

    console.log(props.match);

    this.loadTableDef = this.loadTableDef.bind(this);
    if (this.props.tableDef === null) {
      this.loadTableDef();
    }
  }

  loadTableDef() {
    this.props.loadTableDefById(this.props.match.params.id);
  }

  render() {
    const { tableDef } = this.props;
    if (tableDef === null) {
      return (
        <div>
          <Jumbotron>
            <Container>
              <h1>TableDef not available</h1>
              <button onClick={() => this.loadTableDef()}>Load TableDef</button>
            </Container>
          </Jumbotron>
        </div>
      );
    }
    return (
      <div>
        <Helmet
          title={tableDef.name}
        />
        <Jumbotron>
          <Container>
            <h1>TableDef View</h1>
          </Container>
        </Jumbotron>
        <Container>
          <p>id: {tableDef.id}</p>
          <p>name: {tableDef.name}</p>
          <p>SchemaDefId: {tableDef.schemaDefId}</p>
          <p>Test</p>
          <div>
            <p>
              columnDefList:
            </p>
            <table>
              <thead>
                <tr>
                  <th>
                    id
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableDef.columnDefList.map(id => (
                  <tr key={id}>
                    <td>
                      {id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            createdAt: <Moment fromNow>{tableDef.createdAt}</Moment>
          </p>
          <p>
            modifiedAt: <Moment fromNow>{tableDef.modifiedAt}</Moment>
          </p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tableDef: getTableById(state, parseInt(props.match.params.id, 10)),
});

const mapDispatchToProps = dispatch => ({
  loadTableDefById: bindActionCreators(loadTableDefById, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDefView);
