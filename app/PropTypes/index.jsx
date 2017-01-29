import { PropTypes } from 'react';

/*
const ReactionNode = {
  '+1': PropTypes.number.isRequired,
  '-1': PropTypes.number.isRequired,
  self: PropTypes.oneOf(['+1', '-1', 'null']).isRequired,
};
*/

const SchemaDefBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  /*
  reactions: PropTypes.shape(
    ReactionNode,
  ).isRequired,
  */
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
