import React, { Component } from 'react';
import { Button, Card, CardBlock, Container, Jumbotron } from 'reactstrap';

import Octicon from 'react-octicon';
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
  }

  render() {
    const { schemaDefList } = this.props;
    return (
      <div>
        <Jumbotron>
          <Container>
            <div className="d-flex w-100 justify-content-between">
              <h1>SchemaDef List</h1>
              <div className="d-flex">
                <Button color="success" onClick={() => { console.log('create new object'); }}>
                  <Octicon name="plus" /> New
                </Button>
                <Button color="info" onClick={this.props.loadSchemaDefList}>
                  <Octicon name="sync" /> Reload
                </Button>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Container>
          <Card>
            <CardBlock>
              <SchemaDefList
                schemaDefList={schemaDefList}
              />
            </CardBlock>
          </Card>
        </Container>
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
