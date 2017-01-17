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
    schemaDef: SchemaDef,
  };

  static defaultProps = {
    schemaDef: null,
  };

  render() {
    const { schemaDef } = this.props;
    return (
      <div>
        <Helmet
          title={schemaDef.name}
        />
        <h1><Link to="/schemaDef">{'<'}</Link> SchemaDef View</h1>
        <p>id: {schemaDef.id}</p>
        <p>name: {schemaDef.name}</p>
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
