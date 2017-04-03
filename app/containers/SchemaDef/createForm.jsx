import React, { Component, PropTypes } from 'react';
import { Button, Form, Input, ListGroupItem } from 'reactstrap';
import Octicon from 'react-octicon';

import { OcticonButton } from 'components/Tools';

class SchemaDefForm extends Component {
  static propTypes = {
    toggleAction: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.resetState = this.resetState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  resetState() {
    this.setState({
      name: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const schemaDef = {
      name: this.state.name.trim(),
    };

    this.props.onSubmit(schemaDef);
    this.props.toggleAction();
    this.resetState();
  }

  handleCancel() {
    this.props.toggleAction();
    this.resetState();
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }


  render() {
    const { name } = this.state;
    return (
      <ListGroupItem className="border-0 py-0 px-3">
        <Form inline onSubmit={this.handleSubmit}>
          <Input
            size="sm"
            className="rounded-0 my-1 mr-3"
            style={{
              fontSize: '1.25em',
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
            }}
            placeholder="table name"
            value={name}
            onChange={this.handleChange}
          />
          <Button
            size="sm"
            color="success"
            className="rounded-0"
            type="submit"
          >
            <Octicon name="diff-added" />
          </Button>
          <OcticonButton
            color="danger"
            onClick={this.handleCancel}
            size="sm"
            octiconName="x"
          >
            Cancel
          </OcticonButton>
        </Form>
      </ListGroupItem>
    );
  }
}

export default SchemaDefForm;
