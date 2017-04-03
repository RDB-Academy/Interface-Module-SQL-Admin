import React, { PropTypes } from 'react';

import { SchemaDefBase } from 'PropTypes';

import SchemaDefListEntry from './list-entry';

const SchemaDefList = ({ schemaDefList, deleteSchemaDef, updateAvailable }) => (
  <div>
    {(schemaDefList.length === 0) ? (
      <p>List is Empty</p>
    ) : (
      <div>
        { schemaDefList.map(schemaDef => (
          <SchemaDefListEntry
            key={schemaDef.id}
            schemaDef={schemaDef}
            updateAvailable={updateAvailable}
            deleteSchemaDef={deleteSchemaDef}
          />
        ))}
      </div>
    )}
  </div>
);

SchemaDefList.propTypes = {
  schemaDefList: PropTypes.arrayOf(
    SchemaDefBase.isRequired,
  ).isRequired,
  deleteSchemaDef: PropTypes.func.isRequired,
  updateAvailable: PropTypes.func.isRequired,
};

export default SchemaDefList;
