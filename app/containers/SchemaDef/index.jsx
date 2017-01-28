import React from 'react';
import Helmet from 'react-helmet';
import Match from 'react-router/Match';

import SchemaDefListContainer from './list';
import SchemaDefView from './view';

const SchemaDefPage = ({ pathname }) => (
  <div>
    <Helmet
      title="SchemaDef"
    />
    <Match pattern={`${pathname}`} exactly component={SchemaDefListContainer} />
    <Match pattern={`${pathname}/:id`} exactly component={SchemaDefView} />
  </div>
);

SchemaDefPage.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default SchemaDefPage;