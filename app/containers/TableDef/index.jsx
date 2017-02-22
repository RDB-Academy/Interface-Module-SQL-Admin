import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import Route from 'react-router-dom/Route';

import TableDefView from './view';

const TableDefPage = ({ match }) => (
  <div>
    <Helmet
      title="TableDef"
    />
    <Route path={`${match.path}/:id`} exact component={TableDefView} />
  </div>
);
/*
<Match pattern={`${pathname}`} exactly component={SchemaDefList} />
<Match pattern={`${pathname}/:id`} exactly component={SchemaDefView} />
*/

TableDefPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableDefPage;
