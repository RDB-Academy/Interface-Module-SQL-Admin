import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadSchemaDefList } from 'actions/schemaDefActions';
import { getSchemaDefList } from 'store/schemaDefSelector';

class SchemaDefPage extends Component {
  static propTypes = {
    schemaDefList: React.PropTypes.array.isRequired, // eslint-disable-line
    loadSchemaDefList: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.loadSchemaDefList = this.loadSchemaDefList.bind(this);
    console.log(this.props);
  }

  loadSchemaDefList() {
    this.props.loadSchemaDefList();
  }

  render() {
    const { schemaDefList } = this.props;

    return (
      <div>
        <h1>SchemaDef List</h1>
        <button onClick={this.loadSchemaDefList} >Load SchemaDefList</button>
        { schemaDefList.map(schemaDef => (
          <p key={schemaDef.id}>{ schemaDef.name }</p>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schemaDefList: getSchemaDefList(state),
  };
}

const mapDispatchToProps = dispatch => (
  {
    loadSchemaDefList: bindActionCreators(loadSchemaDefList, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefPage);
