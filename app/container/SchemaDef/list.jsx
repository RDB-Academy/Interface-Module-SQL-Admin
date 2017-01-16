import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Link from 'react-router/Link';
import { bindActionCreators } from 'redux';

import { loadSchemaDefList } from 'actions/schemaDefActions';
import { getSchemaDefList } from 'store/schemaDefSelector';

const SchemaDefTable = ({ schemaDefList }) => {
  if (schemaDefList.length === 0) {
    return (
      <p>List is Empty</p>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>createdAt</th>
          <th>modifiedAt</th>
        </tr>
      </thead>
      <tbody>
        { schemaDefList.map(schemaDef => (
          <tr key={schemaDef.id}>
            <td><Link to={`/schemaDef/${schemaDef.id}`}> { schemaDef.name }</Link></td>
            <th><Moment fromNow>{schemaDef.createdAt}</Moment></th>
            <th><Moment fromNow>{schemaDef.modifiedAt}</Moment></th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

SchemaDefTable.propTypes = {
  schemaDefList: React.PropTypes.array.isRequired,
};

class SchemaDefList extends Component {
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
        <SchemaDefTable schemaDefList={schemaDefList} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefList);
