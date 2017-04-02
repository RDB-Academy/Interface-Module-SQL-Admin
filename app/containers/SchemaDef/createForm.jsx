import React, { Component, PropTypes } from 'react';

import { OcticonButton } from 'components/Tools';

class SchemaDefForm extends Component {
  static propTypes = {
    submitAction: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { name: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const schemaDef = {
      name: this.state.name.trim(),
    };

    this.props.submitAction(schemaDef);

    this.setState({
      name: '',
    });
  }

  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({ name: event.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="table name" value={name} onChange={this.handleChange} />
        <OcticonButton color="success" size="sm" octiconName="plus">Add</OcticonButton>
      </form>
    );
  }
}

export default SchemaDefForm;
