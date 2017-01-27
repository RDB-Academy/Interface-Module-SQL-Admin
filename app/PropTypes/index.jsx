import { PropTypes } from 'react';

const ReactionNode = {
  '+1': PropTypes.number.isRequired,
  '-1': PropTypes.number.isRequired,
  self: PropTypes.oneOf(['+1', '-1', 'null']).isRequired,
};

const SchemaDefBase = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  reactions: PropTypes.shape(
    ReactionNode,
  ).isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

const SchemaDefExtended = {
  ...SchemaDefBase,
  tableDefList: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  foreignKeyList: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  taskList: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
};

export const SchemaDefMin = PropTypes.shape(
  SchemaDefBase,
);

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
