import { PropTypes } from 'react';

const SchemaDefBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

const TableDefBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  schemaDefId: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

const ColumnDefBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  columnDefId: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

const SchemaDefExtendedShape = {
  ...SchemaDefBaseShape,
  relations: PropTypes.shape({
    tableDefList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    foreignKeyList: PropTypes.arrayOf(
      PropTypes.number,
    ).isRequired,
    taskList: PropTypes.arrayOf(
      PropTypes.number,
    ).isRequired,
  }),
};

export const SchemaDefBase = PropTypes.shape(
  SchemaDefBaseShape,
);

export const SchemaDefExtended = PropTypes.shape(
  SchemaDefExtendedShape,
);

export const TableDefBase = PropTypes.shape(
  TableDefBaseShape,
);

export const ColumnDefBase = PropTypes.shape(
  ColumnDefBaseShape,
);

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
