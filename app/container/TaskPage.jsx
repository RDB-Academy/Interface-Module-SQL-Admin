import React, { Component } from 'react';

import { connect } from 'react-redux';

class TaskPage extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <h1>Task List</h1>
    );
  }
}

export default connect()(TaskPage);
