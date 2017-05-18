import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import { SchemaDefList, SchemaDefView } from 'containers/SchemaDef';

const SchemaDefPage = ({ match }) => (
  <div>
    <Helmet
      title="SchemaDef"
    />
    <Switch>
      <Route path={`${match.path}`} exact component={SchemaDefList} />
      <Route path={`${match.path}/:id`} exact component={SchemaDefView} />
    </Switch>
  </div>
);

SchemaDefPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default SchemaDefPage;
