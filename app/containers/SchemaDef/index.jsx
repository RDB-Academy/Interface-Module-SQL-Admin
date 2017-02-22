import React from 'react';
import Helmet from 'react-helmet';
import Route from 'react-router-dom/Route';

import SchemaDefListContainer from './list';
import SchemaDefView from './view';

const SchemaDefPage = ({ pathname }) => (
  <div>
    <Helmet
      title="SchemaDef"
    />
    <Route pattern={`${pathname}`} exactly component={SchemaDefListContainer} />
    <Route pattern={`${pathname}/:id`} exactly component={SchemaDefView} />
  </div>
);

SchemaDefPage.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default SchemaDefPage;
