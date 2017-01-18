import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Link from 'react-router/Link';

import { SchemaDef } from 'PropTypes';
import { getSchemaDefById } from 'store/schemaDefSelector';

class SchemaDefView extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.string,
      }),
    }).isRequired,
    pathname: PropTypes.string.isRequired,
    schemaDef: SchemaDef,
  };

  static defaultProps = {
    schemaDef: null,
  };

  render() {
    const { schemaDef, location, pathname } = this.props;
    return (
      <div>
        <Helmet
          title={schemaDef.name}
        />
        <h1>
          <Link
            to={
              location.state === null ? ('/schemaDef') : (location.state.from)
            }
          >
            {'<'}
          </Link>
          SchemaDef View
        </h1>

        <p>id: {schemaDef.id}</p>
        <p>name: {schemaDef.name}</p>
        <div>
          <p>
            tableDefList:
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
              {schemaDef.tableDefList.map(id => (
                <tr key={id}>
                  <td>
                    <Link
                      to={{
                        pathname: `/tableDef/${id}`,
                        state: { from: pathname },
                      }}
                    >
                      {id}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p>
            foreigenKeyList:
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
              {schemaDef.foreignKeyList.map(id => (
                <tr key={id}>
                  <td>
                    {id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p>
            taskList:
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
              {schemaDef.taskList.map(id => (
                <tr key={id}>
                  <td>
                    <Link
                      to={{
                        pathname: `/task/${id}`,
                        state: { from: pathname },
                      }}
                    >
                      {id}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          createdAt: <Moment fromNow>{schemaDef.createdAt}</Moment>
        </p>
        <p>
          modifiedAt: <Moment fromNow>{schemaDef.modifiedAt}</Moment>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  schemaDef: getSchemaDefById(state, parseInt(props.params.id, 10)),
});

export default connect(mapStateToProps)(SchemaDefView);
