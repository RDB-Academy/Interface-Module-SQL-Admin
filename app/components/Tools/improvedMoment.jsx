import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import Moment from 'rdb-academy-moment';

let id = 0;

const nextID = () => {
  id += 1;
  return id;
};

class ImprovedMoment extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    position: PropTypes.string,
  }

  static defaultProps = {
    position: 'right',
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
    const { children, position } = this.props;
    const { componentId, tooltipOpen } = this.state;
    return (
      <div>
        <Moment fromNow id={componentId}>
          {children}
        </Moment>
        <Tooltip
          placement={position}
          isOpen={tooltipOpen}
          target={componentId}
          toggle={this.toggle}
        >
          {children}
        </Tooltip>
      </div>
    );
  }
}

export default ImprovedMoment;
