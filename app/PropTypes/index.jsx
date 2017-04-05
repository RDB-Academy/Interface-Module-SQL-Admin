import { PropTypes } from 'react';

const SchemaDefBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

export const SchemaDefBase = PropTypes.shape(
  SchemaDefBaseShape,
);

const TableDefBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  schemaDefId: PropTypes.number.isRequired,
  columnDefListSize: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

export const TableDefBase = PropTypes.shape(
  TableDefBaseShape,
);

const ColumnDefBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tableDefId: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

export const ColumnDefBase = PropTypes.shape(
  ColumnDefBaseShape,
);

const ForeignKeyBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sourceTable: PropTypes.string.isRequired,
  targetTable: PropTypes.string.isRequired,
  schemaDefId: PropTypes.number.isRequired,
  foreignKeyRelationListSize: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

export const ForeignKeyBase = PropTypes.shape(
  ForeignKeyBaseShape,
);

const ForeignKeyRelationBaseShape = {
  id: PropTypes.number.isRequired,
  foreignKeyId: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
};

export const ForeignKeyRelationBase = PropTypes.shape(
  ForeignKeyRelationBaseShape,
);

const SchemaDefExtendedShape = {
  ...SchemaDefBaseShape,
  relations: PropTypes.shape({
    tableDefList: PropTypes.arrayOf(
      TableDefBase,
    ).isRequired,
    foreignKeyList: PropTypes.arrayOf(
      ForeignKeyBase,
    ).isRequired,
    taskList: PropTypes.arrayOf(
      PropTypes.number,
    ).isRequired,
  }),
};

export const SchemaDefExtended = PropTypes.shape(
  SchemaDefExtendedShape,
);

const TableDefExtendedShape = {
  ...TableDefBaseShape,
  columnDefList: PropTypes.arrayOf(
    ColumnDefBase,
  ),
};

export const TableDefExtended = PropTypes.shape(
  TableDefExtendedShape,
);

const ColumnDefExtendedShape = {
  ...ColumnDefBaseShape,
  dataType: PropTypes.string.isRequired,
  isPrimaryKey: PropTypes.bool.isRequired,
  isNotNull: PropTypes.bool.isRequired,
  MetaValueSet: PropTypes.string.isRequired,
};

export const ColumnDefExtended = PropTypes.shape(
  ColumnDefExtendedShape,
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
