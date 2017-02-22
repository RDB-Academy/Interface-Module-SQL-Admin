import React from 'react';
import Helmet from 'react-helmet';
import Route from 'react-router-dom/Route';

import TableDefView from './view';

const TableDefPage = ({ pathname }) => (
  <div>
    <Helmet
      title="TableDef"
    />
    <Route pattern={`${pathname}/:id`} exactly component={TableDefView} />
  </div>
);
/*
<Match pattern={`${pathname}`} exactly component={SchemaDefList} />
<Match pattern={`${pathname}/:id`} exactly component={SchemaDefView} />
*/

TableDefPage.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default TableDefPage;
