import React, { Component, PropTypes } from 'react';
import { Button, Form, Input, ListGroupItem } from 'reactstrap';
import Octicon from 'react-octicon';

class ForeignKeyForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
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

    const foreignKey = {
      name: this.state.name.trim(),
    };

    this.props.onSubmit(foreignKey);

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
            placeholder="foreignKey name"
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

export default ForeignKeyForm;
