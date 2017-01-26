import React from 'react';
import Helmet from 'react-helmet';
import Match from 'react-router/Match';

import TableDefView from './view';

const TableDefPage = ({ pathname }) => (
  <div>
    <Helmet
      title="TableDef"
    />
    <Match pattern={`${pathname}/:id`} exactly component={TableDefView} />
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
