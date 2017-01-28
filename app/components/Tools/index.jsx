import React, { Component, PropTypes } from 'react';
import { Tooltip } from 'reactstrap';
import Moment from 'react-moment';

let id = 0;

const nextID = () => {
  id += 1;
  return id;
};

class ImprovedMoment extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
      componentId: `ImprovedMoment${nextID()}`,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    const { children } = this.props;
    const { componentId, tooltipOpen } = this.state;
    return (
      <div>
        <Moment fromNow id={componentId}>
          {children}
        </Moment>
        <Tooltip placement="right" isOpen={tooltipOpen} target={componentId} toggle={this.toggle}>
          {children}
        </Tooltip>
      </div>
    );
  }
}

export { ImprovedMoment };
