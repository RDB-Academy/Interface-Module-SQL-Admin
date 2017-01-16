import React from 'react';
import Match from 'react-router/Match';

import SchemaDefList from './SchemaDef/list';

const SchemaDefPage = ({ pathname }) => (
  <div>
    <Match pattern={`${pathname}`} exactly component={SchemaDefList} />
    <Match pattern={`${pathname}/:id`} exactly render={() => (<h3>Test</h3>)} />
  </div>
);

SchemaDefPage.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default SchemaDefPage;
