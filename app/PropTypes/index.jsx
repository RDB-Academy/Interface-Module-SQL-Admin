import { PropTypes } from 'react';

export const SchemaDef = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tableDefList: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  foreignKeyList: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  taskList: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
});

export const Task = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  schemaDefId: PropTypes.number.isRequired,
  schemaDefName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  referenceStatement: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
});

export const TableDef = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
});
