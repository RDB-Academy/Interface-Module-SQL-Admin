import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Jumbotron } from 'reactstrap';

import { loadSchemaDef } from 'actions/schemaDefActions';
import { SchemaDefBase } from 'PropTypes';
import { getSchemaDefById } from 'store/schemaDefSelector';

class SchemaDefView extends Component {
  static propTypes = {
    schemaDef: SchemaDefBase,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    loadSchemaDef: PropTypes.func.isRequired,
  }

  static defaultProps = {
    schemaDef: null,
  }

  constructor(props) {
    super(props);

    const { schemaDef, params } = this.props;
    if (schemaDef === null) {
      this.props.loadSchemaDef(params.id);
    }
  }

  render() {
    const { schemaDef } = this.props;
    return (
      <div>
        <Jumbotron>
          <div className="container">
            <h1>Title</h1>
          </div>
        </Jumbotron>
        <div className="container">
          <h1>Null</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  schemaDef: getSchemaDefById(state, parseInt(props.params.id, 10)),
});


const mapDispatchToProps = dispatch => ({
  loadSchemaDef: bindActionCreators(loadSchemaDef, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemaDefView);
