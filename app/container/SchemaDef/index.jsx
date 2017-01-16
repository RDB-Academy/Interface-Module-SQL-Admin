import React from 'react';
import Match from 'react-router/Match';

import SchemaDefList from './list';
import SchemaDefView from './view';

const SchemaDefPage = ({ pathname }) => (
  <div>
    <Match pattern={`${pathname}`} exactly component={SchemaDefList} />
    <Match pattern={`${pathname}/:id`} exactly component={SchemaDefView} />
  </div>
);

SchemaDefPage.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default SchemaDefPage;
