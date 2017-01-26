import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Link from 'react-router/Link';
import { bindActionCreators } from 'redux';

import { loadTableDefById } from 'actions/tableDefActions';
import { TableDef } from 'PropTypes';
import { getTableById } from 'store/tableDefSelector';

class TableDefView extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.string,
      }),
    }).isRequired,
    loadTableDefById: PropTypes.func.isRequired,
    tableDef: TableDef,
  };

  static defaultProps = {
    tableDef: null,
  };

  constructor(props) {
    super(props);

    this.loadTableDef = this.loadTableDef.bind(this);
    if (this.props.tableDef === null) {
      this.loadTableDef();
    }
  }

  loadTableDef() {
    this.props.loadTableDefById(this.props.params.id);
  }

  render() {
    const { tableDef, location } = this.props;
    if (tableDef === null) {
      return (
        <div>
          <h1>TableDef not available</h1>
          <button onClick={() => this.loadTableDef()}>Load TableDef</button>
        </div>
      );
    }
    return (
      <div>
        <Helmet
          title={tableDef.name}
        />
        <h1>
          <Link
            to={location.state.from}
          >
            {'<'}
          </Link>
          TableDef View
        </h1>

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
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tableDef: getTableById(state, parseInt(props.params.id, 10)),
});

const mapDispatchToProps = dispatch => ({
  loadTableDefById: bindActionCreators(loadTableDefById, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDefView);
