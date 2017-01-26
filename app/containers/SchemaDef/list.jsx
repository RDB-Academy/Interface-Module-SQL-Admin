import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadSchemaDefList } from 'actions/schemaDefActions';
import { SchemaDefTable } from 'components/SchemaDef';
import { SchemaDef } from 'PropTypes';
import { getSchemaDefList } from 'store/schemaDefSelector';

class SchemaDefList extends Component {
  static propTypes = {
    schemaDefList: React.PropTypes.arrayOf(
      SchemaDef.isRequired,
    ).isRequired,
    loadSchemaDefList: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { schemaDefList } = this.props;
    if (schemaDefList === undefined || schemaDefList.length === 0) {
      this.props.loadSchemaDefList();
    }

    this.loadSchemaDefList = this.loadSchemaDefList.bind(this);
  }

  loadSchemaDefList() {
    this.props.loadSchemaDefList();
  }

  render() {
    const { schemaDefList } = this.props;
    return (
      <div>
        <h1>SchemaDef List</h1>
        <SchemaDefTable schemaDefList={schemaDefList} loadSchemaDefList={this.loadSchemaDefList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schemaDefList: getSchemaDefList(state),
});

const mapDispatchToProps = dispatch => ({
  loadSchemaDefList: bindActionCreators(loadSchemaDefList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefList);
