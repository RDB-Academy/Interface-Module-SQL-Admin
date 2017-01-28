import React, { Component } from 'react';
import { Card, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadSchemaDefList } from 'actions/schemaDefActions';
import { SchemaDefList } from 'components/SchemaDef';
import { SchemaDefBase } from 'PropTypes';
import { getSchemaDefList } from 'store/schemaDefSelector';

class SchemaDefListContainer extends Component {
  static propTypes = {
    schemaDefList: React.PropTypes.arrayOf(
      SchemaDefBase.isRequired,
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
        <Jumbotron>
          <div className="container">
            <h1 className="display-3">SchemaDef List</h1>
          </div>
        </Jumbotron>
        <div className="container">
          <Card>
            <SchemaDefList
              schemaDefList={schemaDefList}
              loadSchemaDefList={this.loadSchemaDefList}
            />
          </Card>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefListContainer);
