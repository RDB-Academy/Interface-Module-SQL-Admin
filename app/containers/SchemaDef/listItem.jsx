import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SchemaDefListItemComponent } from 'components/SchemaDef';

import { SchemaDefActions } from 'actions';
import { SchemaDefBase } from 'PropTypes';
import { SchemaDefSelector } from 'selectors';

class SchemaDefListItem extends Component {
  static propTypes = {
    schemaDefId: PropTypes.number.isRequired,
    schemaDef: SchemaDefBase,
    deleteSchemaDef: PropTypes.func.isRequired,
    updateSchemaDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    schemaDef: null,
  };

  /**
   * Creates an instance of SchemaDefListItem.
   * @param {any} props
   *
   * @memberOf SchemaDefListItem
   */
  constructor(props) {
    super(props);

    this.deleteSchemaDef = this.deleteSchemaDef.bind(this);
    this.toggleAvailable = this.toggleAvailable.bind(this);
  }

  /**
   *
   *
   *
   * @memberOf SchemaDefListItem
   */
  deleteSchemaDef() {
    const { schemaDefId } = this.props;
    this.props.deleteSchemaDef(schemaDefId);
  }

  /**
   *
   *
   *
   * @memberOf SchemaDefListItem
   */
  toggleAvailable() {
    const { schemaDefId, schemaDef } = this.props;

    const schemaDefDelta = {
      available: !schemaDef.available,
    };

    this.props.updateSchemaDef(schemaDefId, schemaDefDelta);
  }

  render() {
    const { schemaDef } = this.props;
    return (
      <SchemaDefListItemComponent
        schemaDef={schemaDef}
        deleteSchemaDef={this.deleteSchemaDef}
        toggleAvailable={this.toggleAvailable}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  schemaDef: SchemaDefSelector.getById(state, props.schemaDefId),
});

const mapDispatchToProps = dispatch => ({
  updateSchemaDef: bindActionCreators(SchemaDefActions.update, dispatch),
  deleteSchemaDef: bindActionCreators(SchemaDefActions.delete, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefListItem);
