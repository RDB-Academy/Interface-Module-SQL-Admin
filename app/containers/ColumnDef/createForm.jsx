import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, ListGroupItem } from 'reactstrap';
import Octicon from 'rdb-academy-octicon';

class ColumnDefForm extends Component {
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

    const columnDef = {
      name: this.state.name.trim(),
    };

    this.props.onSubmit(columnDef);
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
            className="rounded-0 mr-3"
            style={{
              fontSize: '1.25em',
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
            }}
            placeholder="column name"
            value={name}
            onChange={this.handleChange}
          />
          <Button
            color="success"
            outline
            className="rounded-0 border-0"
            type="submit"
          >
            <Octicon name="diff-added" />
          </Button>
          <Button
            color="danger"
            outline
            className="rounded-0 border-0"
            onClick={this.handleCancel}
          >
            <Octicon name="x" />
          </Button>
        </Form>
      </ListGroupItem>
    );
  }
}

export default ColumnDefForm;
