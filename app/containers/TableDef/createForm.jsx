import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, ListGroupItem } from 'reactstrap';
import Octicon from 'rdb-academy-octicon';

class TableDefForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    toggleAction: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      tableDef: {
        name: '',
      },
    };

    this.resetState = this.resetState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  resetState() {
    this.setState({
      tableDef: {
        name: '',
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { tableDef } = this.state;

    tableDef.name = tableDef.name.trim();

    this.props.onSubmit(tableDef);
    this.props.toggleAction();
    this.resetState();
  }

  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({
      tableDef: {
        name: event.target.value,
      },
    });
  }

  handleCancel() {
    this.props.toggleAction();
    this.resetState();
  }

  render() {
    const { name } = this.state.tableDef;
    return (
      <ListGroupItem>
        <Form inline onSubmit={this.handleSubmit}>
          <Input
            size="sm"
            className="rounded-0 mr-3"
            style={{
              fontSize: '1em',
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
            }}
            placeholder="table name"
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

export default TableDefForm;
