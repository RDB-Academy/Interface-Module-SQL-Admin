import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import Route from 'react-router-dom/Route';

import SchemaDefListContainer from './list';
import SchemaDefView from './view';

const SchemaDefPage = ({ match }) => (
  <div>
    <Helmet
      title="SchemaDef"
    />
    <Route path={`${match.path}`} exact component={SchemaDefListContainer} />
    <Route path={`${match.path}/:id`} exact component={SchemaDefView} />
  </div>
);

SchemaDefPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default SchemaDefPage;
